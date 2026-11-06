import type { Metadata } from "next";
import ProjectInquiry from "@/components/ProjectInquiry";
export const metadata: Metadata = {
  title: "Start a project",
  description:
    "Talk to EightArc about software development, AI and machine learning, or data analytics.",
};
export default function Contact() {
  return (
    <main id="main-content" className="section-wrap page-hero">
      <div className="contact-layout">
        <div>
          <span className="eyebrow">LET’S BUILD SOMETHING USEFUL</span>
          <h1>
            Your next idea.
            <br />
            <span className="serif-accent">Our next conversation.</span>
          </h1>
          <p className="page-intro">
            Tell us what you’re working on, where you’re stuck, or what you’d
            like to make possible.
          </p>
          <div className="contact-links">
            <div>
              <span className="eyebrow">EMAIL</span>
              <br />
              <a href="mailto:hello@eightarc.com">hello@eightarc.com ↗</a>
            </div>
            <div style={{ marginTop: 20 }}>
              <span className="eyebrow">PHONE</span>
              <br />
              <a href="tel:+19292602471">(929) 260-2471</a>
            </div>
            <div style={{ marginTop: 20 }}>
              <span className="eyebrow">ADDRESS</span>
              <address style={{ fontStyle: "normal", color: "var(--muted)" }}>
                971 US Highway 202N, Ste R<br />
                Branchburg, NJ 08876
              </address>
            </div>
          </div>
          <p className="page-intro" style={{ fontSize: 14, marginTop: 30 }}>
            From software and AI to consulting, data administration, and ongoing
            IT support, we’ll help you find a practical starting point.
          </p>
        </div>
        <ProjectInquiry />
      </div>
    </main>
  );
}
