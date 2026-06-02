import { BaseCsvService, CsvServiceResponse } from './baseCsvService';
import { AboutCsvColl, AboutData, AboutServiceResponse } from '@/types/about';

const CSV_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSR2_xLAhYGo_ALSYaEyhd7Pf_Hv0onfLBuEGmZMP27vbIIMFhe065mO15WZbjBuhjpvLmz436GH74y/pub?gid=0&single=true&output=csv';

const normalizeAboutData = (rows: AboutCsvColl[]): AboutData | null => {
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

const aboutService = new BaseCsvService<AboutCsvColl, AboutData>(
    CSV_URL,
    'about_data',
    normalizeAboutData,
    undefined, // No fallback for About section
    5 * 60 * 1000 // 5 minutes cache
);

export const fetchAboutData = async (): Promise<AboutServiceResponse> => {
    const response = await aboutService.fetchData();
    return response;
};

export const clearCache = (): void => {
    aboutService.clearCache();
};
