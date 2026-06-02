export interface CsvServiceResponse<T> {
    data: T | null;
    error: string | null;
    loading: boolean;
    source?: 'cache' | 'google-sheets' | 'fallback';
}

export class BaseCsvService<T, R> {
    private csvUrl: string;
    private cacheKey: string;
    private cacheDuration: number;
    private memoryCache: R | null = null;
    private memoryCacheTime: number = 0;
    private normalizeFn: (rows: T[]) => R | null;
    private fallbackData?: R;

    constructor(
        csvUrl: string,
        cacheKey: string,
        normalizeFn: (rows: T[]) => R | null,
        fallbackData?: R,
        cacheDuration: number = 5 * 60 * 1000 // 5 minutes default
    ) {
        this.csvUrl = csvUrl;
        this.cacheKey = cacheKey;
        this.normalizeFn = normalizeFn;
        this.fallbackData = fallbackData;
        this.cacheDuration = cacheDuration;
    }

    private getFromMemoryCache(): R | null {
        const now = Date.now();
        if (this.memoryCache && (now - this.memoryCacheTime) < this.cacheDuration) {
            return this.memoryCache;
        }
        return null;
    }

    private setMemoryCache(data: R): void {
        this.memoryCache = data;
        this.memoryCacheTime = Date.now();
    }

    private getFromLocalStorage(): R | null {
        if (typeof window === 'undefined') return null;

        try {
            const cached = localStorage.getItem(this.cacheKey);
            if (cached) {
                const { data, timestamp } = JSON.parse(cached);
                const now = Date.now();
                if ((now - timestamp) < this.cacheDuration) {
                    return data;
                }
            }
        } catch (error) {
            console.error(`Error reading from localStorage (${this.cacheKey}):`, error);
        }
        return null;
    }

    private setLocalStorage(data: R): void {
        if (typeof window === 'undefined') return;

        try {
            localStorage.setItem(this.cacheKey, JSON.stringify({
                data,
                timestamp: Date.now()
            }));
        } catch (error) {
            console.error(`Error writing to localStorage (${this.cacheKey}):`, error);
        }
    }

    public async fetchData(): Promise<CsvServiceResponse<R>> {
        // Check memory cache first
        const cachedData = this.getFromMemoryCache();
        if (cachedData) {
            if (process.env.NODE_ENV === 'development') {
                console.log(`[CSV Service] Using memory cache for ${this.cacheKey}`);
            }
            return {
                data: cachedData,
                error: null,
                loading: false,
                source: 'cache'
            };
        }

        // Check localStorage cache
        const localStorageData = this.getFromLocalStorage();
        if (localStorageData) {
            this.setMemoryCache(localStorageData);
            if (process.env.NODE_ENV === 'development') {
                console.log(`[CSV Service] Using localStorage cache for ${this.cacheKey}`);
            }
            return {
                data: localStorageData,
                error: null,
                loading: false,
                source: 'cache'
            };
        }

        // Fetch from Google Sheets
        try {
            const response = await fetch(this.csvUrl);

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const csvText = await response.text();

            // Dynamic import of Papa Parse to avoid SSR issues
            const Papa = (await import('papaparse')).default;

            return new Promise((resolve) => {
                Papa.parse<T>(csvText, {
                    header: true,
                    skipEmptyLines: true,
                    complete: (results) => {
                        const data = this.normalizeFn(results.data);

                        if (data) {
                            this.setMemoryCache(data);
                            this.setLocalStorage(data);
                            if (process.env.NODE_ENV === 'development') {
                                console.log(`[CSV Service] Fetched from Google Sheets for ${this.cacheKey}`);
                            }
                            resolve({
                                data: data,
                                error: null,
                                loading: false,
                                source: 'google-sheets'
                            });
                        } else {
                            // Use fallback if normalization fails
                            if (this.fallbackData) {
                                if (process.env.NODE_ENV === 'development') {
                                    console.log(`[CSV Service] Normalization failed, using fallback for ${this.cacheKey}`);
                                }
                                resolve({
                                    data: this.fallbackData,
                                    error: null,
                                    loading: false,
                                    source: 'fallback'
                                });
                            } else {
                                resolve({
                                    data: null,
                                    error: 'Failed to parse CSV data',
                                    loading: false
                                });
                            }
                        }
                    },
                    error: (error: Error) => {
                        // Use fallback if parsing fails
                        if (this.fallbackData) {
                            if (process.env.NODE_ENV === 'development') {
                                console.log(`[CSV Service] Parse error, using fallback for ${this.cacheKey}:`, error.message);
                            }
                            resolve({
                                data: this.fallbackData,
                                error: null,
                                loading: false,
                                source: 'fallback'
                            });
                        } else {
                            resolve({
                                data: null,
                                error: error.message || 'Failed to parse CSV',
                                loading: false
                            });
                        }
                    }
                });
            });
        } catch (error) {
            // Use fallback if fetch fails
            if (this.fallbackData) {
                if (process.env.NODE_ENV === 'development') {
                    console.log(`[CSV Service] Fetch error, using fallback for ${this.cacheKey}:`, error instanceof Error ? error.message : error);
                }
                return {
                    data: this.fallbackData,
                    error: null,
                    loading: false,
                    source: 'fallback'
                };
            }
            return {
                data: null,
                error: error instanceof Error ? error.message : 'Failed to fetch data',
                loading: false
            };
        }
    }

    public clearCache(): void {
        this.memoryCache = null;
        this.memoryCacheTime = 0;
        if (typeof window !== 'undefined') {
            localStorage.removeItem(this.cacheKey);
        }
        if (process.env.NODE_ENV === 'development') {
            console.log(`[CSV Service] Cleared cache for ${this.cacheKey}`);
        }
    }
}
