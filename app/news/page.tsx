import type { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = {
  title: "Insights",
  description:
    "Explore how software engineering, AI, machine learning, and data analytics come together.",
};
export default function Insights() {
  return (
    <main id="main-content" className="section-wrap page-hero">
      <span className="eyebrow">IDEAS INTO PRACTICE</span>
      <h1>
        A closer look at
        <br />
        <span className="serif-accent">what’s possible.</span>
      </h1>
      <p className="page-intro">
        A few starting points for thinking about your next software, AI, or data
        project.
      </p>
      <div className="insight-list">
        {[
          [
            "AI & LLMS",
            "Connect language models to your business context",
            "Retrieval-augmented generation brings relevant documents into an LLM workflow. Useful implementations also need source quality, permission checks, and a way to evaluate the answers.",
          ],
          [
            "MACHINE LEARNING",
            "Start with a decision worth improving",
            "A forecast or classification is useful when it changes what someone can do next. Begin with the decision, the available data, and a baseline you can measure against.",
          ],
          [
            "DATA ANALYTICS",
            "Make the foundations as useful as the dashboard",
            "Consistent definitions and reliable pipelines help teams trust what they see. A good analytics project connects source data, shared metrics, and the questions people ask every day.",
          ],
          [
            "REINFORCEMENT LEARNING",
            "Explore decisions safely in simulation",
            "Sequential problems need more than a single prediction. Simulations let teams explore policies and trade-offs before considering a real-world deployment.",
          ],
        ].map(([category, title, body]) => (
          <article key={title}>
            <span className="eyebrow">{category}</span>
            <h2>{title}</h2>
            <p>{body}</p>
            <Link href="/#explore" className="text-link">
              Explore an interactive example ↗
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}
