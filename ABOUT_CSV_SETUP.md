# About Section - CSV Setup Guide

This document explains how to set up and manage the About section content using Google Sheets CSV export with Papa Parse.

## Overview

The About section fetches its content from a public Google Sheet CSV endpoint using Papa Parse for parsing. This approach eliminates the need for API keys and Gatsby plugins.

## Architecture

```
Google Sheet (CSV) → fetch() → Papa Parse → aboutService → About Component
```

## Google Sheet Configuration

### Current Google Sheet

**URL:** https://docs.google.com/spreadsheets/d/1uuvPSDt35WrfRFLX9Qtfxt3XjFGhN79roffcjxva1eE/edit?gid=0

**CSV Endpoint:** https://docs.google.com/spreadsheets/d/1uuvPSDt35WrfRFLX9Qtfxt3XjFGhN79roffcjxva1eE/gviz/tq?tqx=out:csv&gid=0

### Required Sheet Structure

The Google Sheet must have the following columns in the first row:

| Column Name | Description | Example |
|-------------|-------------|---------|
| name | Sheet identifier (must be "about") | about |
| description | Main paragraph text | In the past, I worked as... |
| imageAlt | Alt text for profile image | My description |
| imagePath | Path to profile image | ../../../images/Me.png |

### Example Row

| name | description | imageAlt | imagePath |
|------|-------------|----------|-----------|
| about | In the past, I worked as a software developer for industrial controllers and created Human-Machine Interfaces (HMI panels). This experience gave me a solid understanding of the importance of adaptive and user-friendly interfaces. Now, I'm a freelance frontend developer, working with technologies such as JavaScript, Next.js, Gatsby, as well as React and TypeScript. In addition to development, I'm actively learning SEO and implementing best practices to improve website visibility in search engines. My goal is to create efficient and user-friendly solutions that meet the needs of users and align with modern web standards. | My description | ../../../images/Me.png |

**Important:** The `name` column must be exactly "about" (lowercase) for the service to identify the correct row.

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
https://docs.google.com/spreadsheets/d/1uuvPSDt35WrfRFLX9Qtfxt3XjFGhN79roffcjxva1eE/gviz/tq?tqx=out:csv&gid=0
```

You should see CSV-formatted text with your data.

## How to Update Content

### Updating the Description

1. Open your Google Sheet
2. Edit the `description` cell in the row where `name` is "about"
3. Save the sheet
4. The changes will be reflected on the website after:
   - Cache expires (5 minutes by default)
   - Or user clears browser cache
   - Or user performs a hard refresh (Ctrl+Shift+R)

### Updating the Image Alt Text

1. Open your Google Sheet
2. Edit the `imageAlt` cell in the row where `name` is "about"
3. Save the sheet
4. Changes appear after cache expiration

### Updating the Image Path

1. Place your new image in `src/images/`
2. Open your Google Sheet
3. Edit the `imagePath` cell in the row where `name` is "about"
4. Save the sheet
5. Changes appear after cache expiration

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
4. Delete the `about_data` key
5. Refresh the page

Or use the `clearCache()` function from aboutService:
```typescript
import { clearCache } from '@/services/aboutService';
clearCache();
```

## File Structure

```
src/
├── components/
│   └── sections/
│       └── about/
│           ├── About.tsx          # Main component (uses CSV service)
│           ├── about.module.css   # Styling (unchanged)
│           └── index.ts           # Export file
├── services/
│   └── aboutService.ts            # CSV fetching and parsing service
├── types/
│   └── about.ts                   # TypeScript interfaces
gatsby-config.ts                   # No Google Sheets plugin
```

## Modified Files

1. **src/components/sections/about/About.tsx** - Refactored to use CSV service instead of GraphQL
2. **gatsby-config.ts** - Removed gatsby-source-google-sheets plugin
3. **src/types/about.ts** - Updated interfaces for CSV data structure
4. **src/services/aboutService.ts** - Created new service for CSV fetching
5. **package.json** - Added papaparse and @types/papaparse dependencies

## Data Flow

1. **Component Mount:** About component mounts and calls `fetchAboutData()`
2. **Cache Check:** Service checks memory cache, then localStorage cache
3. **CSV Fetch:** If no valid cache, fetches CSV from Google Sheets
4. **Parsing:** Papa Parse converts CSV to JavaScript objects
5. **Normalization:** Service finds the row with `name === "about"` and extracts data
6. **Cache Update:** Service updates both memory and localStorage caches
7. **Render:** Component renders with the fetched data

## Error Handling

The service handles errors gracefully:

- **Network failures:** Returns error message, component renders null
- **Parsing errors:** Returns error message, component renders null
- **Missing data:** Returns null, component renders null
- **Invalid CSV structure:** Logs error, returns null data

## Advantages of CSV Approach

### Benefits
- **No API keys required:** Public sheet access eliminates credential management
- **No Gatsby plugin:** Reduces build complexity and dependencies
- **Simple updates:** Content can be edited directly in Google Sheets
- **Client-side fetching:** No need to rebuild site for content changes
- **Caching:** Reduces network requests and improves performance

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

4. **Verify row identifier:**
   - Ensure row has `name` column set to "about" (lowercase)

### CSV Endpoint Not Working

1. **Verify sheet is public:**
   - Click "Share" → "Anyone with the link can view"

2. **Check sheet ID:**
   - Verify the spreadsheet ID in the URL is correct

3. **Check gid parameter:**
   - Ensure gid=0 points to the correct sheet tab
   - Different tabs have different gid values

### TypeScript Errors

1. **Ensure types are installed:**
   ```bash
   npm install --save-dev @types/papaparse
   ```

2. **Check import paths:**
   - Verify `@/services/aboutService` resolves correctly
   - Verify `@/types/about` resolves correctly

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
- Missing or malformed data is handled gracefully
- Component renders null if data is invalid

## Migration from GraphQL

If migrating from the previous GraphQL-based approach:

1. **Removed dependencies:**
   - gatsby-source-google-sheets (removed from gatsby-config.ts)
   - Environment variables (GOOGLE_API_KEY, GOOGLE_SPREADSHEET_ID)

2. **Changed data flow:**
   - Before: GraphQL query at build time
   - After: Client-side CSV fetch at runtime

3. **Updated component:**
   - Removed GraphQL query
   - Added useState/useEffect hooks
   - Added loading and error states

4. **No build changes required:**
   - Gatsby build process unchanged
   - No additional configuration needed

## Next Steps

1. Verify Google Sheet is public
2. Test CSV endpoint in browser
3. Check that data appears correctly on the website
4. Test cache behavior
5. Update content in Google Sheet and verify changes appear

## Support

For issues or questions:
- Check browser console for errors
- Verify CSV endpoint returns valid data
- Ensure TypeScript types are installed
- Review this documentation for common issues
