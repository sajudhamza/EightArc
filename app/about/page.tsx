import type { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = {
  title: "About",
  description:
    "EightArc brings software engineering, artificial intelligence, and data analytics together to solve practical business problems.",
};
export default function About() {
  return (
    <main id="main-content" className="section-wrap page-hero">
      <span className="eyebrow">ABOUT EIGHTARC</span>
      <h1>
        Thoughtful engineering.
        <br />
        <span className="serif-accent">Practical intelligence.</span>
      </h1>
      <p className="page-intro">
        We bring software development, artificial intelligence, and data
        analytics together to help businesses turn ideas into working systems.
      </p>
      <section className="about-products">
        <h2>Our own products. The same engineering mindset.</h2>
        <p>
          We also build PermFlowAI for PERM recruitment and filing workflows,
          and LawOnSight for legal questions and attorney connections.
        </p>
        <Link href="/#products" className="text-link">
          Explore our products ↗
        </Link>
      </section>
      <div className="info-grid">
        <section>
          <h2>Technology with a purpose.</h2>
          <p>
            A useful solution starts with a clear understanding of the problem.
            We focus on the workflows, people, and decisions behind the
            technology, then choose the tools that fit.
          </p>
        </section>
        <section>
          <h2>Built to connect.</h2>
          <p>
            Software, models, and data work better together. Our services span
            application development, LLM integration, machine learning,
            simulation, and analytics, so the pieces can become one coherent
            solution.
          </p>
        </section>
        <section>
          <h2>Make it tangible early.</h2>
          <p>
            Prototypes and small, testable releases help turn assumptions into
            evidence. We work toward clear requirements, meaningful evaluation,
            and software that people can actually use.
          </p>
        </section>
        <section>
          <h2>Keep improving.</h2>
          <p>
            A launch is a starting point. We plan for monitoring,
            maintainability, and iteration so your solution can evolve with your
            business.
          </p>
        </section>
      </div>
      <Link
        className="primary-button"
        href="/contact"
        style={{ marginTop: 40 }}
      >
        Tell us what’s next ↗
      </Link>
    </main>
  );
}
