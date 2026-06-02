import Papa from 'papaparse';
import { AboutCsvColl, AboutData, AboutServiceResponse } from '@/types/about';

const CSV_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSR2_xLAhYGo_ALSYaEyhd7Pf_Hv0onfLBuEGmZMP27vbIIMFhe065mO15WZbjBuhjpvLmz436GH74y/pub?gid=0&single=true&output=csv';

const CACHE_KEY = 'about_data';
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

let memoryCache: AboutData | null = null;
let memoryCacheTime: number = 0;

const getFromMemoryCache = (): AboutData | null => {
    const now = Date.now();
    if (memoryCache && (now - memoryCacheTime) < CACHE_DURATION) {
        return memoryCache;
    }
    return null;
};

const setMemoryCache = (data: AboutData): void => {
    memoryCache = data;
    memoryCacheTime = Date.now();
};

const getFromLocalStorage = (): AboutData | null => {
    if (typeof window === 'undefined') return null;
    
    try {
        const cached = localStorage.getItem(CACHE_KEY);
        if (cached) {
            const { data, timestamp } = JSON.parse(cached);
            const now = Date.now();
            if ((now - timestamp) < CACHE_DURATION) {
                return data;
            }
        }
    } catch (error) {
        console.error('Error reading from localStorage:', error);
    }
    return null;
};

const setLocalStorage = (data: AboutData): void => {
    if (typeof window === 'undefined') return;
    
    try {
        localStorage.setItem(CACHE_KEY, JSON.stringify({
            data,
            timestamp: Date.now()
        }));
    } catch (error) {
        console.error('Error writing to localStorage:', error);
    }
};

const normalizeData = (rows: AboutCsvColl[]): AboutData | null => {
    if (!rows.length) {
        console.error('No data found in CSV');
        return null;
    }

    const dataMap = rows.reduce<Record<string, string>>((acc, row) => {
        acc[row.name] = row.about;
        return acc;
    }, {});

    return {
        description: dataMap.description || '112',
        imageAlt: dataMap.imageAlt || 'My description',
        imagePath: dataMap.imagePath || '../../../images/Me.png',
    };
};

export const fetchAboutData = async (): Promise<AboutServiceResponse> => {
    // Check memory cache first
    const cachedData = getFromMemoryCache();
    if (cachedData) {
        return {
            data: cachedData,
            error: null,
            loading: false
        };
    }

    // Check localStorage cache
    const localStorageData = getFromLocalStorage();
    if (localStorageData) {
        setMemoryCache(localStorageData);
        return {
            data: localStorageData,
            error: null,
            loading: false
        };
    }

    try {
        const response = await fetch(CSV_URL);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const csvText = await response.text();

        return new Promise((resolve) => {
            Papa.parse<AboutCsvColl>(csvText, {
                header: true,
                skipEmptyLines: true,
                complete: (results) => {
                    const data = normalizeData(results.data);
                    
                    if (data) {
                        setMemoryCache(data);
                        setLocalStorage(data);
                    }

                    resolve({
                        data: data,
                        error: data ? null : 'Failed to parse CSV data',
                        loading: false
                    });
                },
                error: (error: Error) => {
                    resolve({
                        data: null,
                        error: error.message || 'Failed to parse CSV',
                        loading: false
                    });
                }
            });
        });
    } catch (error) {
        return {
            data: null,
            error: error instanceof Error ? error.message : 'Failed to fetch data',
            loading: false
        };
    }
};

export const clearCache = (): void => {
    memoryCache = null;
    memoryCacheTime = 0;
    if (typeof window !== 'undefined') {
        localStorage.removeItem(CACHE_KEY);
    }
};
