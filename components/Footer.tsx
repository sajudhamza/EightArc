import Link from "next/link";
import { Logo } from "./Logo";
export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="section-wrap">
        <div className="footer-grid">
          <div>
            <Link href="/" className="footer-brand">
              <Logo size="footer" />
              <strong>EightArc</strong>
            </Link>
            <p>Software. Intelligence. Possibility.</p>
            <a href="mailto:hello@eightarc.com">hello@eightarc.com ↗</a>
          </div>
          <div>
            <h2>EXPERTISE</h2>
            <Link href="/#services">Software development</Link>
            <Link href="/#explore">AI & LLM solutions</Link>
            <Link href="/#explore">Machine learning & RL</Link>
            <Link href="/#explore">Data analytics</Link>
            <Link href="/#services">Technology consulting</Link>
            <Link href="/#services">Database & data administration</Link>
            <Link href="/#services">IT support & managed services</Link>
          </div>
          <div>
            <h2>COMPANY</h2>
            <Link href="/about">About us</Link>
            <Link href="/#approach">Our approach</Link>
            <Link href="/news">Insights</Link>
            <Link href="/careers">Careers</Link>
            <Link href="/contact">Contact</Link>
          </div>
          <div>
            <h2>OUR PRODUCTS</h2>
            <a
              href="https://www.permflowai.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              PermFlowAI ↗
            </a>
            <a
              href="https://lawonsight.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              LawOnSight ↗
            </a>
            <p>
              Bring your problem.
              <br />
              We’ll bring the engineering.
            </p>
            <Link href="/contact" className="text-link">
              Start a project ↗
            </Link>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} EightArc Inc.</span>
          <div>
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
            <span>Built for what’s next.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
