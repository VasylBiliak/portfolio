import { BaseCsvService, CsvServiceResponse } from './baseCsvService';
import { ProjectCsvRow, Project, projects } from '@/data/projects';

const CSV_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSR2_xLAhYGo_ALSYaEyhd7Pf_Hv0onfLBuEGmZMP27vbIIMFhe065mO15WZbjBuhjpvLmz436GH74y/pub?gid=1488515440&single=true&output=csv';

const normalizeProjectsData = (rows: ProjectCsvRow[]): Project[] | null => {
    if (!rows.length) {
        console.error('No projects data found in CSV');
        return null;
    }

    return rows.map(row => ({
        projectName: row.projectName || '',
        repoUrl: row.repoUrl || undefined,
        externalUrl: row.externalUrl || undefined,
        description: row.description || '',
        technologies: row.technologies || ''
    })).filter(project => project.projectName); // Filter out projects without names
};

const projectsService = new BaseCsvService<ProjectCsvRow, Project[]>(
    CSV_URL,
    'projects_data',
    normalizeProjectsData,
    projects, // Fallback to static projects
    5 * 60 * 1000 // 5 minutes cache
);

export const fetchProjectsData = async (): Promise<CsvServiceResponse<Project[]>> => {
    return projectsService.fetchData();
};

export const clearProjectsCache = (): void => {
    projectsService.clearCache();
};
