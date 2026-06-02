# Projects Section - CSV Setup Guide

This document explains how to set up and manage the Projects section content using Google Sheets CSV export with Papa Parse.

## Overview

The Projects section fetches its content from a public Google Sheet CSV endpoint using Papa Parse for parsing. This approach eliminates the need for API keys and Gatsby plugins, with automatic fallback to static data if Google Sheets is unavailable.

## Architecture

```
Google Sheet (CSV) → fetch() → Papa Parse (dynamic import) → baseCsvService → projectsService → Projects Component
```

**Fallback Flow:**
```
Google Sheets (fail) → Static projects from src/data/projects.ts → Projects Component
```

## Google Sheet Configuration

### Current Google Sheet

**URL:** https://docs.google.com/spreadsheets/d/e/2PACX-1vSR2_xLAhYGo_ALSYaEyhd7Pf_Hv0onfLBuEGmZMP27vbIIMFhe065mO15WZbjBuhjpvLmz436GH74y/pub?gid=1488515440&single=true&output=csv

**CSV Endpoint:** https://docs.google.com/spreadsheets/d/e/2PACX-1vSR2_xLAhYGo_ALSYaEyhd7Pf_Hv0onfLBuEGmZMP27vbIIMFhe065mO15WZbjBuhjpvLmz436GH74y/pub?gid=1815685084&single=true&output=csv

### Required Sheet Structure

The Google Sheet must have the following columns in the first row:

| Column Name | Description | Example |
|-------------|-------------|---------|
| projectName | Project name | Vor Studio |
| repoUrl | GitHub repository URL (optional) | https://github.com/VasylBiliak/vor-studio |
| externalUrl | Live demo URL (optional) | https://vor-studio.vercel.app/ |
| description | Project description | A high-performance e-commerce platform... |
| technologies | Technologies used (comma-separated) | React, TypeScript, Next.js, Tailwind |

### Example Row

| projectName | repoUrl | externalUrl | description | technologies |
|-------------|---------|-------------|-------------|--------------|
| Vor Studio | https://github.com/VasylBiliak/vor-studio | https://vor-studio.vercel.app/ | A high-performance e-commerce platform for the Vor Studio lifestyle brand. Leveraging the power of Next.js and Redux Toolkit, the project features lightning-fast page transitions, complex state management for the shopping cart, and a fully responsive interface. Optimized for speed, SEO, and flawless UX. | React, TypeScript, Next.js, Tailwind, CSS, Redux Toolkit, Vite, Vercel |

## Sheet Permissions

### Required Settings

1. **Make the sheet public:**
   - Click "Share" in your Google Sheet
   - Change access to "Anyone with the link can view"
   - This is required for the CSV endpoint to work without authentication

2. **Enable CSV export:**
   - The CSV endpoint works automatically for public sheets
   - No additional configuration needed

### Testing the CSV Endpoint

Open the CSV URL in your browser to verify it returns data:
```
https://docs.google.com/spreadsheets/d/e/2PACX-1vSR2_xLAhYGo_ALSYaEyhd7Pf_Hv0onfLBuEGmZMP27vbIIMFhe065mO15WZbjBuhjpvLmz436GH74y/pub?gid=1815685084&single=true&output=csv
```

You should see CSV-formatted text with your data.

## How to Update Content

### Adding a New Project

1. Open your Google Sheet
2. Add a new row with the project details
3. Fill in all required columns
4. Save the sheet
5. The changes will be reflected on the website after cache expires (5 minutes) or after clearing cache

### Updating an Existing Project

1. Open your Google Sheet
2. Edit the corresponding row
3. Save the sheet
4. Changes appear after cache expiration

### Removing a Project

1. Open your Google Sheet
2. Delete the row for the project you want to remove
3. Save the sheet
4. Changes appear after cache expiration

## Fallback Behavior

The Projects section has automatic fallback to static data:

### When Fallback is Triggered

- Google Sheets CSV endpoint is unavailable
- Network request fails
- CSV parsing fails
- CSV is empty or malformed
- Rate limiting by Google

### Fallback Data Source

The fallback data is located in `src/data/projects.ts` and contains the original static project definitions. This ensures that visitors always see projects even if Google Sheets is down.

### User Experience

Users will **never see an error state**. If Google Sheets is unavailable, they will automatically see the static projects without noticing any difference in the experience.

## Caching Strategy

The service implements a two-level caching strategy:

### Memory Cache
- Duration: 5 minutes
- Scope: Per page load
- Automatically refreshed after expiration

### LocalStorage Cache
- Duration: 5 minutes
- Scope: Persistent across sessions
- Automatically refreshed after expiration

### Clearing Cache

To force an immediate refresh of data:
1. Open browser DevTools (F12)
2. Go to Application tab
3. Local Storage → your domain
4. Delete the `projects_data` key
5. Refresh the page

Or use the `clearProjectsCache()` function from projectsService:
```typescript
import { clearProjectsCache } from '@/services/projectsService';
clearProjectsCache();
```

## File Structure

```
src/
├── components/
│   ├── sections/
│   │   └── projects/
│   │       ├── Projects.tsx          # Main component (uses CSV service)
│   │       ├── projects.module.css   # Styling (unchanged)
│   │       └── index.ts             # Export file
│   └── ui/
│       └── card/
│           ├── ProjectCard.tsx       # Project card component (unchanged)
│           └── card.module.css       # Card styling (unchanged)
├── services/
│   ├── baseCsvService.ts             # Reusable CSV service base class
│   ├── aboutService.ts               # About section service (uses base)
│   └── projectsService.ts            # Projects section service (uses base)
├── data/
│   └── projects.ts                   # Static projects (fallback data)
└── types/
    └── about.ts                      # TypeScript interfaces
```

## Modified Files

**Created:**
- `src/services/baseCsvService.ts` - Reusable CSV service base class
- `src/services/projectsService.ts` - Projects-specific CSV service
- `PROJECTS_CSV_SETUP.md` - This documentation

**Modified:**
- `src/components/sections/projects/Projects.tsx` - Refactored to use CSV service
- `src/services/aboutService.ts` - Refactored to use base service
- `src/data/projects.ts` - Added ProjectCsvRow interface
- `src/types/about.ts` - Added source field to AboutServiceResponse

**Unchanged:**
- `src/components/ui/card/ProjectCard.tsx` - No changes needed
- `src/components/ui/card/card.module.css` - No changes needed
- `src/components/sections/projects/projects.module.css` - No changes needed

## Data Flow

1. **Component Mount:** Projects component mounts and calls `fetchProjectsData()`
2. **Cache Check:** Service checks memory cache, then localStorage cache
3. **CSV Fetch:** If no valid cache, fetches CSV from Google Sheets
4. **Parsing:** Papa Parse (dynamically imported) converts CSV to JavaScript objects
5. **Normalization:** Service converts CSV rows to Project objects
6. **Cache Update:** Service updates both memory and localStorage caches
7. **Fallback:** If any step fails, uses static projects from `src/data/projects.ts`
8. **Render:** Component renders with the fetched data (Google Sheets or fallback)

## Error Handling

The service handles errors gracefully:

- **Network failures:** Automatically uses static projects
- **Parsing errors:** Automatically uses static projects
- **Empty CSV:** Automatically uses static projects
- **Rate limiting:** Automatically uses static projects
- **No user-visible errors:** Visitors always see projects

## Development Logging

In development mode, the service logs the data source:

- `[CSV Service] Using memory cache for projects_data`
- `[CSV Service] Using localStorage cache for projects_data`
- `[CSV Service] Fetched from Google Sheets for projects_data`
- `[CSV Service] Normalization failed, using fallback for projects_data`
- `[CSV Service] Parse error, using fallback for projects_data: <error message>`
- `[CSV Service] Fetch error, using fallback for projects_data: <error message>`
- `[CSV Service] Cleared cache for projects_data`

## Advantages of CSV Approach

### Benefits
- **No API keys required:** Public sheet access eliminates credential management
- **Automatic fallback:** Static data ensures content is always available
- **Simple updates:** Content can be edited directly in Google Sheets
- **Client-side fetching:** No need to rebuild site for content changes
- **Caching:** Reduces network requests and improves performance
- **Reusable architecture:** Base service can be used for other sections

### Limitations
- **Public access required:** Sheet must be publicly viewable
- **Client-side only:** Data is fetched in browser, not at build time
- **Rate limiting:** Google may rate limit excessive requests
- **SEO impact:** Content not available in initial HTML (client-side rendered)
- **Cache dependency:** Users see stale data until cache expires

## Troubleshooting

### Data Not Appearing

1. **Check sheet visibility:**
   - Ensure sheet is public ("Anyone with the link can view")
   - Test CSV URL in browser

2. **Check cache:**
   - Clear localStorage cache
   - Perform hard refresh (Ctrl+Shift+R)

3. **Check browser console:**
   - Look for network errors
   - Check for parsing errors
   - Verify CSV structure matches expected format

4. **Verify CSV structure:**
   - Ensure headers match required column names
   - Check that at least one project has a projectName

### CSV Endpoint Not Working

1. **Verify sheet is public:**
   - Click "Share" → "Anyone with the link can view"

2. **Check sheet ID:**
   - Verify the spreadsheet ID in the URL is correct

3. **Check gid parameter:**
   - Ensure gid=1815685084 points to the correct sheet tab
   - Different tabs have different gid values

### TypeScript Errors

1. **Ensure types are installed:**
   ```bash
   npm install --save-dev @types/papaparse
   ```

2. **Check import paths:**
   - Verify `@/services/projectsService` resolves correctly
   - Verify `@/data/projects` resolves correctly

## Security Considerations

### Public Access
- Sheet must be publicly viewable for CSV endpoint to work
- Anyone with the URL can access the CSV data
- Do not store sensitive information in the sheet

### Rate Limiting
- Google may rate limit excessive requests
- Caching helps mitigate this (5-minute cache duration)
- Consider increasing cache duration for high-traffic sites

### Data Validation
- Service validates CSV structure before processing
- Missing or malformed data triggers fallback to static projects
- Component renders null if both CSV and fallback fail (should never happen)

## Reusable Architecture

The base CSV service (`src/services/baseCsvService.ts`) is designed to be reusable across multiple sections:

### How to Use for Other Sections

1. **Create TypeScript interfaces** for your CSV data
2. **Create a normalization function** to convert CSV rows to your data structure
3. **Instantiate BaseCsvService** with your specific parameters
4. **Export wrapper functions** for your section

Example for a hypothetical "Skills" section:

```typescript
// src/types/skills.ts
export interface SkillCsvRow {
    name: string;
    level: string;
}

export interface Skill {
    name: string;
    level: string;
}

// src/services/skillsService.ts
import { BaseCsvService, CsvServiceResponse } from './baseCsvService';
import { SkillCsvRow, Skill } from '@/types/skills';
import { staticSkills } from '@/data/skills';

const CSV_URL = 'your-csv-url';
const CACHE_KEY = 'skills_data';

const normalizeSkills = (rows: SkillCsvRow[]): Skill[] => {
    return rows.map(row => ({
        name: row.name,
        level: row.level
    }));
};

const skillsService = new BaseCsvService<SkillCsvRow, Skill[]>(
    CSV_URL,
    CACHE_KEY,
    normalizeSkills,
    staticSkills, // Fallback
    5 * 60 * 1000
);

export const fetchSkillsData = async (): Promise<CsvServiceResponse<Skill[]>> => {
    return skillsService.fetchData();
};

export const clearSkillsCache = (): void => {
    skillsService.clearCache();
};
```

### Future Improvements

To make the content system even more reusable:

1. **Configuration file:** Create a central config file for all CSV URLs and cache keys
2. **Generic hook:** Create a `useCsvData` hook that works with any CSV service
3. **Error boundary:** Add a React error boundary for better error handling
4. **Cache management UI:** Add a dev-only UI to clear all caches
5. **Data validation:** Add schema validation (e.g., Zod) for CSV data
6. **Retry logic:** Add exponential backoff retry for failed requests
7. **Offline support:** Add service worker for offline capability
8. **Analytics:** Track which data source is being used (Google Sheets vs fallback)

## Migration from Static Data

If migrating from purely static data:

1. **Keep static data:** The static data in `src/data/projects.ts` becomes the fallback
2. **Set up Google Sheet:** Create sheet with current project data
3. **Test CSV endpoint:** Verify CSV returns correct data
4. **Deploy changes:** The new service will use Google Sheets when available
5. **Monitor logs:** Check development logs to confirm data source
6. **Update content:** Make future updates in Google Sheets instead of code

## Next Steps

1. Verify Google Sheet is public
2. Test CSV endpoint in browser
3. Check that data appears correctly on the website
4. Test cache behavior
5. Test fallback by temporarily disabling CSV endpoint
6. Update content in Google Sheet and verify changes appear
7. Monitor development logs to understand data flow

## Support

For issues or questions:
- Check browser console for errors
- Verify CSV endpoint returns valid data
- Ensure TypeScript types are installed
- Review this documentation for common issues
- Check development logs for data source information
