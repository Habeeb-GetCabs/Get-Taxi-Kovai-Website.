# Get Taxi Kovai — Website Project

Responsive static multi-page website, ready to upload to GitHub and deploy on Vercel.

## Pricing decisions implemented
- Hatchback is not listed.
- Executive Sedan hourly rental: ₹350/hour with 10 km included per hour.
- Other hourly vehicle categories show “Call for best price”; no unverified rates are invented.
- Outstation tour estimate model: ₹2,000 per day + ₹12 per running kilometre. Example: Ooty 2 days / 1 night, 250 running km = ₹4,000 day rent + ₹3,000 kilometre charge = ₹7,000 before applicable extras.
- The supplied one-way tariff policy shows ₹15/km, minimum coverage of 130 km and ₹500 driver bata for drops over 130 km, plus a rule for drops under 100 km at round-trip mileage ₹30/km. The 100–130 km band is unclear, so the site does not automatically calculate fares.

## Pages
Homepage; services; hourly rental; one-way taxi; round-trip taxi; airport taxi; tour packages; routes and listed fares; five route landing pages; travel guide index and four articles; about; contact; FAQs; privacy policy; terms; 404 page. Includes `robots.txt`, `sitemap.xml`, and `vercel.json`.

## Upload to GitHub
1. Download and extract the ZIP.
2. Open your GitHub repository.
3. Choose **Add file → Upload files**.
4. Upload the *contents* of the extracted `Get-Taxi-Kovai-Website` folder, not a nested folder containing everything.
5. Commit to the `main` branch if you want the connected Vercel preview to redeploy.
6. Test the Vercel preview on mobile before switching any production domain.

## Important launch notes
- Canonicals and sitemap currently point to `https://gettaxikovai.in/`, the intended final domain. Keep the existing live website untouched until approval.
- This is a static site. The enquiry form opens WhatsApp with the details entered; it does not create a server-side booking, database or automatic dispatch.
- No fake GA4 or Google Ads IDs are included. Add real IDs after verifying the correct accounts, events and consent requirements.
- Google Places autocomplete, live fare calculations, online payment, a booking database and real-time availability are not included.
- Verify the phone/WhatsApp number, every route fare and its trip type, the 100–130 km one-way tariff wording, service area, privacy policy and booking terms before launch.
