# Get Taxi Kovai — New Website Starter

A static, responsive starter homepage for the new Get Taxi Kovai website.

## Design direction
- Premium charcoal/near-black background
- Red primary actions
- Limited yellow accents
- Mobile-friendly layout and persistent call/WhatsApp actions
- No phone number required to begin an enquiry

## Important before production
1. Verify the displayed business phone number and WhatsApp destination.
2. Confirm all tariff rules and implement/test the real fare calculator. This starter does not invent fare values.
3. Audit the Google Maps browser API key; restrict it by website referrer and API. Do not commit server-side secrets.
4. Add and verify GA4 and Google Ads conversion events. Count confirmed enquiry submissions and qualified calls appropriately; do not count every click as a completed lead.
5. Create and validate all route pages, canonical URLs, sitemap.xml, robots.txt, structured data, privacy and terms pages.
6. Replace temporary links and metadata with verified production URLs.
7. Test mobile layouts, keyboard accessibility, performance, and all booking links.
8. Keep the existing live site unchanged until this new version is approved.

## Deploy with Vercel
1. Create a new GitHub repository (for example `Get-Taxi-Kovai-Website`).
2. Upload `index.html` and this README to the repository root.
3. In Vercel, import the new repository. No build command is required for this static starter.
4. Use the Vercel preview URL for testing. Do not connect the production domain until approval.
