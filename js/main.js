document.addEventListener("DOMContentLoaded", () => {
  populateIdentity();
  populateProfileBadges();
  populateSocialRow();
  populateYoutube();
  populateInstagram();
  renderScholarMetrics();
  renderManualPublications();
  renderOrcidPublications();
  renderDblpPublications();
  initNavToggle();
  document.getElementById("year").textContent = new Date().getFullYear();
});

function populateIdentity() {
  document.title = `${SITE_CONFIG.name} — Academic Profile`;
  document.getElementById("heroName").textContent = SITE_CONFIG.name;
  document.getElementById("heroTitle").textContent = SITE_CONFIG.title;
  document.getElementById("heroInstitution").textContent = SITE_CONFIG.institution;
  document.getElementById("heroTagline").textContent = SITE_CONFIG.tagline || "";

  const verifiedEl = document.getElementById("heroVerifiedEmail");
  if (SITE_CONFIG.verifiedEmailDomain) {
    verifiedEl.textContent = `✓ Verified email at ${SITE_CONFIG.verifiedEmailDomain}`;
    verifiedEl.hidden = false;
  }

  const tagsEl = document.getElementById("heroTags");
  const interests = SITE_CONFIG.researchInterests || [];
  tagsEl.innerHTML = interests.map((i) => `<span class="hero-tag">${escapeHtml(i)}</span>`).join("");
  document.getElementById("footerName").textContent = SITE_CONFIG.name;
  document.getElementById("bioText").textContent = SITE_CONFIG.bio || "";
  document.getElementById("heroPhoto").src = SITE_CONFIG.photo;

  const cvBtn = document.getElementById("cvDownloadBtn");
  cvBtn.href = SITE_CONFIG.cvFile;

  document.getElementById("contactEmail").textContent = SITE_CONFIG.email || "";
}

function populateProfileBadges() {
  const container = document.getElementById("profileBadges");
  const p = SITE_CONFIG.profiles || {};

  const badges = [
    p.googleScholarId && {
      label: "Google Scholar",
      url: `https://scholar.google.com/citations?user=${encodeURIComponent(p.googleScholarId)}`,
    },
    p.orcidId && {
      label: "ORCID",
      url: `https://orcid.org/${encodeURIComponent(p.orcidId)}`,
    },
    p.dblpPid && {
      label: "DBLP",
      url: `https://dblp.org/pid/${p.dblpPid}.html`,
    },
    p.webOfScienceUrl && { label: "Web of Science", url: p.webOfScienceUrl },
    p.scopusUrl && { label: "Scopus", url: p.scopusUrl },
    p.researchGateUrl && { label: "ResearchGate", url: p.researchGateUrl },
  ].filter(Boolean);

  if (badges.length === 0) {
    container.innerHTML = '<p class="empty-note">No profile links configured yet — add IDs/URLs to SITE_CONFIG.profiles in js/config.js.</p>';
    return;
  }

  container.innerHTML = badges
    .map((b) => `<a class="badge" href="${escapeAttr(b.url)}" target="_blank" rel="noopener">${escapeHtml(b.label)}</a>`)
    .join("");
}

function populateSocialRow() {
  const container = document.getElementById("socialRow");
  const s = SITE_CONFIG.social || {};

  const links = [
    s.linkedin && { label: "LinkedIn", url: s.linkedin },
    s.twitterX && { label: "X / Twitter", url: s.twitterX },
    s.facebook && { label: "Facebook", url: s.facebook },
    s.instagram && { label: "Instagram", url: s.instagram },
    s.youtube && { label: "YouTube", url: s.youtube },
    s.researchGate && { label: "ResearchGate", url: s.researchGate },
  ].filter(Boolean);

  if (links.length === 0) {
    container.innerHTML = '<p class="empty-note">No social links configured yet — add URLs to SITE_CONFIG.social in js/config.js.</p>';
    return;
  }

  container.innerHTML = links
    .map((l) => `<a class="badge" href="${escapeAttr(l.url)}" target="_blank" rel="noopener">${escapeHtml(l.label)}</a>`)
    .join("");
}

function populateYoutube() {
  const grid = document.getElementById("youtubeGrid");
  const emptyNote = document.getElementById("youtubeEmpty");
  const ids = SITE_CONFIG.youtubeVideoIds || [];

  if (ids.length === 0) {
    emptyNote.hidden = false;
    return;
  }

  grid.innerHTML = ids
    .map(
      (id) => `
      <div class="video-frame-wrap">
        <iframe
          src="https://www.youtube.com/embed/${encodeURIComponent(id)}"
          title="YouTube video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          loading="lazy"
        ></iframe>
      </div>
    `
    )
    .join("");
}

function populateInstagram() {
  const grid = document.getElementById("instagramGrid");
  const urls = SITE_CONFIG.instagramPostUrls || [];

  if (urls.length === 0) {
    grid.innerHTML = `
      <div class="instagram-placeholder-card">
        <div class="ig-icon">IG</div>
        <p><strong>Sample Instagram post</strong></p>
        <p class="ig-note">Placeholder — add real post URLs to <code>instagramPostUrls</code> in js/config.js to replace this.</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = urls
    .map(
      (url) => `
      <blockquote class="instagram-media" data-instgrm-captioned data-instgrm-permalink="${escapeAttr(url)}" style="margin:0; width:100%;"></blockquote>
    `
    )
    .join("");

  // Ask Instagram's embed script to process the new blockquotes.
  if (window.instgrm && window.instgrm.Embeds) {
    window.instgrm.Embeds.process();
  } else {
    // Script may still be loading; it auto-processes the page once it arrives.
    document.getElementById("instagramEmbedScript")?.addEventListener("load", () => {
      window.instgrm?.Embeds?.process();
    });
  }
}

function initNavToggle() {
  const toggle = document.getElementById("navToggle");
  const menu = document.getElementById("navMenu");

  toggle.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}
