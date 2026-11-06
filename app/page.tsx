import Link from "next/link";
import IntelligenceVisual from "@/components/IntelligenceVisual";
import ServiceLab from "@/components/ServiceLab";
import Products from "@/components/Products";
const services = [
  [
    "01",
    "Software development",
    "Thoughtful software. Built to work.",
    "Web applications, internal tools, APIs, and cloud platforms. From the first prototype to the systems your business depends on.",
    [
      "Full-stack engineering",
      "Cloud & API integration",
      "Product modernization",
    ],
    "⌘",
  ],
  [
    "02",
    "AI & LLM solutions",
    "Make intelligence part of the workflow.",
    "Custom copilots, document intelligence, and AI agents that help people find answers and move work forward.",
    [
      "RAG & semantic search",
      "LLM integration",
      "Agent workflows & evaluation",
    ],
    "✳",
  ],
  [
    "03",
    "Machine learning & RL",
    "Learn from data. Improve decisions.",
    "Predictive models, computer vision, and simulation-led optimization, built around a clearly defined business problem.",
    ["Predictive modeling", "Computer vision & NLP", "Reinforcement learning"],
    "◈",
  ],
  [
    "04",
    "Data analytics & engineering",
    "From raw data to clear direction.",
    "Reliable pipelines, useful dashboards, and analytics foundations that make your business easier to understand.",
    [
      "Data pipelines & warehouses",
      "Business intelligence",
      "Reporting automation",
    ],
    "▥",
  ],
  [
    "05",
    "Technology consulting",
    "Clarity before the next big decision.",
    "Practical guidance for technology strategy, architecture, digital transformation, and AI adoption. Align your systems and investments with your business goals.",
    [
      "IT strategy & roadmaps",
      "Architecture & system reviews",
      "AI readiness & adoption",
    ],
    "◎",
  ],
  [
    "06",
    "Database & data administration",
    "Keep your data organized and dependable.",
    "Database setup, administration, migrations, and performance tuning to keep business data accessible, well managed, and ready for everyday use.",
    [
      "Database administration & tuning",
      "Backup & recovery planning",
      "Data migration & access management",
    ],
    "▤",
  ],
  [
    "07",
    "IT support & managed services",
    "Support for the systems you rely on.",
    "Day-to-day technical support and ongoing care for applications, cloud environments, workplace tools, and IT infrastructure. Keep your team focused on its work.",
    [
      "User support & troubleshooting",
      "Cloud & infrastructure maintenance",
      "Monitoring, updates & system administration",
    ],
    "⚙",
  ],
];
export default function Home() {
  return (
    <main id="main-content">
      <section className="hero section-wrap">
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="status-dot" /> SOFTWARE. INTELLIGENCE. IMPACT.
          </div>
          <h1>
            Build what’s next.
            <br />
            <span className="serif-accent">Make it intelligent.</span>
          </h1>
          <p>
            We build software, AI systems, and data platforms that turn complex
            challenges into practical possibilities.
          </p>
          <div className="button-row">
            <Link className="primary-button" href="/contact">
              Let’s build together <span>↗</span>
            </Link>
            <a className="secondary-button" href="#explore">
              Explore our capabilities ↓
            </a>
          </div>
          <div className="hero-footnote">
            <span>From idea to implementation.</span>
            <span>Built around your business.</span>
          </div>
        </div>
        <IntelligenceVisual />
      </section>
      <div className="capability-strip">
        <div className="section-wrap">
          <span>ENGINEERED FOR WHAT’S NEXT</span>
          <div>
            Software engineering <i>✳</i> Generative AI <i>✳</i> Machine
            learning <i>✳</i> Data analytics
          </div>
        </div>
      </div>
      <Products />
      <section
        id="services"
        className="section-wrap section-space anchor-offset"
      >
        <div className="section-heading">
          <div>
            <span className="eyebrow">WHAT WE DO</span>
            <h2>
              Good ideas deserve
              <br />
              <span className="serif-accent">great engineering.</span>
            </h2>
          </div>
          <p>
            From consulting and development to data administration and IT
            support. One team to help you build, manage, and improve your
            technology.
          </p>
        </div>
        <div className="service-grid">
          {services.map(([n, name, title, description, tags, icon]) => (
            <article key={n as string} className="service-card">
              <div className="service-card-top">
                <span className="service-icon" aria-hidden="true">
                  {icon}
                </span>
                <span>/{n}</span>
              </div>
              <span className="service-name">{name}</span>
              <h3>{title}</h3>
              <p>{description}</p>
              <ul>
                {(tags as string[]).map((t) => (
                  <li key={t}>
                    <span>↗</span>
                    {t}
                  </li>
                ))}
              </ul>
              <Link
                href={`/contact/?service=${encodeURIComponent(name as string)}`}
                aria-label={`Discuss ${name}`}
                className="card-link"
              >
                Explore possibilities ↗
              </Link>
            </article>
          ))}
        </div>
      </section>
      <section id="explore" className="explore-section anchor-offset">
        <div className="section-wrap section-space">
          <div className="section-heading">
            <div>
              <span className="eyebrow">LESS ABSTRACT. MORE INTERACTIVE.</span>
              <h2>
                See the possibilities.
                <br />
                <span className="serif-accent">Try them yourself.</span>
              </h2>
            </div>
            <p>
              A small window into what we can build. Explore interactive
              examples of intelligent software in action.
            </p>
          </div>
          <ServiceLab />
        </div>
      </section>
      <section
        id="approach"
        className="section-wrap section-space anchor-offset"
      >
        <div className="section-heading">
          <div>
            <span className="eyebrow">HOW WE WORK</span>
            <h2>
              From a good question
              <br />
              to a working solution.
            </h2>
          </div>
          <p>
            Start with the problem. Choose the right technology. Keep the people
            using it at the center.
          </p>
        </div>
        <div className="process-grid">
          {[
            [
              "01",
              "Understand",
              "Map your goals, users, data, and constraints. Define what success should look like.",
            ],
            [
              "02",
              "Make it tangible",
              "Prototype the experience and validate the riskiest assumptions early.",
            ],
            [
              "03",
              "Build & integrate",
              "Develop, test, and connect the solution to your existing tools and systems.",
            ],
            [
              "04",
              "Measure & evolve",
              "Monitor what matters, gather feedback, and improve with each iteration.",
            ],
          ].map(([n, t, d]) => (
            <article key={n}>
              <span>{n}</span>
              <h3>{t}</h3>
              <p>{d}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="cta-section">
        <div className="section-wrap">
          <span className="eyebrow">YOUR NEXT CHAPTER</span>
          <h2>
            Have a challenge in mind?
            <br />
            <span className="serif-accent">Let’s make it work.</span>
          </h2>
          <p>
            A new product. A smarter workflow. A clearer view of your data.
            <br />
            Tell us what you’re working on.
          </p>
          <Link href="/contact" className="primary-button">
            Start a conversation ↗
          </Link>
        </div>
      </section>
    </main>
  );
}
