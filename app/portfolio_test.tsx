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

const experience = [
  {
    company: "DocuSign",
    location: "San Francisco, CA",
    role: "Senior Program Manager",
    dates: "2024 – Present",
    summary:
      "Led implementation of a unified global Marketing & Sales Pipeline Visibility solution, providing end-to-end transparency from Lead through Closed Won/Lost.",
    bullets: [
      "Standardized metrics, centralized data, and streamlined reporting for sales, marketing, and executive decision-making.",
      "Delivered marketing intelligence dashboards to track KPIs, expose funnel bottlenecks, and enable timely corrective action.",
      "Led data engineers and data scientists delivering actionable insights for strategic and operational decisions.",
    ],
  },
  {
    company: "Cisco Systems, Inc.",
    location: "San Jose, CA",
    role: "Senior Program Manager",
    dates: "2023 – 2024",
    summary:
      "Led Service Delivery and Returns Management projects, driving enhancements and migration initiatives.",
    bullets: [
      "Served as the primary liaison for business stakeholders.",
      "Led Scrum practices and domestic/offshore teams, ensuring teams had the resources, support, and training to deliver.",
    ],
  },
  {
    company: "iTalent Digital",
    location: "San Jose, CA",
    role: "VP, Data Transformations and BI",
    dates: "2022 – 2023",
    summary:
      "Led and grew the Data & Analytics practice, delivering modern analytics solutions for clients including Microsoft, Google, Meta, Sephora, and Cisco.",
    bullets: [
      "Owned project lifecycle, requirements, delivery, budgets, client relationships, and cross-functional teams.",
      "Provided thought leadership across data transformation, analytics, data quality, governance, and MDM.",
      "Expanded the client base and engineering/reporting teams using Azure, BigQuery, Power BI, Tableau, Snowflake, Oracle Cloud, and Teradata.",
      "Led business development, client outreach, and proposal development.",
    ],
  },
  {
    company: "Cisco Systems, Inc.",
    location: "San Jose, CA",
    role: "Architect / Leader",
    dates: "2003 – 2021",
    summary:
      "Connected siloed enterprise data systems, advanced master data management, and delivered actionable insights across sales, marketing, and customer experience.",
    bullets: [
      "Led Supplier 360 and Customer 360 dashboards using Tableau and Snowflake to inform vendor negotiations and sales.",
      "Directed business requirements, functional design, and global Oracle E-Business Suite quote-to-cash implementations.",
      "Integrated acquisition data and processes, including Webex, Tandberg, IronPort, Sourcefire, and Whiptail.",
      "Led data conversion, customer and install-base quality, contract data aggregation, and global partner enablement.",
      "Modernized customer and spend analytics dashboards using Tableau and Power BI, including AI-assisted insights.",
    ],
  },
  {
    company: "Oracle Corporation",
    location: "Redwood Shores, CA",
    role: "Senior Principal Consultant / Program Manager",
    dates: "2000 – 2003",
    summary:
      "Delivered Oracle E-Business Suite solutions for enterprise clients including Agilent Technologies, Hypercom, and JDS Uniphase.",
    bullets: [
      "Led order portal and e-commerce implementations, custom integrations, and intercompany invoice-processing solutions.",
      "Managed development teams and coordinated vendors, integrations, production support, and technical delivery.",
    ],
  },
  {
    company: "Oracle Corporation",
    location: "Redwood Shores, CA",
    role: "Program Manager / Technical Specialist",
    dates: "1996 – 2000",
    summary:
      "Provided premium customer support for Oracle E-Business Suite installation, foundational components, CRM, and workflow.",
    bullets: [
      "Built a Center of Excellence for premium Oracle E-Business Suite support.",
      "Helped establish Metalink knowledge resources, reducing demand for recurring call-center technical assistance.",
      "Authored technical bulletins, policy and procedure manuals, and support plans.",
    ],
  },
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
  "Elevate Your Decision-Making with Power BI’s AI Capabilities",
  "What Is a Chief Data and Analytics Officer, and Why Do You Need One?",
  "7 Ways to Unlock New Business Value During Economic Turbulence",
  "Migrating to Microsoft Azure? Here’s What You Need to Consider",
];

export default function PortfolioTest() {
  return (
    <main className="portfolio">
      <header className="topbar">
        <a className="brand" href="#home">&lt;Name&gt;</a>
        <nav aria-label="Main navigation">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="button button-outline nav-resume" href="/resume.pdf" download>
          ↓ Download Resume
        </a>
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
            <a className="button button-primary" href="#contact">Connect with Me</a>
            <a className="button button-outline" href="/resume.pdf" download>↓ Download Resume</a>
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

      <section className="section experience-section" id="experience">
        <h2><span className="section-icon">▣</span> Professional Experience</h2>
        <div className="timeline">
          {experience.map((job) => (
            <article className="job" key={`${job.company}-${job.dates}`}>
              <div className="job-meta">
                <h3>{job.company}</h3>
                <p className="location">{job.location}</p>
                <p>{job.role}</p>
                <p className="dates">{job.dates}</p>
              </div>
              <div className="job-detail">
                <p>{job.summary}</p>
                <ul>{job.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="lower-section" id="education">
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
          <h2><span className="section-icon">▱</span> Education &amp; Credentials</h2>
          <h3>Education</h3>
          <p>MS, Computer Science</p>
          <p>BS, Physics</p>
          <h3>Certifications</h3>
          <ul>{certifications.map((item) => <li key={item}>{item}</li>)}</ul>
          <h3>Publications &amp; Presentations</h3>
          <p>Technical editor and contributing author of the Oracle Troubleshooting Book, including chapters on E-Business Suite installation and upgrades, Applications Object Library, and Oracle Workflow.</p>
          <ul>{publications.map((item) => <li key={item}>{item}</li>)}</ul>
        </aside>
      </section>

      <footer className="footer" id="contact">
        <p>Turning Ideas into Scalable Solutions <span>|</span> Data <span>·</span> AI <span>·</span> Technology <span>·</span> People</p>
        <a href="mailto:your.email@example.com">Contact Me ↗</a>
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
        .nav-resume { min-height: 36px; padding: 0 12px; font-size: 12px; }
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
        .check-list, .competency-list, .job-detail ul, .education-panel ul { margin: 0; padding: 0; list-style: none; }
        .check-list li { position: relative; padding-left: 24px; margin: 10px 0; font-size: 13px; line-height: 1.55; }
        .check-list li:before { content: "✓"; position: absolute; left: 0; top: 0; color: #1472df; font-weight: 800; }
        .competency-list { display: grid; grid-template-columns: 1fr 1fr; column-gap: 22px; }
        .competency-list li { position: relative; padding: 0 0 9px 20px; font-size: 12.5px; line-height: 1.4; }
        .competency-list li:before { content: "✓"; position: absolute; left: 0; color: #1472df; font-weight: 800; }
        .experience-section { padding-top: 30px; padding-bottom: 24px; }
        .timeline { position: relative; margin-left: 8px; }
        .timeline:before { content: ""; position: absolute; left: 0; top: 9px; bottom: 12px; width: 2px; background: #b8d5ff; }
        .job { display: grid; grid-template-columns: 31% 1fr; gap: 28px; position: relative; padding: 0 0 23px 28px; }
        .job:before { content: ""; position: absolute; width: 9px; height: 9px; left: -3px; top: 5px; border-radius: 50%; background: #1976ee; box-shadow: 0 0 0 3px white; }
        .job-meta { padding-right: 18px; }
        .job-meta h3 { margin: 0 0 5px; color: #102f5d; font-size: 14px; }
        .job-meta p { margin: 4px 0; font-size: 12.5px; line-height: 1.5; }
        .job-meta .location { color: #6c82a0; }
        .dates { color: #3675c1; }
        .job-detail { border-left: 1px solid #d6e3f2; padding-left: 22px; }
        .job-detail p { margin: 0 0 8px; font-size: 12.5px; line-height: 1.6; }
        .job-detail ul { padding-left: 16px; list-style: disc; }
        .job-detail li { margin: 3px 0; font-size: 12px; line-height: 1.5; }
        .lower-section { display: grid; grid-template-columns: 1.45fr 1fr; gap: 30px; padding: 30px 5.3%; background: #f1f7fd; border-top: 1px solid #e0ebf7; }
        .tools-panel { padding-right: 26px; border-right: 1px solid #c7d9ee; }
        .tools-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; }
        .tool-card { padding-right: 15px; border-right: 1px solid #d0deed; }
        .tool-card:last-child { border-right: 0; }
        .tool-card h3, .education-panel h3 { color: #15447c; font-size: 12px; margin: 5px 0 9px; }
        .tool-card p, .education-panel p, .education-panel li { font-size: 11.5px; line-height: 1.65; margin: 0 0 7px; overflow-wrap: anywhere; }
        .education-panel ul { padding-left: 17px; list-style: disc; margin-bottom: 12px; }
        .footer { min-height: 72px; display: flex; justify-content: space-between; align-items: center; gap: 20px; padding: 18px 5.3%; background: #0b2a52; color: #fff; font-size: 12px; }
        .footer p { margin: 0; }
        .footer span { margin: 0 8px; color: #8db9f0; }
        .footer a { font-weight: 650; white-space: nowrap; }
        @media (max-width: 900px) {
          .topbar { flex-wrap: wrap; padding-top: 16px; padding-bottom: 16px; gap: 16px; }
          .topbar nav { order: 3; width: 100%; overflow-x: auto; gap: 20px; padding-bottom: 4px; }
          .overview, .lower-section { grid-template-columns: 1fr; }
          .summary, .tools-panel { padding-right: 0; border-right: 0; }
          .competency-list { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 620px) {
          .nav-resume { display: none; }
          .hero { min-height: 390px; }
          .hero-content { padding: 34px 6% 30px; }
          .hero h1 { font-size: 38px; }
          .section, .lower-section { padding: 26px 6%; }
          .competency-list, .tools-grid { grid-template-columns: 1fr; }
          .tool-card { border-right: 0; border-bottom: 1px solid #d0deed; padding-bottom: 12px; }
          .job { grid-template-columns: 1fr; gap: 10px; padding-bottom: 25px; }
          .job-detail { padding-left: 15px; }
          .footer { align-items: flex-start; flex-direction: column; }
        }
      `}</style>
    </main>
  );
}
