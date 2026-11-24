# Shant Chhetri — Academic Website

React + TypeScript + Tailwind CSS + Framer Motion + Lucide icons, built with Vite.

## Run it on your computer

Open PowerShell in this folder (`website updated`) and run:

```powershell
npm install      # first time only
npm run dev      # opens a live preview at http://localhost:5173
```

## Site layout
Each menu tab (Home, About, Research, Publications, Gallery, News, CV, Contact) is its own page, e.g. `#/publications`. Which sections appear on which tab is set in `src/App.tsx` (`PAGE_CONTENT`).

## Updating content — edit only the files in `src/data/`

| What you want to change | File |
|---|---|
| Name, intro, email, profile links (Scholar, ORCID, LinkedIn…), citation metrics, CV date, keywords | `src/data/profile.ts` |
| Publications (title, authors, DOI, abstract, graphical abstract, featured) | `src/data/publications.ts` |
| Research experience & technical expertise (broad domains and their subtopics) | `src/data/expertise.ts` |
| News & updates (latest 3 appear on the homepage automatically) | `src/data/news.ts` |
| Education, positions, awards, talks, mentees | `src/data/journey.ts` |
| Gallery photos (only entries with a photo are shown) | `src/data/gallery.ts` |

Every file has comments explaining the fields. Copy an existing entry, edit it, and save; the preview updates instantly.

### Images
* **Portrait:** save as `public/images/portrait.jpg`, then set `portrait: 'images/portrait.jpg'` in `profile.ts`.
* **Gallery:** save photos in `public/images/gallery/` and add an entry for each in `src/data/gallery.ts` (title, caption, category). Until there is at least one photo, the Gallery tab shows a short "Photographs coming soon" note.
* **Graphical abstracts:** save into `public/images/research/` and set `graphicalAbstract` on the paper in `publications.ts`.
* **Paper preview pop-up:** tapping a paper shows an animated title page (journal, title, authors) built from `publications.ts`. To show a real screenshot of the article's first page instead, save it as e.g. `public/images/papers/chemsci-2024.png` and set `screenshot: 'images/papers/chemsci-2024.png'` on that paper.
* Use JPG or WebP, about 1600 px wide, to keep the site fast.

### ASAP Articles tab
The live literature feed lives in `public/tools/asap-articles.html` (a copy of your `asap_article.html`). Journals, default selection (the 1/0 flag), the professor list and the relevance keywords are at the top of its script. `CONTACT_EMAIL` is empty on purpose; if you put your own email there, it is sent to Crossref/OpenAlex with each request, which gives faster, more reliable service.

### CV
Replace `public/cv/Shant_Chhetri_CV.pdf` with a new file **of the same name**, and update `lastUpdated` in `profile.ts`.
The current PDF is a public version (no phone number or referee emails), generated from `cv-source/public-cv.html`. Edit that file and re-run the command at the top of it to regenerate the PDF.

### Contact form
Without configuration, the form validates input and opens the visitor's email app with the message pre-filled.
To receive messages directly (no email app needed):
1. Create a free form at https://formspree.io and copy its endpoint URL.
2. Copy `.env.example` to `.env` and paste the endpoint into `VITE_CONTACT_ENDPOINT`.
3. Rebuild. No secret keys are stored in the website.

Spam protection: hidden honeypot field + minimum fill time; Formspree adds server-side filtering.

### Visitor statistics (who visits, and from which country)
The site has built-in support for **GoatCounter**: free for personal sites, no cookies, so no consent banner is needed.
It is switched off until you add your code.

1. Sign up at https://www.goatcounter.com and choose a code, e.g. `shantchhetri`. Your dashboard will be `https://shantchhetri.goatcounter.com`.
2. In this folder, copy `.env.example` to `.env` (if you have not already) and set `VITE_GOATCOUNTER_CODE=shantchhetri`. Put only the code, not the full URL.
3. Run `npm run build` and upload the new `dist/` folder.

The dashboard then shows:
* number of visitors and page views over time
* **countries** (on a map and as a list), plus browsers, devices and screen sizes
* where visitors came from (Google, LinkedIn, email, …)
* events: `cv-download` (CV downloads), `article/<DOI>` (clicks on each paper), `contact-message` (messages sent)

Visits from `localhost` (your own preview) are not counted. GoatCounter shows countries and totals, not individual identities; this is by design and keeps the site privacy-friendly.

## Publish
```powershell
npm run build
```
The finished website is in the `dist/` folder. Upload its contents to any static host (GitHub Pages, Netlify, Vercel, or institutional web space). Paths are relative, so it works from a sub-folder too.

## Placeholders to fill in

* ResearchGate and Scopus URLs (`profile.ts`)
* Verified citation count / h-index / i10-index (`profile.ts` → `metrics`)
* Abstracts for the J. Phys. Chem. C, J. Phys. Chem. Lett. and ChemPhotoChem papers (`publications.ts`)
* Professional memberships (`journey.ts`)
