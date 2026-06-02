export interface AboutCsvColl {
    name: string;
    about: string;
}
export interface AboutData {
    description: string;
    imageAlt: string;
    imagePath: string;
}

export interface AboutServiceResponse {
    data: AboutData | null;
    error: string | null;
    loading: boolean;
    source?: 'cache' | 'google-sheets' | 'fallback';
}
