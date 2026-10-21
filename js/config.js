/*
  ============================================================
  SITE CONTENT CONFIG — edit everything in this file.
  You should NOT need to touch index.html/style.css/publications.js
  for normal content updates (name, links, papers, videos, CV).
  Every value below is a PLACEHOLDER. Replace before publishing.
  ============================================================
*/

const SITE_CONFIG = {

  // ---------- Identity ----------
  name: "Dr. Sarvat Zafar",
  title: "Assistant Professor of Chemistry",
  institution: "Department of Chemistry, Jazan University, Jazan, Kingdom of Saudi Arabia",
  tagline: "Polymer Chemistry | Green Chemistry",
  photo: "assets/img/profile-photo.jpg", // square image recommended, min 500x500px
  email: "sarvatzafar@gmail.com",

  // Shown as small tag chips under the name, and a "Verified email at ___" note —
  // both taken from her Google Scholar profile header.
  researchInterests: ["Polymer Chemistry", "Green Chemistry"],
  verifiedEmailDomain: "jazanu.edu.sa",

  // Short bio shown on the Home/About section. Sourced from her CV.
  // You can use \n\n to separate paragraphs.
  bio:
    "Dr. Sarvat Zafar is an Assistant Professor of Chemistry in the Department of " +
    "Chemistry at Jazan University, Jazan, Kingdom of Saudi Arabia, where she served " +
    "from 2010 to 2020. She holds a Ph.D. in Polymer Chemistry (2009) from Jamia " +
    "Millia Islamia, Central University, New Delhi, India — her thesis, \"Development " +
    "of Sustainable Resource Based Waterborne Coating Material,\" was completed as a " +
    "CSIR Senior Research Fellow — along with an M.Sc. in Organic Chemistry and a " +
    "B.Sc. (Hons.) in Chemistry, both from Aligarh Muslim University.\n\n" +
    "Her research centers on green and sustainable chemistry: eco-friendly waterborne " +
    "polymers and anticorrosive coatings, biologically synthesized metallic " +
    "nanoparticles (silver, gold) for antimicrobial and anticancer applications, and " +
    "graphene-based nanomaterials for water desalination. She has taught undergraduate " +
    "courses spanning aliphatic, aromatic, heterocyclic, polymer, and applied organic " +
    "chemistry, and served as a member of the National Commission for Academic " +
    "Accreditation and Assessment (NCAAA) for teaching and research standards.",

  // ---------- Academic / Research Profile IDs ----------
  // Leave a field as "" (empty string) to hide that badge/section automatically.
  profiles: {
    googleScholarId: "Z8XfRj8AAAAJ", // scholar.google.com/citations?user=Z8XfRj8AAAAJ
    orcidId: "",             // e.g. "0000-0002-1825-0097"
    dblpPid: "",             // e.g. "12/3456" — the part of a dblp.org/pid/XX/XXXX URL
    // Web of Science, Scopus and ResearchGate profile URLs vary in format and change
    // over time, so paste the full profile URL for each rather than just an ID.
    webOfScienceUrl: "",     // full profile URL, e.g. https://www.webofscience.com/wos/author/record/XXXXXXX
    scopusUrl: "",           // full profile URL, e.g. https://www.scopus.com/authid/detail.uri?authorId=XXXXXXXXX
    researchGateUrl: "",     // full profile URL
  },

  // ---------- Social Media ----------
  social: {
    linkedin: "",
    twitterX: "",
    facebook: "",
    instagram: "",
    youtube: "",             // channel URL, e.g. https://www.youtube.com/@handle
    researchGate: "",        // duplicate of profiles.researchGateUrl if you want it in the social row too
  },

  // ---------- Google Scholar citation metrics (shown as a "Cited by" card) ----------
  // Google Scholar has no free public API, so these numbers are entered by hand —
  // update them periodically from the real profile. Values below were read off the
  // screenshot supplied on 2026-08-25; yearly bar values are visually estimated from
  // that chart image, so double-check them against the live profile when convenient.
  // Set profiles.googleScholarId above to enable the "VIEW ALL" link.
  // viewAllUrl overrides the auto-built link if you want extra query params
  // (sort order, etc.) — as given, this points to her publications sorted by date.
  scholarMetrics: {
    viewAllUrl: "https://scholar.google.com/citations?hl=en&user=Z8XfRj8AAAAJ&view_op=list_works&sortby=pubdate",
    citationsAll: 234,
    citationsSince: 161,
    hIndexAll: 9,
    hIndexSince: 8,
    i10IndexAll: 9,
    i10IndexSince: 8,
    sinceYear: 2021,
    yearlyCitations: [
      { year: 2019, count: 7 },
      { year: 2020, count: 14 },
      { year: 2021, count: 18 },
      { year: 2022, count: 23 },
      { year: 2023, count: 18 },
      { year: 2024, count: 33 },
      { year: 2025, count: 43 },
      { year: 2026, count: 37 },
    ],
  },

  // ---------- CV ----------
  // Drop the real CV file into assets/cv/ and update the filename below.
  cvFile: "assets/cv/Dr_Sarvat_Zafar_CV.pdf",

  // ---------- Manually curated publications (recommended primary list) ----------
  // This is the most reliable way to show papers pulled from Google Scholar / Web of
  // Science / Scopus, since those services do not offer a free, key-less, client-side
  // embeddable feed the way ORCID and DBLP do. Add one object per paper.
  // `link` is left "" (DOI/article URL not yet supplied) — add real links when available.
  // `citations` is the Google Scholar "cited by" count as of 2026-08-25; update periodically.
  publications: [
    {
      title: "Biosynthesis and characterization of silver nanoparticles using Phoenix dactylifera fruits extract and their in vitro antimicrobial and cytotoxic effects",
      authors: "S. Zafar, A. Zafar",
      venue: "The Open Biotechnology Journal",
      volume: "13 (1)",
      year: "2019",
      citations: 50,
      link: "",
      type: "Journal Article",
    },
    {
      title: "Water‐borne melamine–formaldehyde‐cured epoxy–acrylate corrosion resistant coatings",
      authors: "S. Zafar, U. Riaz, S. Ahmad",
      venue: "Journal of Applied Polymer Science",
      volume: "107 (1), 215-222",
      year: "2008",
      citations: 39,
      link: "",
      type: "Journal Article",
    },
    {
      title: "Development of novel waterborne poly(1-naphthylamine)/poly(vinyl alcohol)–resorcinol formaldehyde-cured corrosion resistant composite coatings",
      authors: "S. Ahmad, S.M. Ashraf, U. Riaz, S. Zafar",
      venue: "Progress in Organic Coatings",
      volume: "62 (1), 32-39",
      year: "2008",
      citations: 35,
      link: "",
      type: "Journal Article",
    },
    {
      title: "The convergence of nanotechnology and artificial intelligence: unlocking future innovations",
      authors: "S. Zafar, N. Rana",
      venue: "Recent Innovations in Chemical Engineering",
      volume: "18 (2), 85-99",
      year: "2025",
      citations: 28,
      link: "",
      type: "Journal Article",
    },
    {
      title: "Synthesis, characterization, and anticorrosive coating properties of waterborne interpenetrating polymer network based on epoxy‐acrylic‐oleic acid with butylated melamine formaldehyde",
      authors: "S. Zafar, F. Zafar, U. Riaz, S. Ahmad",
      venue: "Journal of Applied Polymer Science",
      volume: "113 (2), 827-838",
      year: "2009",
      citations: 26,
      link: "",
      type: "Journal Article",
    },
    {
      title: "Waterborne epoxy based coating materials",
      authors: "S. Zafar",
      venue: "American Scientific Research Journal for Engineering, Technology, and Sciences",
      volume: "",
      year: "2018",
      citations: 14,
      link: "",
      type: "Journal Article",
    },
    {
      title: "Curcumin nanogel and its efficacy against oxidative stress and inflammation in rat models of ischemic stroke",
      authors: "G. Khuwaja, S.S. Moni, M.F. Alam, H.A. Makeen, S. Zafar, M. Ashafaq, et al.",
      venue: "Nanomedicine",
      volume: "19 (12), 1069-1085",
      year: "2024",
      citations: 11,
      link: "",
      type: "Journal Article",
    },
    {
      title: "Synthesis, properties, and characterization of biological nanomaterial",
      authors: "S. Zafar",
      venue: "Nanomaterials: The Building Blocks of Modern Technology: Synthesis, Applications and Impacts",
      volume: "",
      year: "2023",
      citations: 11,
      link: "",
      type: "Book Chapter",
    },
    {
      title: "Determination of rate of reaction and rate constant of the hydrolysis of ester (ethyl acetate) with alkali (sodium hydroxide)",
      authors: "F. Jabeen, Q.I. Rahman, S. Zafar",
      venue: "International Journal of Applied Chemistry",
      volume: "6 (3), 18-23",
      year: "2019",
      citations: 10,
      link: "",
      type: "Journal Article",
    },
    {
      title: "Biological synthesis of silver nanoparticles and their biomedical activity: a review",
      authors: "S. Zafar, A. Zafar, F. Jabeen, M.A. Siddiq",
      venue: "Current Green Chemistry",
      volume: "8 (3), 222-241",
      year: "2021",
      citations: 7,
      link: "",
      type: "Journal Article",
    },
    {
      title: "Artificial intelligence in material science",
      authors: "S. Zafar, N. Rana",
      venue: "Sustainable Materials",
      volume: "1-18",
      year: "2024",
      citations: 3,
      link: "",
      type: "Book Chapter",
    },
    {
      title: "Advancing conservation strategies through genetic diversity and species delimitation analysis of freshwater cyprinid fishes",
      authors: "F. Jabeen, S. Zafar, A. Chaudhry",
      venue: "Animal - Science Proceedings",
      volume: "17 (3), 300-301",
      year: "2026",
      citations: 0,
      link: "",
      type: "Conference Paper",
    },
    {
      // NOTE: pasted source had no citation count/full year for this entry — verify and fill in.
      title: "Advances in Graphene-Based Nanomaterials: Synthesis, Techniques and Multidisciplinary Applications",
      authors: "S. Zafar",
      venue: "Current Nanomaterials",
      volume: "11 (2), 1540170",
      year: "",
      citations: null,
      link: "",
      type: "Journal Article",
    },
  ],

  // ---------- YouTube videos to embed (grid on the Media section) ----------
  // Use just the 11-character video ID from the YouTube URL (after v=).
  // DUMMY placeholder below so you can see the layout — replace with real video IDs.
  youtubeVideoIds: [
    "jNQXAC9IVRw", // TODO: dummy placeholder — replace with a real video ID
  ],

  // ---------- Instagram posts/reels to embed ----------
  // Paste the full public post/reel URL, e.g. "https://www.instagram.com/p/XXXXXXXXXXX/"
  // Left empty on purpose: Instagram embeds only work reliably for real, currently-public
  // post URLs, and there's no safe generic "dummy" post to link to. Until you add real
  // URLs here, a placeholder card is shown automatically so the layout is still visible.
  instagramPostUrls: [
    // "https://www.instagram.com/p/XXXXXXXXXXX/",
  ],
};
