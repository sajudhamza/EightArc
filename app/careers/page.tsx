import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Careers",
  description:
    "Connect with EightArc about software engineering, AI, machine learning, and data opportunities.",
};
export default function Careers() {
  return (
    <main id="main-content" className="section-wrap page-hero">
      <span className="eyebrow">CAREERS</span>
      <h1>
        Curious minds.
        <br />
        <span className="serif-accent">Useful technology.</span>
      </h1>
      <p className="page-intro">
        Interested in building software, exploring intelligent systems, or
        making data easier to use? We’d like to hear what you’re working on.
      </p>
      <div className="service-card" style={{ maxWidth: 700, marginTop: 40 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700 }}>Start a conversation</h2>
        <p>
          There are no published openings here at the moment. Share your
          background and the kind of work you’re interested in.
        </p>
        <a className="text-link" href="mailto:careers@eightarc.com">
          careers@eightarc.com ↗
        </a>
      </div>
    </main>
  );
}
