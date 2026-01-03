# Outbound Google Maps Lead Scraper (n8n)
### Scrape Google Maps Businesses within a Radius for as Low as $1 per 1,000 Places
Technologies used: 
- *Serper.dev* for Google Maps scraping
- *Google Sheets* for storing results
- *ZipCodeBase API* to fetch all zip codes within the specified radius area
- *JavaScript* for data processing

This fully automated system scrapes Google Maps for relevant business listings based on a search query (e.g. "Mexican restaurant") within a specified radius (as big as 500 miles), stores them in Google Sheets, and ensures no duplicates; at a cost of just $1 per 1,000 places scraped. Ideal for any business or marketing team that needs an easy, cheap, and efficient way to gather, organize, and track Google Maps businesses for outreach, research, or lead generation.

This automation was created by *Ingrid Coll*. See my other projects on GitHub at [github.com/ingridcoll](https://github.com/ingridcoll) or send me a LinkedIn message at [linkedin.com/in/ingridcoll](https://www.linkedin.com/in/ingridcoll/) with any questions or business inquiries!

## In PHASE 1: Fetch Areas to Scrape from Google Sheets and Start the Main Loop...
### Extracts target areas to scrape and radius size from a Google Sheet and loops over each area.
<img width="1770" height="791" alt="image" src="https://github.com/user-attachments/assets/91702937-6210-432e-b727-e674c670dbfd" />

- Automatically pulls a list of areas and associated search queries from Google Sheets.
- Only processes areas marked as “not scraped” to avoid redundancy.
- Starts a loop iteration for each area and initiates the process to scrape businesses from Google Maps.
- Optimized to avoid n8n running out of memory by separating each scraping into its own loop iteration.
## In PHASE 2: Loop Over Each Zip Code within the Radius to Find Google Maps Businesses...
### Locates Google Maps businesses for each zip code within the search radius.
<img width="1912" height="986" alt="image" src="https://github.com/user-attachments/assets/65b538ee-3b21-42d9-91d4-b0bfebbb6a95" />

- Pulls all zip codes within the specified search radius with the **ZipCodeBase API**, to iterate over them one by one (maximizes number of businsesses found).
- Iterates over each zip code within the given radius, using **Serper.dev API** to scrape Google Maps for businesses matching the specified query (e.g., "dentist" or "wedding venue").
- Pulls business details including `name`, `address`, `category`, `website`, `rating`, and `phone number`, ensuring high-quality, accurate data for each location.
- Ensures the system covers all target zip codes in the area, increasing the breadth of collected data.
- Eliminates the need for manual location checks, automating the entire scraping process across multiple zip codes.
## In PHASE 3: Remove Duplicates and Append or Update all Rows in Google Sheets...
### Removes duplicated businesses and adds all leads into Google Sheets.
<img width="1467" height="1007" alt="image" src="https://github.com/user-attachments/assets/290523ad-35b3-410e-9667-06ce68be9fa0" />

- Processes the scraped businesses by removing duplicates (businesses with the same name or website are filtered out to ensure no redundancy).
- Appends or updates rows in Google Sheets based on unique identifiers (UIDs), keeping data up-to-date and ensuring accurate tracking of each lead.
- Marks each area as “scraped” in the main sheet, preventing re-scraping of the same locations in future runs.
- Frees up sales and marketing teams from manual data entry.

## Useful Sites
- To draw a radius over a map visualization and make sure the correct area will be targeted:
https://www.calcmaps.com/map-radius/
- To see a map of all zip codes:
https://www.randymajors.org/zipcodegmap?x=-98.1098958&y=30.0295675&cx=-97.9917928&cy=29.8748836&zoom=9&zipcodes=show

## Downloading and Importing this Automation into your n8n Workspace (for free!)
1. Find the .json file in this repository and either select all the text and copy it, or download the file to your local computer by selecting "Download raw file".
2. Log into your n8n instance and create a new blank workflow.
3. If you copied the .json contents, simply paste the workflow into the blank canvas. If you downloaded the .json file, on the top-right of the screen, select the three dots and click on "Import from file...". Upload the .json file from your local computer.
