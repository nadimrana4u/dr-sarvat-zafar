/*
  Renders the three publication panels:
  - Manual (from SITE_CONFIG.publications)
  - ORCID (fetched live from the public ORCID API — no key required)
  - DBLP (fetched live from the public DBLP API — no key required)

  Google Scholar and Web of Science do not offer a free, key-less,
  client-side-fetchable API, so they are not fetched live here — use the
  badge links in the Profiles section, and add notable papers to the
  manual list in js/config.js instead.
*/

function renderManualPublications() {
  const list = document.getElementById("pubListManual");
  const pubs = SITE_CONFIG.publications || [];

  if (pubs.length === 0) {
    list.innerHTML = '<li class="pub-status">No publications added yet — add entries to SITE_CONFIG.publications in js/config.js.</li>';
    return;
  }

  list.innerHTML = pubs
    .map((pub) => {
      const venueParts = [pub.venue, pub.volume].filter(Boolean).join(", ");
      const citeText = pub.citations ? `Cited by ${pub.citations}` : "";
      const hasLink = pub.link && pub.link !== "#";
      const titleEl = hasLink
        ? `<a class="pub-title" href="${escapeAttr(pub.link)}" target="_blank" rel="noopener">${escapeHtml(pub.title)}</a>`
        : `<span class="pub-title">${escapeHtml(pub.title)}</span>`;
      return `
      <li>
        ${titleEl}
        <div class="pub-meta">${escapeHtml(pub.authors || "")} — ${escapeHtml(venueParts)}${pub.year ? ", " + escapeHtml(pub.year) : ""}${pub.type ? " · " + escapeHtml(pub.type) : ""}${citeText ? " · " + escapeHtml(citeText) : ""}</div>
      </li>
    `;
    })
    .join("");
}

async function renderOrcidPublications() {
  const panel = document.getElementById("pubPanelOrcid");
  const statusEl = document.getElementById("pubOrcidStatus");
  const listEl = document.getElementById("pubListOrcid");
  const orcidId = SITE_CONFIG.profiles?.orcidId;

  if (!orcidId) {
    panel.hidden = true;
    return;
  }
  panel.hidden = false;

  statusEl.textContent = "Loading works from ORCID…";

  try {
    const res = await fetch(`https://pub.orcid.org/v3.0/${encodeURIComponent(orcidId)}/works`, {
      headers: { Accept: "application/json" },
    });
    if (!res.ok) throw new Error(`ORCID API returned ${res.status}`);
    const data = await res.json();
    const groups = data.group || [];

    if (groups.length === 0) {
      statusEl.textContent = "No works found on this ORCID record.";
      return;
    }

    statusEl.textContent = `${groups.length} work(s) found on ORCID.`;

    listEl.innerHTML = groups
      .map((g) => {
        const summary = g["work-summary"]?.[0];
        if (!summary) return "";
        const title = summary.title?.title?.value || "Untitled";
        const year = summary["publication-date"]?.year?.value || "";
        const journal = summary["journal-title"]?.value || "";
        const url = summary.url?.value || `https://orcid.org/${orcidId}`;
        return `
          <li>
            <a class="pub-title" href="${escapeAttr(url)}" target="_blank" rel="noopener">${escapeHtml(title)}</a>
            <div class="pub-meta">${escapeHtml(journal)}${journal && year ? ", " : ""}${escapeHtml(year)}</div>
          </li>
        `;
      })
      .join("");
  } catch (err) {
    statusEl.textContent = "Could not load ORCID works right now. View the full record on orcid.org instead.";
    console.error("ORCID fetch failed:", err);
  }
}

async function renderDblpPublications() {
  const panel = document.getElementById("pubPanelDblp");
  const statusEl = document.getElementById("pubDblpStatus");
  const listEl = document.getElementById("pubListDblp");
  const dblpPid = SITE_CONFIG.profiles?.dblpPid;

  if (!dblpPid) {
    panel.hidden = true;
    return;
  }
  panel.hidden = false;

  statusEl.textContent = "Loading publications from DBLP…";

  try {
    const res = await fetch(`https://dblp.org/pid/${dblpPid}.json`);
    if (!res.ok) throw new Error(`DBLP API returned ${res.status}`);
    const data = await res.json();
    const items = data?.result?.hits?.hit || [];

    if (items.length === 0) {
      statusEl.textContent = "No publications found on this DBLP record.";
      return;
    }

    statusEl.textContent = `${items.length} publication(s) found on DBLP.`;

    listEl.innerHTML = items
      .map((item) => {
        const info = item.info || {};
        const title = info.title || "Untitled";
        const year = info.year || "";
        const venue = info.venue || "";
        const url = info.ee || info.url || `https://dblp.org/pid/${dblpPid}.html`;
        return `
          <li>
            <a class="pub-title" href="${escapeAttr(url)}" target="_blank" rel="noopener">${escapeHtml(title)}</a>
            <div class="pub-meta">${escapeHtml(venue)}${venue && year ? ", " : ""}${escapeHtml(year)}</div>
          </li>
        `;
      })
      .join("");
  } catch (err) {
    statusEl.textContent = "Could not load DBLP publications right now. View the full record on dblp.org instead.";
    console.error("DBLP fetch failed:", err);
  }
}

function escapeHtml(str) {
  return String(str ?? "").replace(/[&<>"']/g, (c) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
  }[c]));
}

function escapeAttr(str) {
  return escapeHtml(str);
}

function renderScholarMetrics() {
  const card = document.getElementById("scholarCard");
  const m = SITE_CONFIG.scholarMetrics;

  if (!m) {
    card.hidden = true;
    return;
  }
  card.hidden = false;

  const scholarId = SITE_CONFIG.profiles?.googleScholarId;
  const viewAllLink = document.getElementById("scholarViewAll");
  if (m.viewAllUrl) {
    viewAllLink.href = m.viewAllUrl;
  } else if (scholarId) {
    viewAllLink.href = `https://scholar.google.com/citations?user=${encodeURIComponent(scholarId)}`;
  } else {
    viewAllLink.style.display = "none";
  }

  document.getElementById("scholarSinceLabel").textContent = m.sinceYear ? `Since ${m.sinceYear}` : "Since";
  document.getElementById("scholarCitationsAll").textContent = m.citationsAll ?? "";
  document.getElementById("scholarCitationsSince").textContent = m.citationsSince ?? "";
  document.getElementById("scholarHIndexAll").textContent = m.hIndexAll ?? "";
  document.getElementById("scholarHIndexSince").textContent = m.hIndexSince ?? "";
  document.getElementById("scholarI10All").textContent = m.i10IndexAll ?? "";
  document.getElementById("scholarI10Since").textContent = m.i10IndexSince ?? "";

  const chartEl = document.getElementById("scholarChart");
  const years = m.yearlyCitations || [];
  if (years.length === 0) {
    chartEl.innerHTML = "";
    return;
  }

  const maxVal = Math.max(...years.map((y) => y.count), 1);
  // Round the axis max up to a "nice" step so gridline labels read cleanly.
  const axisMax = Math.ceil(maxVal / 10) * 10 || 10;
  const midVal = Math.round(axisMax / 2);

  const bars = years
    .map((y) => {
      const heightPct = (y.count / axisMax) * 100;
      return `
        <div class="scholar-bar-col">
          <div class="scholar-bar" style="height:${heightPct}%" title="${y.count} citations in ${y.year}"></div>
          <span class="scholar-bar-label">${y.year}</span>
        </div>
      `;
    })
    .join("");

  chartEl.innerHTML = `
    <div class="scholar-axis-labels">
      <span>${axisMax}</span>
      <span>${midVal}</span>
      <span>0</span>
    </div>
    <div class="scholar-chart-plot">
      <div class="scholar-gridline" style="bottom:100%"></div>
      <div class="scholar-gridline" style="bottom:50%"></div>
      <div class="scholar-gridline" style="bottom:0"></div>
      ${bars}
    </div>
  `;
}
