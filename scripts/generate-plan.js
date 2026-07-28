const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  Header, Footer, PageNumber, AlignmentType, HeadingLevel,
  WidthType, BorderStyle, ShadingType, SectionType, TableOfContents,
  LevelFormat, PageBreak,
} = require("docx");
const fs = require("fs");

// Palette: GO-1 Graphite Orange
const P = {
  bg: "1A2330", accent: "D4875A",
  tableHeaderBg: "D4875A", tableHeaderText: "FFFFFF",
  accentLine: "D4875A", innerLine: "DDD0C8", surface: "F8F0EB",
};
const c = (hex) => hex.replace("#", "");

const NB = { style: BorderStyle.NONE, size: 0, color: "FFFFFF" };
const noBorders = { top: NB, bottom: NB, left: NB, right: NB };
const allNoBorders = { top: NB, bottom: NB, left: NB, right: NB, insideHorizontal: NB, insideVertical: NB };

const tblBorder = {
  top: { style: BorderStyle.SINGLE, size: 2, color: P.innerLine },
  bottom: { style: BorderStyle.SINGLE, size: 2, color: P.innerLine },
  left: { style: BorderStyle.NONE }, right: { style: BorderStyle.NONE },
  insideHorizontal: { style: BorderStyle.SINGLE, size: 1, color: P.innerLine },
  insideVertical: { style: BorderStyle.NONE },
};

function h1(t) { return new Paragraph({ heading: HeadingLevel.HEADING_1, spacing: { before: 400, after: 200, line: 312 }, children: [new TextRun({ text: t, bold: true, size: 32, color: c("2C3E50"), font: { ascii: "Calibri" } })] }); }
function h2(t) { return new Paragraph({ heading: HeadingLevel.HEADING_2, spacing: { before: 300, after: 160, line: 312 }, children: [new TextRun({ text: t, bold: true, size: 28, color: c("34495E"), font: { ascii: "Calibri" } })] }); }
function h3(t) { return new Paragraph({ heading: HeadingLevel.HEADING_3, spacing: { before: 240, after: 120, line: 312 }, children: [new TextRun({ text: t, bold: true, size: 24, color: c("5D6D7E"), font: { ascii: "Calibri" } })] }); }
function body(t) { return new Paragraph({ alignment: AlignmentType.JUSTIFIED, spacing: { after: 120, line: 312 }, children: [new TextRun({ text: t, size: 22, color: c("333333"), font: { ascii: "Calibri" } })] }); }
function bb(label, t) { return new Paragraph({ alignment: AlignmentType.JUSTIFIED, spacing: { after: 120, line: 312 }, children: [new TextRun({ text: label, bold: true, size: 22, color: c("2C3E50"), font: { ascii: "Calibri" } }), new TextRun({ text: t, size: 22, color: c("333333"), font: { ascii: "Calibri" } })] }); }
function bullet(t, l=0) { return new Paragraph({ bullet: { level: l }, spacing: { after: 80, line: 312 }, indent: { left: 720 + l*360 }, children: [new TextRun({ text: t, size: 22, color: c("333333"), font: { ascii: "Calibri" } })] }); }
function bb2(label, t, l=0) { return new Paragraph({ bullet: { level: l }, spacing: { after: 80, line: 312 }, indent: { left: 720 + l*360 }, children: [new TextRun({ text: label, bold: true, size: 22, color: c("2C3E50"), font: { ascii: "Calibri" } }), new TextRun({ text: t, size: 22, color: c("333333"), font: { ascii: "Calibri" } })] }); }
function emptyPara() { return new Paragraph({ spacing: { after: 60 }, children: [] }); }

function makeTable(headers, rows) {
  const cw = Math.floor(100 / headers.length);
  return new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    borders: tblBorder,
    rows: [
      new TableRow({ tableHeader: true, cantSplit: true, children: headers.map(h => new TableCell({ width: { size: cw, type: WidthType.PERCENTAGE }, shading: { type: ShadingType.CLEAR, fill: P.tableHeaderBg }, margins: { top: 80, bottom: 80, left: 120, right: 120 }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: h, bold: true, size: 20, color: P.tableHeaderText, font: { ascii: "Calibri" } })] })] })) }),
      ...rows.map((row, ri) => new TableRow({ cantSplit: true, children: row.map(cell => new TableCell({ width: { size: cw, type: WidthType.PERCENTAGE }, shading: ri%2===1 ? { type: ShadingType.CLEAR, fill: P.surface } : undefined, margins: { top: 60, bottom: 60, left: 120, right: 120 }, children: [new Paragraph({ children: [new TextRun({ text: cell, size: 20, color: c("333333"), font: { ascii: "Calibri" } })] })] })) })),
    ],
  });
}

function ni(t, r) { return new Paragraph({ numbering: { reference: r, level: 0 }, spacing: { after: 100, line: 312 }, children: [new TextRun({ text: t, size: 22, color: c("333333"), font: { ascii: "Calibri" } })] }); }
function nib(label, t, r) { return new Paragraph({ numbering: { reference: r, level: 0 }, spacing: { after: 100, line: 312 }, children: [new TextRun({ text: label, bold: true, size: 22, color: c("2C3E50"), font: { ascii: "Calibri" } }), new TextRun({ text: t, size: 22, color: c("333333"), font: { ascii: "Calibri" } })] }); }

// Cover R4
function buildCover(config) {
  const PL = config.palette;
  const padL = 1200, padR = 800;
  const titlePt = 30, titleSize = 60, UPPER_H = 8500, DIVIDER_H = 60, topSpacing = 2200;
  const upperBlock = new Table({ width: { size: 100, type: WidthType.PERCENTAGE }, layout: { type: "FIXED" }, borders: allNoBorders, rows: [new TableRow({ height: { value: UPPER_H, rule: "exact" }, children: [new TableCell({ shading: { fill: PL.bg }, borders: noBorders, verticalAlign: "top", margins: { left: padL, right: padR }, children: [
    new Paragraph({ spacing: { before: topSpacing } }),
    config.englishLabel ? new Paragraph({ spacing: { after: 500 }, children: [new TextRun({ text: config.englishLabel, size: 18, color: PL.accent, font: { ascii: "Calibri" }, characterSpacing: 80 })] }) : null,
    new Paragraph({ spacing: { after: 200, line: 690, lineRule: "atLeast" }, children: [new TextRun({ text: config.title, size: titleSize, bold: true, color: "FFFFFF", font: { ascii: "Calibri" } })] }),
    config.subtitle ? new Paragraph({ spacing: { after: 100 }, children: [new TextRun({ text: config.subtitle, size: 24, color: "B0B8C0", font: { ascii: "Calibri" } })] }) : null,
  ].filter(Boolean) })] })] });
  const divider = new Table({ width: { size: 100, type: WidthType.PERCENTAGE }, borders: allNoBorders, rows: [new TableRow({ height: { value: DIVIDER_H, rule: "exact" }, children: [new TableCell({ borders: noBorders, shading: { fill: PL.accent }, children: [emptyPara()] })] })] });
  const lower = [
    new Paragraph({ spacing: { before: 800 } }),
    ...(config.metaLines||[]).map(l => new Paragraph({ indent: { left: padL }, spacing: { after: 100 }, children: [new TextRun({ text: l, size: 26, color: "90989F", font: { ascii: "Calibri" } })] })),
    new Paragraph({ spacing: { before: 2000 } }),
    new Paragraph({ indent: { left: padL }, children: [new TextRun({ text: config.footerLeft||"", size: 20, color: "687078" }), new TextRun({ text: "          " }), new TextRun({ text: config.footerRight||"", size: 20, color: "687078" })] }),
  ];
  return [new Table({ width: { size: 100, type: WidthType.PERCENTAGE }, layout: { type: "FIXED" }, borders: allNoBorders, rows: [new TableRow({ height: { value: 16838, rule: "exact" }, children: [new TableCell({ shading: { fill: "FFFFFF" }, borders: noBorders, verticalAlign: "top", children: [upperBlock, divider, ...lower] })] })] })];
}

const hdrFtr = (sectionNum) => ({
  headers: { default: new Header({ children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "SARADA Netralaya - Website Development Plan", size: 16, color: "999999", font: { ascii: "Calibri" }, italics: true })] })] }) },
  footers: { default: new Footer({ children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ children: [PageNumber.CURRENT], size: 18, color: "999999" })] })] }) },
});

// Numbering config
const numConfig = {
  config: ["list-1","list-2","list-3","list-4","list-5"].map(r => ({
    reference: r, levels: [{ level: 0, format: LevelFormat.DECIMAL, text: "%1.", alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 720, hanging: 360 } } } }]
  })),
};

// ── BODY CONTENT ──
const content = [
  // 1. EXECUTIVE SUMMARY
  h1("1. Executive Summary"),
  body("This document presents a comprehensive development plan for the SARADA Netralaya & Maternity website, a premium eye care hospital based in Jamshedpur, Jharkhand. The website features 13 core modules, an extensive patient education system, an interactive disease library, and a robust Firebase-powered backend for real-time data management, appointment scheduling, and content delivery."),
  body("The primary objective is to establish a powerful online presence reflecting SARADA Netralaya's brand identity, built on clinical excellence, compassionate care, and cutting-edge technology. The eye care theme will be deeply woven into every aspect of the design, from the color palette and typography to micro-interactions and visual storytelling elements."),
  body("The backend architecture leverages Google Firebase for real-time database, authentication, hosting, cloud storage, and cloud functions. The frontend will be built with Next.js and React, providing a fast, SEO-optimized, and responsive experience. The total development effort spans 14 to 18 weeks, divided into 5 distinct phases."),

  // 2. PROJECT VISION & OBJECTIVES
  h1("2. Project Vision & Objectives"),
  h2("2.1 Vision Statement"),
  body("To create India's most patient-centric eye hospital website that combines medical authority with digital warmth, making quality eye care accessible, understandable, and just one click away for every patient in Jamshedpur and beyond. The website should feel like a trusted companion guiding patients through their eye health journey."),
  h2("2.2 Core Objectives"),
  bb2("Brand Authority: ", "Establish SARADA as the leading eye care institution in Jamshedpur through a professional, trustworthy, and visually stunning online presence."),
  bb2("Patient Education: ", "Provide a comprehensive patient education ecosystem including disease library, symptom guides, interactive quizzes, and FAQ sections."),
  bb2("Digital Appointment Management: ", "Implement seamless, real-time appointment booking powered by Firebase allowing patients to schedule, reschedule, or cancel appointments."),
  bb2("Emergency Accessibility: ", "Ensure emergency contact information and eye emergency guidance are always prominently accessible."),
  bb2("Community Trust: ", "Build trust through authentic testimonials, doctor profiles, hospital gallery, and transparent treatment and insurance information."),
  bb2("SEO & Discoverability: ", "Achieve top search rankings for eye care queries in the Jamshedpur region through comprehensive SEO and content marketing."),
  bb2("Scalable Architecture: ", "Build on Firebase to scale from hundreds to millions of visitors without performance degradation."),
  h2("2.3 Target Audience"),
  makeTable(
    ["Audience Segment", "Description", "Key Needs"],
    [
      ["Local Patients", "Jamshedpur residents seeking eye care", "Easy booking, doctor info, treatment details"],
      ["Referenced Patients", "Patients referred by other doctors", "Credibility indicators, technology info"],
      ["Elderly Patients", "Seniors with cataract, glaucoma", "Large text, simple nav, emergency contacts"],
      ["Parents", "Concerned about children's eye health", "Pediatric info, vision milestones"],
      ["Diabetic Patients", "Needing retinopathy screening", "Specialized diabetes eye care info"],
      ["Young Professionals", "Considering LASIK, screen-time issues", "Modern UI, quick booking, cost info"],
      ["Insurance Holders", "Patients with health insurance", "Insurance partners, cashless process"],
    ]
  ),

  // 3. WEBSITE ARCHITECTURE & SITEMAP
  h1("3. Website Architecture & Sitemap"),
  h2("3.1 Information Architecture"),
  body("The website follows a flat hierarchical structure optimized for user experience and search engine crawlability. The primary navigation contains 8 top-level items, with key sections expanding into sub-pages. No page is more than 3 clicks away from the homepage. The most critical patient actions (Book Appointment, Emergency) are always visible in a sticky header bar."),
  h2("3.2 Complete Sitemap"),
  makeTable(
    ["Page", "URL Path", "Priority", "Description"],
    [
      ["Home", "/", "Highest", "Hero, services, CTA, testimonials"],
      ["About Us", "/about", "High", "Hospital story, mission, infrastructure"],
      ["Our Doctors", "/doctors", "High", "Doctor profiles, specializations"],
      ["Treatments", "/treatments", "Highest", "All treatments with sub-pages"],
      ["  Cataract", "/treatments/cataract", "High", "Surgery details, types, recovery"],
      ["  LASIK", "/treatments/lasik", "High", "Procedure, eligibility, cost"],
      ["  Glaucoma", "/treatments/glaucoma", "High", "Diagnosis, treatment options"],
      ["  Retina", "/treatments/retina", "High", "Retinal diseases, surgery"],
      ["  Cornea", "/treatments/cornea", "Medium", "Corneal treatments, transplant"],
      ["  Pediatric Eye", "/treatments/pediatric", "Medium", "Children's eye care, squint"],
      ["  Diabetic Eye", "/treatments/diabetic", "High", "Retinopathy screening, treatment"],
      ["  Dry Eye", "/treatments/dry-eye", "Medium", "Evaluation, advanced treatment"],
      ["Technology", "/technology", "Medium", "Equipment, surgical systems"],
      ["Insurance", "/insurance", "High", "Partners, cashless process"],
      ["Gallery", "/gallery", "Low", "Hospital photos, events"],
      ["Testimonials", "/testimonials", "High", "Patient stories, video reviews"],
      ["Blog", "/blog", "Medium", "Eye health articles, news"],
      ["FAQ", "/faq", "Medium", "Common questions and answers"],
      ["Contact", "/contact", "High", "Location, map, phone, hours"],
      ["Appointment", "/appointment", "Highest", "Online booking system"],
      ["Emergency", "/emergency", "Highest", "Eye emergency guidance"],
      ["Patient Education", "/education", "High", "Symptom checker, quizzes"],
      ["Disease Library", "/diseases", "High", "Comprehensive eye disease info"],
    ]
  ),
  h2("3.3 Navigation Design"),
  body("The navigation employs a mega-menu for Treatments (8+ sub-categories). The sticky header features SARADA logo (left), primary nav links (center), and two CTAs: 'Book Appointment' (filled SARADA Red) and 'Emergency' (outlined red). Mobile transforms to full-screen overlay. Breadcrumbs appear on interior pages. Footer has 4-column sitemap plus social media icons."),

  // 4. EYE CARE DESIGN SYSTEM
  h1("4. Eye Care Design System"),
  h2("4.1 Design Philosophy"),
  body("The design system is rooted in 'Clarity Through Care,' mirroring the hospital's mission of restoring vision. Every visual element evokes trust, medical authority, and compassionate warmth. The language draws inspiration from the human eye itself, incorporating organic curves, iris-like radial patterns, and light-diffusion gradients. The overall aesthetic is 'Premium Medical' -- where clinical precision meets human-centered design."),
  h2("4.2 Color Palette"),
  body("The palette is derived from the SARADA brand identity (analyzed from the official logo) and expanded into a comprehensive web design system."),
  makeTable(
    ["Color Name", "Hex Code", "Usage", "Effect"],
    [
      ["SARADA Red", "#E31E24", "Primary CTAs, brand accents, emergency", "Urgency, healthcare, vitality"],
      ["Eye Blue", "#00AEEF", "Secondary accent, links, technology section", "Trust, clarity, vision"],
      ["Deep Navy", "#0B1C2C", "Headers, dark sections, footer", "Authority, professionalism"],
      ["Charcoal", "#2C3E50", "Body text, headings", "Readability, sophistication"],
      ["Warm White", "#FAFBFC", "Page backgrounds, card surfaces", "Cleanliness, purity"],
      ["Soft Cream", "#F5F0EB", "Alternate section backgrounds, hover states", "Warmth, comfort"],
      ["Iris Gold", "#D4A574", "Icons, decorative elements", "Premium feel, healing warmth"],
      ["Success Green", "#27AE60", "Success messages, confirmations", "Health, positive outcomes"],
      ["Alert Orange", "#F39C12", "Warnings, appointment reminders", "Gentle urgency"],
      ["Light Gray", "#E8ECF0", "Borders, dividers", "Structure, separation"],
    ]
  ),
  body("The gradient system uses a primary hero gradient from Deep Navy to Eye Blue, mimicking the depth of the human eye. Secondary gradients use soft radial patterns resembling iris textures, creating a subliminal connection to ophthalmology."),

  h2("4.3 Typography"),
  body("Typography is critical in healthcare web design where readability impacts patient trust. The type system uses modern sans-serif fonts optimized for screen readability."),
  makeTable(
    ["Element", "Font", "Weight", "Desktop Size", "Mobile Size", "Line Height"],
    [
      ["Hero Heading", "Inter / Poppins", "700-800", "48-64px", "32-40px", "1.1"],
      ["Section Heading", "Inter / Poppins", "700", "32-40px", "24-32px", "1.2"],
      ["Subheading", "Inter / Poppins", "600", "24-28px", "20-24px", "1.3"],
      ["Body Text", "Inter / Noto Sans", "400", "16-18px", "15-16px", "1.6"],
      ["Button Text", "Inter / Poppins", "600", "16-18px", "15-16px", "1.0"],
      ["Navigation", "Inter / Poppins", "500", "15-16px", "14-15px", "1.0"],
      ["Patient Quote", "Lora / Merriweather", "400 Italic", "18-20px", "16-18px", "1.7"],
    ]
  ),
  body("Minimum body text size never drops below 15px on mobile. All text meets WCAG AA contrast (4.5:1 normal, 3:1 large). Font loading uses font-display: swap with system font fallback for instant render."),

  h2("4.4 UI Components"),
  h3("4.4.1 Buttons"),
  body("Three-tier hierarchy: Primary (SARADA Red fill, white text) for 'Book Appointment'; Secondary (outlined Eye Blue) for 'Learn More'; Ghost (transparent) for tertiary. All buttons: 8px border-radius, 12px 24px padding, 0.3s ease transitions. Sizes: Small/Medium/Large. Emergency buttons use pulsing red border animation."),
  h3("4.4.2 Cards"),
  body("White background, subtle box-shadow (0 2px 12px rgba(0,0,0,0.06)), 12px rounded corners, 16px padding. On hover: enhanced shadow (0 8px 24px), 2px upward translate. Image cards: 16:9 aspect ratio, lazy-loaded with blur-up placeholders."),
  h3("4.4.3 Forms"),
  body("Healthcare-specific patterns: 48px min touch targets, labels above inputs (never placeholder-only), real-time inline validation. Multi-step booking uses visual stepper. Accessible error states use color + icons."),
  h3("4.4.4 Icons & Illustrations"),
  body("Line Awesome for UI icons + custom eye-care SVG illustrations: animated eye diagram (hero), iris loading spinner, stylized doctor silhouettes, friendly illustrated characters (patient education). All icons use currentColor technique."),

  h2("4.5 Visual Elements & Animations"),
  body("Hero section features parallax scrolling with floating organic shapes resembling light particles through a lens. Section transitions use fade-up (opacity 0 to 1, translateY 20px) via Intersection Observer. Micro-interactions: button press scale (0.97x), card hover lift, nav underline slides, form focus glow (Eye Blue). All animations respect prefers-reduced-motion media query. Background: subtle SVG noise (2-3% opacity) and soft radial gradient blobs for depth."),

  h2("4.6 Imagery Guidelines"),
  body("Three photography categories: Clinical (hospital interior, equipment, surgery rooms -- professionalism), Lifestyle (happy patients, doctor-patient interactions -- warmth and trust), Abstract/Macro (extreme close-ups of eyes, iris patterns, light reflections -- beauty and science of vision). Consistent warm color grade with boosted clarity."),

  // 5. PAGE-BY-PAGE DETAILED PLAN
  h1("5. Page-by-Page Detailed Plan"),
  h2("5.1 Home Page"),
  body("The homepage is the digital flagship, making an immediate emotional connection while efficiently routing visitors. Structured in a vertical narrative flow from awareness to action."),
  h3("Hero Section"),
  body("Full viewport (100vh desktop, 85vh mobile). Full-width iris close-up background with dark navy gradient overlay. Headline: 'See the World with Clarity' (Inter 800, 56px, white). Sub-headline about Jamshedpur's premier eye care. Two CTAs: 'Book Appointment' (SARADA Red) and 'Our Treatments' (white outlined)."),
  h3("Trust Indicators Bar"),
  body("Light cream bar with 4-5 animated counters: '15+ Years of Excellence,' '50,000+ Successful Surgeries,' '2 Expert Doctors,' '10+ Treatments,' 'All Insurance Accepted.' Fetched from Firebase, count-up on scroll."),
  h3("Key Services Grid"),
  body("3-column grid (2 tablet, 1 mobile) with icon-illustration cards: Cataract, LASIK, Glaucoma, Retina, Diabetic Eye, Pediatric. Each card: custom SVG icon, name, 2-line description, 'Learn More' link. Gentle hover lift + shadow."),
  h3("Why Choose SARADA"),
  body("Split layout: large image (doctor with equipment) left, 4 differentiators right: Expert Doctors, Advanced Technology, Patient-First Approach, Insurance Friendly. Stacks vertically on mobile."),
  h3("Testimonials, Doctors Preview & CTA"),
  body("Horizontal scrolling testimonials carousel (auto-advance 5s, pause on hover). Compact doctors preview with photos and 'View Profile' links. Blog preview (3 latest posts). Final CTA banner: 'Ready to Take the First Step Towards Better Vision?'"),

  h2("5.2 About Us Page"),
  body("Full-width hospital exterior banner. Our Story section with narrative and pull quotes. Mission/Vision/Values as 3 distinct blocks with SARADA Red accent lines. Infrastructure gallery (6-8 photos with zoom-on-hover and lightbox). Accreditations & certifications row."),

  h2("5.3 Our Doctors Page"),
  body("Magazine-style profiles for Dr. Nitin G. Dhira and Dr. Nitish R. Bharadwaj. Each profile: circular headshot (200px), full name, qualifications, specialization pills, experience, biography (3-4 paragraphs), procedures list, availability schedule (from Firebase with green/orange/red color coding), direct 'Book Appointment' button."),

  h2("5.4 Treatments Page"),
  body("Hub page: visually engaging grid with illustrative icons, filter bar (Surgical/Non-Surgical + keyword search). Individual treatment sub-pages follow a consistent template: hero banner, Overview, Symptoms, Diagnosis, Treatment Options, Recovery, FAQ, doctor recommendations, prominent CTA."),
  makeTable(
    ["Treatment", "Key Content", "Visual"],
    [
      ["Cataract", "Phaco/femto, lens options, cost, recovery", "Before/after vision comparison"],
      ["LASIK", "Eligibility quiz, procedure steps, cost", "Animated eye diagram"],
      ["Glaucoma", "Types, diagnosis (tonometry, visual field)", "Progressive vision loss viz"],
      ["Retina", "OCT/FFA diagnostics, injections, surgery", "Retinal scan imagery"],
      ["Cornea", "DSEK/DMEK procedures, transplant types", "Corneal cross-section"],
      ["Pediatric Eye", "Squint, lazy eye, screening schedule", "Child-friendly illustrations"],
      ["Diabetic Eye", "Stages, screening importance, treatment", "Stage progression infographic"],
      ["Dry Eye", "Schirmer's test, OSDI, treatment ladder", "Tear film animation"],
    ]
  ),

  h2("5.5 Technology Page"),
  body("Grid of technology cards with product photos, specifications, patient benefit descriptions: Phacoemulsification, OCT, FFA, Perimetry, Corneal Topography, Slit Lamp, YAG Laser, Argon Laser. Technology Timeline showing adoption journey. Comparison table: SARADA vs conventional methods."),
  h2("5.6 Insurance Page"),
  body("Insurance partner logos grid. 4-step cashless process visual guide. Coverage details table. Documents required checklist. FAQ accordion. CTA to contact insurance desk."),
  h2("5.7 Gallery Page"),
  body("Masonry grid with category filters (Exterior, Interiors, Equipment, Events, Patients). Lightbox with swipe navigation. Firebase Cloud Storage with CDN. Future: 360-degree virtual tour."),
  h2("5.8 Testimonials Page"),
  body("Pinterest-style masonry: text + video testimonials. Each card: photo, name, age, treatment, rating, date, quote. Filter by treatment type. Optional 'Share Your Story' CTA."),
  h2("5.9 Blog Page"),
  body("3-column card grid listing. Category filters. Article pages: hero image, well-formatted content, author bio, social sharing, related articles, CTA. Managed via Firestore + admin panel."),
  h2("5.10 FAQ Page"),
  body("Accordion organized by category (General, Appointments, Treatments, Insurance, Emergency). Keyword search bar. JSON-LD schema for Google rich snippets."),
  h2("5.11 Contact Page"),
  body("Split layout: info + form (left), Google Map (right). Full address, click-to-call phone numbers, email, working hours. Form stores to Firestore 'contacts' collection. WhatsApp floating button."),
  h2("5.12 Appointment Booking Page"),
  body("Multi-step wizard: (1) Select Treatment, (2) Select Doctor, (3) Select Date & Time (calendar + Firebase Realtime Database slots), (4) Patient Details. Progress stepper. Review/confirm screen. On booking: Firestore write + SMS/WhatsApp notification via Cloud Functions."),
  h2("5.13 Emergency Page"),
  body("Pulsing red header: 'Eye Emergency? Act Now!' Large click-to-call numbers. Common emergencies with severity indicators and action guidance: Eye Injury, Chemical Splash, Sudden Vision Loss, Floaters/Flashes. First-aid tips with visual illustrations."),

  // 6. PATIENT EDUCATION & DISEASE LIBRARY
  h1("6. Patient Education & Disease Library"),
  h2("6.1 Patient Education Hub"),
  h3("6.1.1 Eye Symptom Guide"),
  body("Interactive tool: select symptoms from visual body map or categorized list (Blurry Vision, Red Eyes, Floaters, Eye Pain, Dryness, etc.). Decision-tree logic (stored in Firestore) suggests possible conditions and recommends routine vs. urgent care."),
  h3("6.1.2 Dry Eye Quiz"),
  body("10-question interactive quiz assessing severity. Covers frequency, environment, screen time, medications, lifestyle. Score classification: Mild/Moderate/Severe with personalized recommendations. Shareable via WhatsApp/email."),
  h3("6.1.3 Screen Time Checker"),
  body("Calculates estimated daily screen time from routine inputs. Provides eye care tips including 20-20-20 rule. Visual timer for eye break reminders. Shareable on social media for organic marketing."),
  h3("6.1.4 Child Vision Milestones"),
  body("Age-based visual guide (birth to 6 years) with interactive timeline. Customized checklist per child's age. Warning signs and next exam scheduling recommendations. High SEO value."),

  h2("6.2 Disease Library"),
  body("Searchable encyclopedia of 11 eye conditions. Standardized template per disease: anatomical illustration, plain-language explanation, 'When to See a Doctor' section, treatment options at SARADA, booking CTA."),
  makeTable(
    ["Disease", "Key Content", "SEO Keywords"],
    [
      ["Cataract", "Types, surgery, lens implants, recovery, cost", "cataract surgery jamshedpur"],
      ["Glaucoma", "Types, silent progression, treatment, monitoring", "glaucoma treatment"],
      ["Retina Diseases", "Detachment, macular degeneration, diabetic RP", "retina specialist"],
      ["Cornea", "Ulcers, keratoconus, DSEK/DMEK", "corneal transplant"],
      ["Dry Eye", "Causes, diagnostics, treatment ladder", "dry eye treatment"],
      ["Eye Allergy", "Allergic conjunctivitis, triggers, management", "eye allergy treatment"],
      ["Conjunctivitis", "Viral/bacterial/allergic types, treatment", "pink eye treatment"],
      ["Squint", "Types, surgery, exercises in children/adults", "squint surgery"],
      ["Pediatric Diseases", "Amblyopia, refractive errors, screening", "children eye care"],
      ["Computer Vision", "Digital strain, blue light, 20-20-20 rule", "computer eye strain"],
      ["Diabetic Retinopathy", "Stages, screening, laser, injections", "diabetic eye care"],
    ]
  ),

  // 7. INTERACTIVE FEATURES
  h1("7. Interactive Features Plan"),
  h2("7.1 Voice Search"),
  body("Web Speech API voice search supporting English and Hindi. Microphone icon in search bar. Natural language queries ('book cataract appointment') route to relevant pages. Valuable for elderly patients."),
  h2("7.2 WhatsApp Integration"),
  body("Floating WhatsApp button on every page. Pre-filled message template. WhatsApp Business API for automated responses and staff handoff. Appointment confirmations, reminders, follow-ups via WhatsApp."),
  h2("7.3 Virtual Hospital Tour"),
  body("360-degree panoramic tour: reception, waiting area, consultation rooms, diagnostic lab, operation theater. Interactive hotspots with area information. Builds trust and reduces first-visit anxiety."),
  h2("7.4 AI Educational Assistant (Future Scope)"),
  body("AI chatbot trained on SARADA's medical content. Floating chat widget. Natural language processing for symptoms, treatments, appointments, insurance queries. Escalation to human staff via WhatsApp. Planned for Phase 3."),

  // 8. FIREBASE DATABASE ARCHITECTURE
  h1("8. Firebase Database Architecture"),
  h2("8.1 Firebase Services Overview"),
  makeTable(
    ["Firebase Service", "Purpose", "Usage in SARADA"],
    [
      ["Firestore", "NoSQL document database", "Doctors, treatments, appointments, blogs, testimonials, FAQ, diseases"],
      ["Realtime Database", "Real-time data sync", "Live slot availability, visitor counter, chat sessions"],
      ["Authentication", "User identity", "Admin login, patient account (future), Google sign-in"],
      ["Cloud Storage", "File storage + CDN", "Doctor photos, gallery, blog images, treatment images"],
      ["Cloud Functions", "Serverless backend", "Notifications, form submissions, image optimization, SMS"],
      ["Hosting", "Static site hosting", "Next.js static export on Firebase CDN globally"],
      ["Analytics", "Usage tracking", "Page views, user behavior, conversion tracking"],
      ["Performance", "App monitoring", "Page load, Core Web Vitals, error tracking"],
    ]
  ),

  h2("8.2 Firestore Collections & Data Models"),
  h3("8.2.1 doctors Collection"),
  makeTable(
    ["Field", "Type", "Description"],
    [
      ["id", "string", "Auto-generated document ID"],
      ["name", "string", "Full name (e.g., Dr. Nitin G. Dhira)"],
      ["photo", "string", "Cloud Storage URL for profile photo"],
      ["specialization", "array", "List of specialization areas"],
      ["qualifications", "array", "Degrees and certifications"],
      ["experience", "number", "Years of experience"],
      ["bio", "string", "Detailed biography text"],
      ["procedures", "array", "List of procedures performed"],
      ["languages", "array", "Languages spoken"],
      ["isActive", "boolean", "Whether currently active"],
      ["sortOrder", "number", "Display order on website"],
    ]
  ),

  h3("8.2.2 appointments Collection"),
  makeTable(
    ["Field", "Type", "Description"],
    [
      ["id", "string", "Auto-generated document ID"],
      ["patientName", "string", "Patient's full name"],
      ["patientPhone", "string", "Contact number"],
      ["patientEmail", "string", "Email (optional)"],
      ["treatmentId", "string", "Reference to treatments collection"],
      ["treatmentName", "string", "Denormalized treatment name"],
      ["doctorId", "string", "Reference to doctors collection"],
      ["doctorName", "string", "Denormalized doctor name"],
      ["date", "string", "Appointment date (YYYY-MM-DD)"],
      ["timeSlot", "string", "Time slot (e.g., 10:00 AM - 10:30 AM)"],
      ["status", "string", "pending/confirmed/completed/cancelled/no-show"],
      ["insuranceProvider", "string", "Insurance company name"],
      ["insurancePolicyNo", "string", "Policy number"],
      ["notes", "string", "Patient notes or special requirements"],
      ["createdAt", "timestamp", "Booking timestamp"],
      ["adminNotes", "string", "Internal notes by hospital staff"],
    ]
  ),

  h3("8.2.3 treatments Collection"),
  makeTable(
    ["Field", "Type", "Description"],
    [
      ["id", "string", "Auto-generated ID (e.g., cataract, lasik)"],
      ["name", "string", "Treatment display name"],
      ["slug", "string", "URL-friendly slug"],
      ["shortDescription", "string", "1-2 line summary for cards"],
      ["category", "string", "surgical / non-surgical"],
      ["doctorIds", "array", "References to qualified doctors"],
      ["heroImage", "string", "Cloud Storage URL"],
      ["overview", "string", "Detailed overview (rich content)"],
      ["symptoms", "array", "List of common symptoms"],
      ["treatmentOptions", "array", "Available procedures with descriptions"],
      ["recovery", "string", "Recovery timeline and care"],
      ["faq", "array", "Array of {question, answer} objects"],
      ["seoTitle", "string", "Meta title for SEO"],
      ["isActive", "boolean", "Whether currently offered"],
    ]
  ),

  h3("8.2.4 Additional Collections"),
  makeTable(
    ["Collection", "Key Fields", "Purpose"],
    [
      ["testimonials", "patientName, treatment, rating, quote, photo, isVideo", "Patient reviews"],
      ["blogs", "title, slug, content, author, heroImage, category, tags", "Blog articles"],
      ["faq", "question, answer, category, sortOrder", "FAQ items"],
      ["diseases", "name, slug, overview, symptoms, treatment, relatedTreatments", "Disease library"],
      ["gallery", "url, caption, category, sortOrder", "Gallery images"],
      ["contacts", "name, email, phone, subject, message, isRead", "Contact form"],
      ["doctorSchedules", "doctorId, dayOfWeek, startTime, endTime, slotDuration", "Doctor availability"],
      ["siteSettings", "key, value, type", "Global settings (phone, address, hours)"],
      ["quizResults", "quizType, answers, score, patientPhone", "Quiz submissions"],
      ["insurancePartners", "name, logo, cashlessAvailable, contactInfo", "Insurance companies"],
      ["technologies", "name, description, imageUrl, specifications", "Equipment showcase"],
    ]
  ),

  h2("8.3 Realtime Database Structure"),
  body("Primary path: /slotAvailability/{doctorId}/{date}/{timeSlot} storing boolean (true=available). Listened to in real-time for accurate slot display. Optimistic locking via transaction prevents double-booking."),

  h2("8.4 Security Rules"),
  body("Public Read: doctors, treatments, testimonials, blogs, faq, diseases, gallery, technologies, siteSettings, insurancePartners readable by all; write restricted to admin (auth.token.admin === true). Appointments: unauthenticated create allowed; update/delete admin-only. Contacts: unauthenticated create; admin read/delete. DoctorSchedules: admin-only for all operations."),

  h2("8.5 Cloud Functions"),
  makeTable(
    ["Function", "Trigger", "Purpose"],
    [
      ["sendAppointmentConfirmation", "onCreate (appointments)", "SMS/WhatsApp to patient"],
      ["sendAppointmentReminder", "Daily cron (9 AM)", "Next-day appointment reminders"],
      ["notifyNewContact", "onCreate (contacts)", "Email/SMS to hospital staff"],
      ["processQuizResult", "onCreate (quizResults)", "Calculate score, recommendations"],
      ["resizeImage", "onFinalize (Storage)", "Auto-resize uploaded images"],
      ["generateBlogSlug", "onCreate (blogs)", "Auto-generate URL slug"],
      ["cleanupOldAppointments", "Daily cron", "Archive 90+ day completed"],
    ]
  ),

  // 9. TECHNICAL STACK
  h1("9. Technical Stack & Infrastructure"),
  h2("9.1 Frontend Stack"),
  makeTable(
    ["Technology", "Version", "Purpose"],
    [
      ["Next.js", "14.x (App Router)", "React framework with SSR/SSG"],
      ["React", "18.x", "Component-based UI library"],
      ["TypeScript", "5.x", "Type safety"],
      ["Tailwind CSS", "4.x", "Utility-first CSS"],
      ["shadcn/ui", "Latest", "Accessible UI components"],
      ["Framer Motion", "11.x", "Animations and transitions"],
      ["React Hook Form", "7.x", "Form management + validation"],
      ["Zod", "3.x", "Schema validation"],
      ["Swiper", "11.x", "Touch-friendly carousels"],
      ["React Query", "5.x", "Data fetching and caching"],
      ["Zustand", "4.x", "Global state management"],
    ]
  ),
  h2("9.2 Backend & Firebase"),
  makeTable(
    ["Technology", "Purpose"],
    [
      ["Firebase Admin SDK", "Server-side Firebase access"],
      ["Firebase Client SDK", "Client-side Firestore, Auth, Storage"],
      ["Firebase Cloud Functions", "Serverless logic (Node.js 20)"],
      ["Firebase Hosting", "Global CDN for Next.js static export"],
    ]
  ),
  h2("9.3 Deployment Architecture"),
  body("Firebase Hosting with Next.js static export. GitHub Actions CI/CD: push to 'develop' = staging, push to 'main' = production. Two Firebase environments: sarada-staging and sarada-production, each with own Firestore, Storage, and Functions."),

  // 10. DEVELOPMENT PHASES
  h1("10. Development Phases & Timeline"),
  body("Agile methodology with 5 phases, 14-18 weeks total."),
  makeTable(
    ["Phase", "Duration", "Key Deliverables"],
    [
      ["1: Foundation", "Weeks 1-2", "Project setup, Firebase, design system, components, CI/CD"],
      ["2: Core Pages", "Weeks 3-6", "Home, About, Doctors, Contact, responsive layout, basic SEO"],
      ["3: Content & Features", "Weeks 7-11", "Treatments, Disease Library, Education tools, Insurance, Gallery, Blog, FAQ"],
      ["4: Booking & Interactivity", "Weeks 12-14", "Appointment system, Emergency, WhatsApp, voice search, animations"],
      ["5: Testing & Launch", "Weeks 15-18", "Cross-browser, accessibility, SEO, performance, content QA, launch"],
    ]
  ),

  h2("10.1 Phase 1: Foundation (Weeks 1-2)"),
  nib("Project Initialization: Next.js + TypeScript + Tailwind + shadcn/ui. Firebase project config. ESLint, Prettier, pre-commit hooks.", "list-1"),
  nib("Design System: Color tokens, typography scale, spacing, buttons, cards, forms, layout primitives. Storybook documentation.", "list-1"),
  nib("Base Layout: Responsive header (mega-menu + mobile), sticky CTA bar, footer with 4-column sitemap, breadcrumbs.", "list-1"),
  nib("CI/CD: GitHub Actions for lint, type-check, build, deploy to Firebase staging and production.", "list-1"),

  h2("10.2 Phase 2: Core Pages (Weeks 3-6)"),
  nib("Home Page: Hero, trust indicators, services grid, why-choose, testimonials carousel, doctors preview, blog preview, CTA.", "list-2"),
  nib("About Page: Story, mission/vision/values, infrastructure gallery, accreditations.", "list-2"),
  nib("Doctors Page: Profile cards, schedule table (Firebase), appointment CTA per doctor.", "list-2"),
  nib("Contact Page: Info, form (Firestore), Google Map, WhatsApp button.", "list-2"),
  nib("Responsive: Test on 1920/1440/1280/1024/768/414/375px breakpoints.", "list-2"),

  h2("10.3 Phase 3: Content & Features (Weeks 7-11)"),
  nib("Treatments: Hub page + 8 sub-pages with FAQ, doctor cross-links.", "list-3"),
  nib("Disease Library: 11 conditions, searchable, SEO-optimized.", "list-3"),
  nib("Patient Education: Symptom Guide, Dry Eye Quiz, Screen Time Checker, Child Vision Milestones.", "list-3"),
  nib("Supporting: Insurance, Gallery, Testimonials, Blog, FAQ, Technology pages.", "list-3"),

  h2("10.4 Phase 4: Booking & Interactivity (Weeks 12-14)"),
  nib("Appointment System: 4-step wizard, real-time slots (Realtime DB), validation, confirmation.", "list-4"),
  nib("Emergency Page: Severity indicators, first-aid tips, click-to-call.", "list-4"),
  nib("Advanced: WhatsApp float, voice search, animations, lazy loading, blur-up placeholders.", "list-4"),

  h2("10.5 Phase 5: Testing & Launch (Weeks 15-18)"),
  nib("Cross-browser: Chrome, Firefox, Safari, Edge, iOS Safari, Chrome Android.", "list-5"),
  nib("Accessibility: WCAG 2.1 AA audit (axe-core), screen reader testing (NVDA, VoiceOver).", "list-5"),
  nib("SEO: Schema markup (LocalBusiness, MedicalBusiness, FAQ), sitemap, robots.txt, Search Console.", "list-5"),
  nib("Content QA: Accuracy review, broken links, brand consistency, doctor sign-off on medical content.", "list-5"),
  nib("Launch: 1-week soft launch, feedback, fixes, then full public launch with Google Ads.", "list-5"),

  // 11. SEO, PERFORMANCE & ACCESSIBILITY
  h1("11. SEO, Performance & Accessibility"),
  h2("11.1 SEO Strategy"),
  bb2("On-Page: ", "Unique meta titles/descriptions. Strict H1>H2>H3 hierarchy. Descriptive alt texts. Internal linking network. Clean URLs (/treatments/cataract)."),
  bb2("Technical: ", "Next.js SSG/ISR for fast crawl. XML sitemap auto-generated. robots.txt. Canonical URLs. JSON-LD schemas (LocalBusiness, MedicalBusiness, FAQ, Article)."),
  bb2("Local SEO: ", "Google Business Profile optimized. Local schema markup. Healthcare directory submissions. Location keywords in content."),
  bb2("Content: ", "2-4 blog articles/month targeting long-tail keywords. Disease library for condition-specific queries. Evergreen, medically accurate content."),

  h2("11.2 Performance Targets"),
  makeTable(
    ["Metric", "Target", "Tool"],
    [
      ["LCP", "< 2.5 seconds", "Lighthouse / DevTools"],
      ["FID", "< 100 milliseconds", "Lighthouse / Web Vitals"],
      ["CLS", "< 0.1", "Lighthouse / DevTools"],
      ["TTFB", "< 200 milliseconds", "WebPageTest"],
      ["Lighthouse Performance", "> 90", "Google Lighthouse"],
      ["Lighthouse SEO", "> 95", "Google Lighthouse"],
      ["Lighthouse Accessibility", "> 90", "Google Lighthouse"],
      ["Homepage Weight", "< 2 MB initial", "DevTools Network"],
    ]
  ),

  h2("11.3 Accessibility (WCAG 2.1 AA)"),
  bb2("Keyboard Navigation: ", "All interactive elements fully operable via keyboard with visible Eye Blue focus indicators."),
  bb2("Screen Reader: ", "Proper ARIA labels, roles, landmarks. Descriptive alt text. Associated form labels. aria-live for dynamic content."),
  bb2("Color Contrast: ", "4.5:1 normal text, 3:1 large text. Information never by color alone -- icons + labels provide redundancy."),
  bb2("Text Scaling: ", "Fully responsive up to 200% zoom. No text trapped in fixed containers."),
  bb2("Reduced Motion: ", "All animations respect prefers-reduced-motion media query."),

  // 12. FUTURE SCOPE
  h1("12. Future Scope & AI Integration"),
  h2("12.1 AI Educational Assistant"),
  body("AI chatbot trained on SARADA's medical content for 24/7 patient education and triage. Floating chat widget. Handles symptoms, treatments, appointments, insurance queries. Seamless escalation to staff via WhatsApp for complex cases."),
  h2("12.2 Doctor Video Library"),
  body("Dedicated video library with doctors explaining conditions, procedures, and post-operative care. Hosted on YouTube (SEO benefit), embedded on treatment pages. Builds personal connection and establishes thought leadership."),
  h2("12.3 Camp Registration System"),
  body("Online registration for free eye screening camps in rural/semi-urban areas. Camp schedules, locations, reminders. Staff management for registrations, attendance, follow-ups."),
  h2("12.4 Multilingual Support"),
  body("Hindi and Santhali (local language) in addition to English. next-intl framework. Translated content in Firestore. Language switcher via globe icon in header."),
  h2("12.5 Patient Portal"),
  body("Secure portal: appointment history, medical reports, prescriptions, secure doctor messaging, post-treatment instructions. Firebase Auth with email/password and phone OTP. Role-based access control."),
  h2("12.6 Telemedicine Integration"),
  body("Video consultations for follow-up appointments. WebRTC-based video calling with screen sharing for test results. Reduces physical visits for post-surgery checkups."),
];

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  BUILD DOCUMENT
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
const doc = new Document({
  styles: {
    default: {
      document: { run: { font: { ascii: "Calibri" }, size: 22, color: "333333" }, paragraph: { spacing: { line: 312 } } },
      heading1: { run: { font: { ascii: "Calibri" }, size: 32, bold: true, color: "2C3E50" }, paragraph: { spacing: { before: 400, after: 200, line: 312 } } },
      heading2: { run: { font: { ascii: "Calibri" }, size: 28, bold: true, color: "34495E" }, paragraph: { spacing: { before: 300, after: 160, line: 312 } } },
      heading3: { run: { font: { ascii: "Calibri" }, size: 24, bold: true, color: "5D6D7E" }, paragraph: { spacing: { before: 240, after: 120, line: 312 } } },
    },
  },
  numbering: numConfig,
  sections: [
    // COVER
    { properties: { page: { size: { width: 11906, height: 16838 }, margin: { top: 0, bottom: 0, left: 0, right: 0 } } },
      children: buildCover({ title: "SARADA Netralaya Website Plan", subtitle: "Comprehensive Eye Care Website Development with Firebase", englishLabel: "COMPREHENSIVE DEVELOPMENT PLAN", metaLines: ["SARADA Netralaya & Maternity", "33, Swastik Ambika Tower, Near BDFC Bank, New Baradwari, Jamshedpur", "Phone: 7091090014 / 7091090016"], footerLeft: "Prepared by: Development Team", footerRight: "Date: July 2026", palette: P }),
    },
    // TOC
    { properties: { type: SectionType.NEXT_PAGE, page: { size: { width: 11906, height: 16838 }, margin: { top: 1440, bottom: 1440, left: 1701, right: 1417 } } },
      ...hdrFtr(),
      children: [
        new Paragraph({ spacing: { before: 200, after: 300 }, children: [new TextRun({ text: "Table of Contents", size: 36, bold: true, color: c("2C3E50"), font: { ascii: "Calibri" } })] }),
        new TableOfContents("Table of Contents", { hyperlink: true, headingStyleRange: "1-3" }),
        new Paragraph({ spacing: { before: 200, after: 100 }, children: [new TextRun({ text: "Note: Right-click the Table of Contents and select \"Update Field\" to refresh page numbers in Microsoft Word.", size: 18, color: "999999", font: { ascii: "Calibri" }, italics: true })] }),
        new Paragraph({ children: [new PageBreak()] }),
      ],
    },
    // BODY
    { properties: { type: SectionType.NEXT_PAGE, page: { size: { width: 11906, height: 16838 }, margin: { top: 1440, bottom: 1440, left: 1701, right: 1417 }, pageNumbers: { start: 1 } } },
      ...hdrFtr(),
      children: content,
    },
  ],
});

Packer.toBuffer(doc).then((buffer) => {
  fs.writeFileSync("/home/z/my-project/download/SARADA_Netralaya_Website_Plan.docx", buffer);
  console.log("Document generated successfully!");
});
