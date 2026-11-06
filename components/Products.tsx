const products = [
  {
    name: "PermFlowAI",
    audience: "FOR IMMIGRATION LAW FIRMS",
    url: "https://www.permflowai.com",
    title: "A clearer path from recruitment to filing.",
    description:
      "PERM labor-certification workflow software that brings recruitment timelines, evidence, and filing readiness together, with attorney review built into the process.",
    features: [
      "Recruitment timelines",
      "Evidence organization",
      "Attorney review workflows",
    ],
    domain: "permflowai.com",
  },
  {
    name: "LawOnSight",
    audience: "FOR INDIVIDUALS",
    url: "https://lawonsight.com",
    title: "Legal answers. The right next step.",
    description:
      "A place to explore legal questions and connect with attorneys across immigration, personal injury, family law, criminal defense, business law, and more.",
    features: [
      "Legal questions & answers",
      "Attorney matching",
      "Help across practice areas",
    ],
    domain: "lawonsight.com",
  },
];
export default function Products() {
  return (
    <section id="products" className="products-section anchor-offset">
      <div className="section-wrap section-space">
        <div className="section-heading">
          <div>
            <span className="eyebrow">OUR PRODUCTS</span>
            <h2>
              Ideas we’ve made real.
              <br />
              <span className="serif-accent">Built by EightArc.</span>
            </h2>
          </div>
          <p>
            Alongside our services, we build focused products that make complex
            legal workflows easier to navigate.
          </p>
        </div>
        <div className="product-grid">
          {products.map((product, index) => (
            <article
              className={`product-card ${index === 0 ? "product-perm" : "product-law"}`}
              key={product.name}
            >
              <div
                className="product-illustration"
                role="img"
                aria-label={
                  index === 0
                    ? "Illustration of a PERM workflow with recruitment, evidence, and attorney review stages"
                    : "Illustration of a legal question leading to practice area selection and attorney matching"
                }
              >
                <div className="product-visual-label">
                  <span>
                    {index === 0 ? "PERM WORKSPACE" : "LEGAL HELP, CONNECTED"}
                  </span>
                  <span>ILLUSTRATIVE VIEW</span>
                </div>
                {index === 0 ? (
                  <div className="workflow-preview">
                    <div className="workflow-sidebar">
                      <strong>
                        P<span>PermFlowAI</span>
                      </strong>
                      <span>Overview</span>
                      <span>Recruitment</span>
                      <span>Evidence</span>
                      <span>Review</span>
                    </div>
                    <div className="workflow-main">
                      <div className="workflow-title">
                        Case workspace <span>Sample case</span>
                      </div>
                      {[
                        "Recruitment timeline",
                        "Evidence checklist",
                        "Attorney review",
                      ].map((text, i) => (
                        <div className="workflow-step" key={text}>
                          <span className="workflow-step-number">0{i + 1}</span>
                          <div>
                            <strong>{text}</strong>
                            <div className="workflow-progress">
                              <span style={{ width: `${90 - i * 23}%` }} />
                            </div>
                          </div>
                          <span className="workflow-check">
                            {i === 2 ? "→" : "✓"}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="legal-preview">
                    <div className="legal-question">
                      <span className="legal-mark">L</span>
                      <div>
                        <strong>Where would you like to start?</strong>
                        <span>Find a path that fits your legal question.</span>
                      </div>
                    </div>
                    <div className="legal-topics">
                      {[
                        "Immigration",
                        "Family law",
                        "Business law",
                        "Personal injury",
                      ].map((t) => (
                        <span key={t}>{t} ↗</span>
                      ))}
                    </div>
                    <div className="legal-match">
                      <span className="status-dot" />
                      <span>Questions → Guidance → Attorney connection</span>
                    </div>
                  </div>
                )}
              </div>
              <div className="product-copy">
                <span className="eyebrow">{product.audience}</span>
                <h3>{product.name}</h3>
                <h4>{product.title}</h4>
                <p>{product.description}</p>
                <div className="product-features">
                  {product.features.map((f) => (
                    <span key={f}>✓ {f}</span>
                  ))}
                </div>
                <a
                  className="text-link"
                  href={product.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Explore {product.domain} ↗
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
