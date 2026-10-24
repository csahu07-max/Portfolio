
const impact = [
  {
    value: "[N]+",
    label: "Engineers and leaders",
    detail: "Organization leadership",
  },
  {
    value: "[N]",
    label: "Products or platforms",
    detail: "Built, scaled, or transformed",
  },
  {
    value: "[N]%",
    label: "Delivery improvement",
    detail: "Measured operational outcome",
  },
  {
    value: "$[N]",
    label: "Business impact",
    detail: "Verified savings or value",
  },
];

const caseStudies = [
  {
    number: "01",
    category: "PLATFORM & ARCHITECTURE",
    title: "Modernizing platforms for scale",
    challenge:
      "Legacy systems and growing product demands created constraints on scalability, reliability, and engineering velocity.",
    approach:
      "Established a modernization roadmap, aligned engineering and product stakeholders, and prioritized incremental migration against measurable business outcomes.",
    outcome:
      "[Add verified results: reliability improvement, reduced infrastructure cost, or faster delivery.]",
  },
  {
    number: "02",
    category: "ENGINEERING EFFECTIVENESS",
    title: "Improving delivery and execution",
    challenge:
      "Inconsistent delivery practices, dependencies, and unclear priorities made execution less predictable.",
    approach:
      "Introduced clearer ownership, outcome-oriented planning, engineering metrics, and a regular operating cadence across teams.",
    outcome:
      "[Add verified results: lead-time reduction, improved predictability, or increased release frequency.]",
  },
  {
    number: "03",
    category: "ORGANIZATIONAL LEADERSHIP",
    title: "Scaling teams and technical leadership",
    challenge:
      "Organizational growth required stronger leadership capacity, clearer accountability, and consistent engineering standards.",
    approach:
      "Developed engineering managers, clarified decision rights, strengthened hiring and talent development, and aligned teams around shared priorities.",
    outcome:
      "[Add verified results: organization growth, retention, leadership development, or productivity.]",
  },
];

const principles = [
  {
    title: "Strategy before activity",
    description:
      "Connect engineering investment to customer value, business priorities, and measurable outcomes.",
  },
  {
    title: "Empowered, accountable teams",
    description:
      "Build strong managers, clear ownership, effective collaboration, and healthy engineering culture.",
  },
  {
    title: "Pragmatic technical excellence",
    description:
      "Balance architecture, delivery speed, reliability, security, and long-term maintainability.",
  },
  {
    title: "Outcomes over output",
    description:
      "Use meaningful metrics and feedback loops to improve execution and make better decisions.",
  },
];

async function CurrentYear() {
  "use cache";
  return <>{new Date().getFullYear()}</>;
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f8f8f5] text-[#172b3a]">
      <header className="sticky top-0 z-20 border-b border-slate-200/80 bg-[#f8f8f5]/95 backdrop-blur">
        <nav
          aria-label="Main navigation"
          className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 sm:px-8"
        >
          <a href="#home" className="shrink-0 font-semibold tracking-tight">
            YOUR NAME<span className="text-sky-700">.</span>
          </a>
          <div className="flex gap-4 overflow-x-auto text-sm text-slate-600 sm:gap-6">
            <a className="whitespace-nowrap hover:text-sky-800" href="#impact">
              Impact
            </a>
            <a className="whitespace-nowrap hover:text-sky-800" href="#work">
              Case studies
            </a>
            <a className="whitespace-nowrap hover:text-sky-800" href="#leadership">
              Leadership
            </a>
            <a className="whitespace-nowrap hover:text-sky-800" href="#contact">
              Contact
            </a>
          </div>
        </nav>
      </header>

      <section
        id="home"
        className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28"
      >
        <p className="mb-6 text-xs font-semibold tracking-[0.2em] text-sky-800">
          SOFTWARE ENGINEERING LEADERSHIP
        </p>
        <h1 className="max-w-4xl text-4xl font-semibold leading-[1.12] tracking-tight sm:text-6xl lg:text-7xl">
          Building engineering organizations that turn strategy into results.
        </h1>
        <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600">
          I lead software engineering teams through complex technical
          challenges, platform evolution, and organizational growth.
          My focus is building strong leaders, scaling reliable systems,
          and delivering outcomes that matter to the business.
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <a
            href="#work"
            className="rounded-md bg-[#17394b] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#24546b]"
          >
            Explore my impact <span aria-hidden="true">↗</span>
          </a>
          <a
            href="/resume.pdf"
            className="rounded-md border border-slate-300 px-5 py-3 text-sm font-medium transition hover:bg-white"
          >
            Download résumé ↓
          </a>
        </div>
        <div className="mt-12 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-500">
          <span>Engineering strategy</span>
          <span>Organizational scale</span>
          <span>Platform modernization</span>
          <span>Operational excellence</span>
        </div>
      </section>

      <section
        id="impact"
        className="border-y border-slate-200 bg-white"
      >
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
          <p className="text-xs font-semibold tracking-[0.2em] text-sky-800">
            LEADERSHIP BY THE NUMBERS
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            Impact that can be measured.
          </h2>
          <p className="mt-4 max-w-2xl leading-7 text-slate-600">
            A snapshot of organizational scope, technical scale, and
            business outcomes across my leadership experience.
          </p>
          <div className="mt-9 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {impact.map((item) => (
              <article
                key={item.label}
                className="rounded-lg border border-slate-200 bg-[#f8f8f5] p-5"
              >
                <p className="text-3xl font-semibold tracking-tight text-[#17394b]">
                  {item.value}
                </p>
                <h3 className="mt-3 text-sm font-semibold">{item.label}</h3>
                <p className="mt-1 text-xs leading-5 text-slate-500">
                  {item.detail}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="work"
        className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24"
      >
        <p className="text-xs font-semibold tracking-[0.2em] text-sky-800">
          SELECTED LEADERSHIP WORK
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
          Complex challenges. Clear outcomes.
        </h2>
        <p className="mt-4 max-w-2xl leading-7 text-slate-600">
          Examples of the types of strategic initiatives to feature.
          Replace these illustrative scenarios with real projects from
          your career.
        </p>
        <div className="mt-10 space-y-5">
          {caseStudies.map((study) => (
            <article
              key={study.number}
              className="grid gap-6 rounded-xl border border-slate-200 bg-white p-6 sm:p-8 lg:grid-cols-[100px_1fr]"
            >
              <p className="text-3xl font-light text-sky-800">
                {study.number}
              </p>
              <div>
                <p className="text-xs font-semibold tracking-[0.15em] text-sky-800">
                  {study.category}
                </p>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight">
                  {study.title}
                </h3>
                <div className="mt-6 grid gap-5 md:grid-cols-2">
                  <div>
                    <h4 className="text-sm font-semibold">The challenge</h4>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {study.challenge}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold">Leadership approach</h4>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {study.approach}
                    </p>
                  </div>
                </div>
                <div className="mt-6 border-l-2 border-sky-700 pl-4">
                  <h4 className="text-sm font-semibold">Outcome</h4>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {study.outcome}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="leadership" className="bg-[#17394b] text-white">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
          <p className="text-xs font-semibold tracking-[0.2em] text-sky-200">
            LEADERSHIP PHILOSOPHY
          </p>
          <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">
            Strong teams. Sound decisions. Lasting impact.
          </h2>
          <p className="mt-5 max-w-2xl leading-7 text-slate-300">
            My role is to create clarity, develop leaders, make deliberate
            technology investments, and give teams the context and autonomy
            to deliver exceptional work.
          </p>
          <div className="mt-10 grid gap-7 sm:grid-cols-2">
            {principles.map((principle, index) => (
              <article key={principle.title} className="border-t border-white/20 pt-5">
                <p className="text-sm text-sky-200">0{index + 1}</p>
                <h3 className="mt-3 text-xl font-semibold">
                  {principle.title}
                </h3>
                <p className="mt-3 max-w-md text-sm leading-6 text-slate-300">
                  {principle.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <p className="text-xs font-semibold tracking-[0.2em] text-sky-800">
          CAREER EXPERIENCE
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight">
          A track record of engineering leadership.
        </h2>
        <p className="mt-4 max-w-2xl leading-7 text-slate-600">
          Summarize your most relevant roles, the scope of your
          responsibilities, and two or three accomplishments per position.
        </p>
        <div className="mt-8 space-y-0">
          <article className="border-l border-slate-300 py-2 pl-6">
            <p className="text-xs font-semibold tracking-wider text-sky-800">
              [YEAR–PRESENT]
            </p>
            <h3 className="mt-2 text-lg font-semibold">
              [Current or Most Recent Title]
            </h3>
            <p className="mt-1 text-sm text-slate-500">
              [Company] · [Organization scope]
            </p>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">
              [Describe your mandate, leadership scope, strategic initiatives,
              and most significant business results.]
            </p>
          </article>
          <article className="border-l border-slate-300 py-6 pl-6">
            <p className="text-xs font-semibold tracking-wider text-sky-800">
              [YEAR–YEAR]
            </p>
            <h3 className="mt-2 text-lg font-semibold">
              [Previous Leadership Title]
            </h3>
            <p className="mt-1 text-sm text-slate-500">
              [Company] · [Organization scope]
            </p>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">
              [Describe a meaningful transformation, team achievement,
              product outcome, or platform milestone.]
            </p>
          </article>
        </div>
      </section>

      <section id="contact" className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <p className="text-xs font-semibold tracking-[0.2em] text-sky-800">
            LET&apos;S CONNECT
          </p>
          <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
            Building what comes next starts with the right conversation.
          </h2>
          <p className="mt-4 max-w-xl leading-7 text-slate-600">
            I welcome conversations about engineering leadership,
            organizational growth, and opportunities to create meaningful
            technology outcomes.
          </p>
          <div className="mt-7 flex flex-wrap gap-5 text-sm font-medium">
            <a
              className="text-sky-800 underline underline-offset-4"
              href="mailto:YOUR_EMAIL@example.com"
            >
              Email me ↗
            </a>
            <a
              className="text-sky-800 underline underline-offset-4"
              href="https://www.linkedin.com/in/YOUR_PROFILE/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>
      </section>

      <footer className="mx-auto flex max-w-6xl flex-wrap justify-between gap-3 px-5 py-6 text-xs text-slate-500 sm:px-8">
        <p>© <CurrentYear /> YOUR NAME</p>
        <p>Engineering leadership · Technology strategy · Business impact</p>
      </footer>
    </main>
  );
}
