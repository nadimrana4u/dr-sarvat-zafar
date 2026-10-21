# Dr. Sarvat Zafar — Academic Profile Website

A static, dependency-free personal academic profile site. No build step —
just edit files and open `index.html`, or deploy the folder as-is.

## Structure

```
index.html            Page markup (sections: Hero, About, Profiles, Publications, Media, CV, Contact)
css/style.css          All styling (light + dark mode, responsive)
js/config.js           ALL editable content lives here — start here
js/publications.js     Renders manual list + live ORCID/DBLP fetch
js/main.js             Wires everything up (nav, badges, media grids)
assets/img/            Profile photo goes here
assets/cv/             CV PDF goes here
```

## How to add the real content

Everything you need to edit is in **`js/config.js`**. You should not need to
touch the HTML/CSS for routine updates.

1. **Identity & bio** — `name`, `title`, `institution`, `tagline`, `bio`, `email`.
2. **Photo** — drop a square image (500x500px+) at `assets/img/profile-photo.jpg`.
   Until it exists, a placeholder silhouette is shown automatically.
3. **Research profile IDs** (`profiles` object):
   - `googleScholarId` — the `user=XXXX` part of your Scholar profile URL.
   - `orcidId` — e.g. `0000-0002-1825-0097`.
   - `dblpPid` — the `XX/XXXX` part of a `dblp.org/pid/XX/XXXX` URL.
   - `webOfScienceUrl`, `scopusUrl`, `researchGateUrl` — full profile URLs.
   Leave any field as `""` and its badge/section is hidden automatically.
4. **Social links** (`social` object) — LinkedIn, X/Twitter, Facebook,
   Instagram, YouTube, ResearchGate. Same rule: empty = hidden.
5. **CV** — put the PDF at `assets/cv/Dr_Sarvat_Zafar_CV.pdf` (or change
   `cvFile` to match your filename).
6. **Publications** — add entries to the `publications` array (title,
   authors, venue, year, link, type). This is the primary, reliable list.
7. **YouTube videos** — add 11-character video IDs to `youtubeVideoIds`.
8. **Instagram posts/reels** — add full public post URLs to
   `instagramPostUrls`.

## Why publications aren't fully "live" from every source

- **ORCID** and **DBLP** both have free, public, key-less APIs that work
  directly from the browser (no server needed) — the site fetches these
  live and shows them under the "From ORCID" / "From DBLP" tabs.
- **Google Scholar** and **Web of Science** do not offer a free, key-less,
  browser-fetchable API. Scraping Scholar violates its terms of service and
  is unreliable. The recommended approach — and what this site does — is to
  link out to those profiles via badges, and hand-maintain the "Selected
  Publications" list in `config.js` (which you can populate by copying from
  Scholar/WoS/Scopus).

## Local preview

No server required — just open `index.html` in a browser. If ORCID/DBLP
fetches don't run from a `file://` URL in your browser, serve the folder
locally instead:

```bash
cd "Dr_S_Zafar_Profile_Website"
python3 -m http.server 8000
# then open http://localhost:8000
```

## Deploying

This is a static site — any static host works:
- **GitHub Pages**: push this folder to a repo and enable Pages.
- **Netlify / Vercel**: drag-and-drop the folder or connect the repo.
- **University server**: upload the folder via FTP/SFTP to your web space.

## Next steps

- [ ] Replace placeholder bio, name/title/institution details
- [ ] Add real profile photo
- [ ] Fill in ORCID / Google Scholar / DBLP / Web of Science / Scopus links
- [ ] Add social media links
- [ ] Add the real CV PDF
- [ ] Replace placeholder publications with the real list
- [ ] Add YouTube video IDs and Instagram post URLs
