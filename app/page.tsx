"use client";

import React from "react";

const competencies = [
  "Strategic Oversight",
  "Product Development",
  "IT & Business Architecture",
  "Policy & Governance",
  "Cloud Data Platforms",
  "Big Data / Actionable Insights",
  "Data Science / AI / ML",
  "Enterprise Software Implementations",
  "Enterprise Data Services",
  "Master Data Management",
  "Acquisitions & Divestitures",
  "Data Migration & Conversion",
  "Partner / Distributor Relations",
  "Product Sales & Opportunity Management",
  "Customer Service & Support",
  "Install Base & Asset Management",
  "Agile / Scrum",
  "Project Management",
  "Onsite / Offshore Leadership",
  "Market Insights & Business Development",
  "Client Outreach & Proposals",
  "Budget Management",
];

const tools = {
  "Business Applications":
    "Oracle E-Business Suite, Install Base, Oracle Contracts, iSupport, Depot Repair, iStore, Order Management, Inventory, Accounts Receivable, Workflow, TCA, R12 APIs, AOL, installations and upgrades",
  "Methods & Techniques":
    "BOST Framework, Agile / Scrum, Oracle Applications Implementation Methodology (AIM), program and project management",
  "Data, Cloud & Development":
    "Tableau, Power BI, Snowflake, Looker, Azure Synapse, Databricks, Google BigQuery, MongoDB, Oracle, Teradata, Hadoop, Python, PL/SQL, Perl, JavaScript, TensorFlow, PyTorch, ChatGPT, Gemini, Cursor",
};

const certifications = [
  "IBM Certified: Data Science Specialization (AI/ML)",
  "Microsoft Certified: Azure AI/ML",
  "Microsoft Certified: Power BI",
  "Project Management, UC Berkeley",
];

const publications = [
  {
    title: "Elevate Your Decision-Making with Power BI’s AI Capabilities",
    url: "https://info.italentdigital.com/blog/elevate-your-decision-making-with-power-bis-ai-capabilities",
  },
  {
    title: "What Is a Chief Data and Analytics Officer, and Why Do You Need One?",
    url: "https://info.italentdigital.com/blog/what-is-a-chief-data-and-analytics-officer-and-why-do-you-need-one",
  },
  {
    title: "7 Ways to Unlock New Business Value During Economic Turbulence",
    url: "https://info.italentdigital.com/blog/7-ways-to-unlock-new-business-value-during-economic-turbulence",
  },
  {
    title: "Migrating to Microsoft Azure? Here’s What You Need to Consider",
    url: "https://info.italentdigital.com/blog/migrating-to-microsoft-azure-heres-what-you-need-to-consider",
  },
];

const accomplishments = [
  {
    title: "San Francisco Marathon",
    category: "Marathon & Community",
    description: "Running and community involvement.",
    highlight: "26.2M · Community & Charity Events",
    badge: "🏃",
  },
  {
    title: "Big Sur International Marathon",
    category: "Endurance Running",
    description: "Endurance running along the California coast.",
    highlight: "Scenic Coastal Challenge",
    badge: "🌊",
  },
  {
    title: "Grand Canyon Rim-To-Rim Hike",
    category: "Endurance Trek",
    description: "24-mile Rim-to-Rim endurance hike across the Grand Canyon.",
    highlight: "24 Miles · North-to-South Rim Trek",
    badge: "🏜️",
  },
  {
    title: "Mount Everest Base Camp",
    category: "High-Altitude Trekking",
    description: "High-altitude trekking adventure.",
    highlight: "17,598 ft · Khumbu Himalayan Trail",
    badge: "🏔️",
  },
  {
    title: "Mt. Whitney",
    category: "High-Altitude Trekking",
    description: "Summit trek of the highest peak in the contiguous United States.",
    highlight: "14,505 ft · Sierra Nevada Summit",
    badge: "⛰️",
  },
  {
    title: "Mt. Dana, Yosemite",
    category: "High-Altitude Trekking",
    description: "High-altitude climb to the second-highest peak in Yosemite National Park.",
    highlight: "13,061 ft · Yosemite High Sierra",
    badge: "🥾",
  },
  {
    title: "Half Dome, Yosemite",
    category: "Alpine Hike",
    description: "A challenging hike in Yosemite National Park.",
    highlight: "Cables Route · Yosemite High Sierra",
    badge: "🧗",
  },
];

export default function PortfolioTest() {
  return (
    <main className="portfolio">
      <header className="topbar">
        <a className="brand" href="#home">Chinmaya Sahu</a>
        <nav aria-label="Main navigation">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#credentials">Credentials</a>
          <a href="#accomplishments">Accomplishments</a>
        </nav>
      </header>

      <section className="hero" id="home">
        <div className="hero-shade" />
        <div className="hero-content">
          <p className="eyebrow">TECHNOLOGY LEADER&nbsp;&nbsp; | &nbsp;&nbsp;DATA &amp; AI&nbsp;&nbsp; | &nbsp;&nbsp;PROGRAM MANAGEMENT</p>
          <h1>Turning Data into<br />Business Impact</h1>
          <p className="hero-copy">
            Experienced software and data leader with 20+ years of experience
            delivering enterprise solutions, driving digital transformation, and
            leading high-performing teams across global organizations.
          </p>
          <div className="hero-actions">
            <a
              className="button button-primary"
              href="https://www.linkedin.com/in/chinmaya-sahu-a76543/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Connect with Me ↗
            </a>
          </div>
          <p className="hero-tags">Data Analytics&nbsp; · &nbsp;AI/ML&nbsp; · &nbsp;Cloud&nbsp; · &nbsp;Enterprise Applications&nbsp; · &nbsp;Leadership</p>
        </div>
      </section>

      <section className="overview section" id="about">
        <div className="summary">
          <h2><span className="section-icon">✦</span> Professional Summary</h2>
          <p>
            Founder of an Analytics Solutions delivery company and a versatile
            Data Analytics / AI leader with 20+ years of progressive experience
            across global organizations including Oracle, Cisco, and DocuSign.
          </p>
          <ul className="check-list">
            <li>Combines business acumen and technical depth across enterprise applications, processes, and data platforms.</li>
            <li>Leads enterprise software design, development, implementation, and transformation initiatives.</li>
            <li>Builds, mentors, and aligns cross-functional teams to deliver high-quality outcomes.</li>
            <li>Develops trusted client relationships and helps grow business through effective delivery and service.</li>
          </ul>
        </div>
        <div className="competency-panel" id="skills">
          <h2><span className="section-icon">⚙</span> Core Competencies</h2>
          <ul className="competency-list">
            {competencies.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>
      </section>

      <section className="lower-section" id="credentials">
        <div className="tools-panel">
          <h2><span className="section-icon">◇</span> Applications, Tools &amp; Technologies</h2>
          <div className="tools-grid">
            {Object.entries(tools).map(([title, detail]) => (
              <div className="tool-card" key={title}>
                <h3>{title}</h3>
                <p>{detail}</p>
              </div>
            ))}
          </div>
        </div>
        <aside className="education-panel">
          <h2><span className="section-icon">▱</span> Presentations, Publications &amp; Certifications</h2>
          <h3>Publications &amp; Presentations</h3>
          <p>Technical editor and contributing author of the Oracle Troubleshooting Book, including chapters on E-Business Suite installation and upgrades, Applications Object Library, and Oracle Workflow.</p>
          <ul>
            {publications.map((item) => (
              <li key={item.title}>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="publication-link"
                >
                  {item.title} ↗
                </a>
              </li>
            ))}
          </ul>
          <h3>Certifications</h3>
          <ul>{certifications.map((item) => <li key={item}>{item}</li>)}</ul>
        </aside>
      </section>

      <section className="section accomplishments-section" id="accomplishments">
        <div className="section-head">
          <h2><span className="section-icon">◈</span> Personal Accomplishments</h2>
          <p className="section-subhead">
            Dedicated to endurance running, high-altitude trekking, and community charity events—channeling discipline, perseverance, and passion for the outdoors.
          </p>
        </div>
        <div className="accomplishments-grid">
          {accomplishments.map((item) => (
            <div className="accomplishment-card" key={item.title}>
              <div className="accomplishment-top">
                <span className="accomplishment-icon" aria-hidden="true">{item.badge}</span>
                <span className="accomplishment-category">{item.category}</span>
              </div>
              <h3>{item.title}</h3>
              <p className="accomplishment-desc">{item.description}</p>
              <div className="accomplishment-highlight">{item.highlight}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="footer">
        <p>Turning Ideas into Scalable Solutions <span>|</span> Data <span>·</span> AI <span>·</span> Technology <span>·</span> People</p>
      </footer>

      <style jsx global>{`
        :root { color-scheme: light; }
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { margin: 0; font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; color: #15345f; }
        a { color: inherit; text-decoration: none; }
        .portfolio { --navy: #09264b; --blue: #1675ee; --ink: #15345f; --muted: #49668d; max-width: 1440px; margin: 0 auto; background: #fff; }
        .topbar { min-height: 72px; padding: 0 5.2%; display: flex; align-items: center; gap: 28px; background: #0b2a52; color: #fff; }
        .brand { font-size: 24px; font-weight: 750; letter-spacing: -.04em; margin-right: auto; }
        .topbar nav { display: flex; align-items: center; gap: 26px; font-size: 13px; }
        .topbar nav a { opacity: .92; }
        .topbar nav a:hover, .footer a:hover { text-decoration: underline; }
        .button { display: inline-flex; align-items: center; justify-content: center; min-height: 42px; padding: 0 18px; border-radius: 9px; font-size: 13px; font-weight: 650; white-space: nowrap; }
        .button-primary { color: #fff; background: var(--blue); border: 1px solid var(--blue); }
        .button-outline { color: #fff; border: 1px solid rgba(255,255,255,.8); background: transparent; }
        .hero { position: relative; min-height: 350px; color: #fff; background: #102f58 url("/portfolio-hero.jpg") center 48% / cover no-repeat; overflow: hidden; }
        .hero-shade { position: absolute; inset: 0; background: linear-gradient(90deg, rgba(5,27,56,.96) 0%, rgba(7,35,69,.82) 43%, rgba(7,35,69,.15) 100%), linear-gradient(0deg, rgba(4,24,48,.35), transparent 70%); }
        .hero-content { position: relative; z-index: 1; padding: 42px 5.3% 34px; max-width: 780px; }
        .eyebrow { font-size: 12px; letter-spacing: .035em; color: #c7ddf8; margin: 0 0 16px; }
        .hero h1 { font-size: clamp(36px, 4vw, 52px); line-height: 1.08; letter-spacing: -.04em; margin: 0 0 14px; }
        .hero-copy { max-width: 590px; font-size: 16px; line-height: 1.65; margin: 0; color: #edf5ff; }
        .hero-actions { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 22px; }
        .hero-tags { margin: 24px 0 0; font-size: 12px; color: #e1edfc; }
        .section { padding: 34px 5.3%; }
        .overview { display: grid; grid-template-columns: 1fr 1.15fr; gap: 34px; border-bottom: 1px solid #dce8f5; }
        .summary { padding-right: 28px; border-right: 1px solid #c7d9ee; }
        h2 { font-size: 21px; line-height: 1.3; margin: 0 0 18px; color: #123666; letter-spacing: -.02em; }
        .section-icon { display: inline-grid; place-items: center; width: 27px; height: 27px; margin-right: 9px; border-radius: 6px; color: #fff; background: #123d76; font-size: 16px; vertical-align: -4px; }
        .summary > p { font-size: 14px; line-height: 1.7; margin: 0 0 14px; }
        .check-list, .competency-list, .education-panel ul { margin: 0; padding: 0; list-style: none; }
        .check-list li { position: relative; padding-left: 24px; margin: 10px 0; font-size: 13px; line-height: 1.55; }
        .check-list li:before { content: "✓"; position: absolute; left: 0; top: 0; color: #1472df; font-weight: 800; }
        .competency-list { display: grid; grid-template-columns: 1fr 1fr; column-gap: 22px; }
        .competency-list li { position: relative; padding: 0 0 9px 20px; font-size: 12.5px; line-height: 1.4; }
        .competency-list li:before { content: "✓"; position: absolute; left: 0; color: #1472df; font-weight: 800; }
        .lower-section { display: grid; grid-template-columns: 1.45fr 1fr; gap: 30px; padding: 30px 5.3%; background: #f1f7fd; border-top: 1px solid #e0ebf7; }
        .tools-panel { padding-right: 26px; border-right: 1px solid #c7d9ee; }
        .tools-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; }
        .tool-card { padding-right: 15px; border-right: 1px solid #d0deed; }
        .tool-card:last-child { border-right: 0; }
        .tool-card h3, .education-panel h3 { color: #15447c; font-size: 12px; margin: 5px 0 9px; }
        .tool-card p, .education-panel p, .education-panel li { font-size: 11.5px; line-height: 1.65; margin: 0 0 7px; overflow-wrap: anywhere; }
        .education-panel ul { padding-left: 17px; list-style: disc; margin-bottom: 12px; }
        .publication-link { color: #1675ee; text-decoration: none; }
        .publication-link:hover { text-decoration: underline; color: #0f56b3; }
        .accomplishments-section { border-top: 1px solid #dce8f5; background: #ffffff; }
        .section-head { margin-bottom: 22px; }
        .section-subhead { max-width: 720px; font-size: 13.5px; line-height: 1.6; color: #49668d; margin: -6px 0 0; }
        .accomplishments-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(210px, 1fr)); gap: 18px; }
        .accomplishment-card { background: #f7fafd; border: 1px solid #d4e3f4; border-radius: 10px; padding: 20px 18px; display: flex; flex-direction: column; transition: transform .15s ease, box-shadow .15s ease, border-color .15s ease; }
        .accomplishment-card:hover { transform: translateY(-2px); box-shadow: 0 6px 18px rgba(18,61,118,0.08); border-color: #b5d3f8; }
        .accomplishment-top { display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px; }
        .accomplishment-icon { font-size: 24px; line-height: 1; }
        .accomplishment-category { font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: .04em; color: #1675ee; background: #e7f2ff; padding: 3px 8px; border-radius: 4px; }
        .accomplishment-card h3 { font-size: 15px; font-weight: 700; color: #102f5d; margin: 0 0 8px; line-height: 1.35; }
        .accomplishment-desc { font-size: 12.5px; line-height: 1.55; color: #3b567d; margin: 0 0 14px; flex-grow: 1; }
        .accomplishment-highlight { font-size: 11.5px; font-weight: 600; color: #15447c; border-top: 1px dashed #cadff6; padding-top: 10px; }
        .footer { min-height: 72px; display: flex; justify-content: center; align-items: center; text-align: center; padding: 18px 5.3%; background: #0b2a52; color: #fff; font-size: 12px; }
        .footer p { margin: 0; line-height: 1.6; }
        .footer span { margin: 0 8px; color: #8db9f0; }
        @media (max-width: 900px) {
          .topbar { flex-wrap: wrap; padding-top: 16px; padding-bottom: 16px; gap: 16px; }
          .topbar nav { order: 3; width: 100%; overflow-x: auto; gap: 20px; padding-bottom: 4px; }
          .overview, .lower-section { grid-template-columns: 1fr; }
          .summary, .tools-panel { padding-right: 0; border-right: 0; }
          .competency-list { grid-template-columns: 1fr 1fr; }
          .accomplishments-grid { grid-template-columns: repeat(2, 1fr); gap: 16px; }
        }
        @media (max-width: 620px) {
          .hero { min-height: 390px; }
          .hero-content { padding: 34px 6% 30px; }
          .hero h1 { font-size: 38px; }
          .section, .lower-section { padding: 26px 6%; }
          .competency-list, .tools-grid { grid-template-columns: 1fr; }
          .accomplishments-grid { grid-template-columns: 1fr; }
          .tool-card { border-right: 0; border-bottom: 1px solid #d0deed; padding-bottom: 12px; }
        }
      `}</style>
    </main>
  );
}
