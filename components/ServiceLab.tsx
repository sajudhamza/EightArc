"use client";
import { useState } from "react";
const modes = [
  "LLM applications",
  "Machine learning",
  "Reinforcement learning",
  "Data analytics",
] as const;
const docs = [
  {
    name: "Product handbook",
    text: "The sample product supports single sign-on, role-based access, and audit logs.",
    words: ["security", "access", "login", "product", "sign", "audit"],
  },
  {
    name: "Delivery playbook",
    text: "Our example delivery plan moves through discovery, prototyping, implementation, and ongoing iteration.",
    words: ["delivery", "build", "project", "timeline", "process", "plan"],
  },
  {
    name: "Data platform guide",
    text: "The sample data pipeline validates incoming records, transforms them into a shared model, and refreshes reporting tables.",
    words: ["data", "pipeline", "analytics", "report", "records", "dashboard"],
  },
];
export default function ServiceLab() {
  const [mode, setMode] = useState(0);
  const [question, setQuestion] = useState("How does the data pipeline work?");
  const [answer, setAnswer] = useState<number | null>(null);
  const [queried, setQueried] = useState(false);
  const [horizon, setHorizon] = useState(6);
  const [episode, setEpisode] = useState(0);
  const [metric, setMetric] = useState("Revenue");
  const path =
    episode % 2 === 0
      ? [20, 15, 10, 5, 0, 1, 2, 3, 4]
      : [20, 21, 22, 17, 12, 7, 2, 3, 4];
  function retrieve() {
    const scores = docs.map((d) =>
      d.words.reduce(
        (s, w) => s + (question.toLowerCase().includes(w) ? 1 : 0),
        0,
      ),
    );
    const best = Math.max(...scores);
    setAnswer(best > 0 ? scores.indexOf(best) : null);
    setQueried(true);
  }
  return (
    <div className="lab-shell">
      <div
        className="lab-tabs"
        role="tablist"
        aria-label="Explore service examples"
      >
        {modes.map((m, i) => (
          <button
            key={m}
            id={`tab-${i}`}
            role="tab"
            aria-selected={mode === i}
            aria-controls="lab-panel"
            tabIndex={mode === i ? 0 : -1}
            onKeyDown={(e) => {
              if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
                e.preventDefault();
                const next = (i + (e.key === "ArrowRight" ? 1 : 3)) % 4;
                setMode(next);
                document.getElementById(`tab-${next}`)?.focus();
              }
            }}
            onClick={() => setMode(i)}
          >
            {m}
          </button>
        ))}
      </div>
      <div
        id="lab-panel"
        role="tabpanel"
        aria-labelledby={`tab-${mode}`}
        className="lab-panel"
      >
        <div className="lab-copy">
          <span className="eyebrow">EXPLORE / 0{mode + 1}</span>
          <h3>
            {
              [
                "Your knowledge. A more useful interface.",
                "See patterns. Plan what comes next.",
                "Learn a better sequence of decisions.",
                "Turn scattered data into a shared view.",
              ][mode]
            }
          </h3>
          <p>
            {
              [
                "We build document search, retrieval-augmented generation, copilots, and agent workflows that connect language models to your business context.",
                "Forecast demand, detect anomalies, classify information, and bring predictive models into the software your team already uses.",
                "Explore simulation-based decision systems for scheduling, resource allocation, and sequential optimization.",
                "Connect your sources, build reliable pipelines, and give teams dashboards that answer useful business questions.",
              ][mode]
            }
          </p>
          <div className="tag-row">
            {[
              ["RAG", "Agents", "Evaluation"],
              ["Forecasting", "MLOps", "Computer vision"],
              ["Simulation", "Policies", "Optimization"],
              ["ETL / ELT", "BI dashboards", "Data modeling"],
            ][mode].map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
          <a
            className="text-link"
            href={`/contact/?service=${["LLM applications", "Machine learning", "Reinforcement learning", "Data analytics"][mode].replaceAll(" ", "%20")}`}
          >
            Discuss a similar project ↗
          </a>
        </div>
        <div className="demo-window">
          <div className="window-bar">
            <div>
              <b />
              <b />
              <b />
            </div>
            <span>
              {
                [
                  "knowledge.search",
                  "forecast.studio",
                  "policy.sandbox",
                  "analytics.overview",
                ][mode]
              }
            </span>
            <span className="demo-badge">SAMPLE DATA</span>
          </div>
          {mode === 0 && (
            <div className="demo-content">
              <div className="source-row">
                {docs.map((d) => (
                  <span key={d.name}>▤ {d.name}</span>
                ))}
              </div>
              <label htmlFor="question">Ask the sample knowledge base</label>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  retrieve();
                }}
              >
                <div className="query-row">
                  <input
                    id="question"
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    required
                    maxLength={200}
                  />
                  <button
                    aria-label="Search knowledge base"
                    className="small-button"
                  >
                    ↗
                  </button>
                </div>
              </form>
              <div className="answer-box" aria-live="polite">
                <span className="tiny-label">RETRIEVED CONTEXT</span>
                <p>
                  {!queried
                    ? "Try asking about data, security, or the delivery process."
                    : answer === null
                      ? "No matching document found. Try “data pipeline”, “security”, or “delivery plan”."
                      : docs[answer].text}
                </p>
                {answer !== null && <small>Source: {docs[answer].name}</small>}
              </div>
              <p className="demo-note">
                Interactive keyword retrieval demo. No live LLM is connected.
              </p>
            </div>
          )}
          {mode === 1 && (
            <div className="demo-content">
              <div className="chart-heading">
                <span>Demand forecast</span>
                <span className="chart-key">
                  ● Historical <em>● Projected</em>
                </span>
              </div>
              <svg
                viewBox="0 0 440 200"
                role="img"
                aria-label={`Sample demand series with a ${horizon} month illustrative projection`}
              >
                <defs>
                  <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
                    <stop stopColor="#8779ef" stopOpacity=".25" />
                    <stop offset="1" stopColor="#8779ef" stopOpacity="0" />
                  </linearGradient>
                </defs>
                {[40, 80, 120, 160].map((y) => (
                  <line
                    key={y}
                    x1="20"
                    x2="420"
                    y1={y}
                    y2={y}
                    stroke="#e7e8f0"
                  />
                ))}
                <path
                  d="M20 153 L55 144 L90 151 L125 117 L160 126 L195 92 L230 99 L265 75 L265 180 L20 180Z"
                  fill="url(#chartFill)"
                />
                <polyline
                  points="20,153 55,144 90,151 125,117 160,126 195,92 230,99 265,75"
                  fill="none"
                  stroke="#6456c9"
                  strokeWidth="3"
                />
                <path
                  d={`M265 75 L310 ${70 - horizon * 2} L360 ${65 - horizon * 3} L415 ${60 - horizon * 4}`}
                  fill="none"
                  stroke="#18816f"
                  strokeWidth="3"
                  strokeDasharray="6 5"
                />
                <text x="20" y="198">
                  HISTORICAL
                </text>
                <text x="310" y="198">
                  PROJECTION
                </text>
              </svg>
              <label htmlFor="horizon">
                Forecast horizon <strong>{horizon} months</strong>
              </label>
              <input
                id="horizon"
                type="range"
                min="1"
                max="12"
                value={horizon}
                onChange={(e) => setHorizon(Number(e.target.value))}
              />
              <p className="demo-note">
                Illustrative projection; no trained forecasting model.
              </p>
            </div>
          )}
          {mode === 2 && (
            <div className="demo-content">
              <div className="chart-heading">
                <span>Route exploration</span>
                <span className="demo-badge">EPISODE {episode + 1}</span>
              </div>
              <div
                className="rl-grid"
                role="img"
                aria-label="Five by five route simulation from start at bottom left to goal at top right, avoiding obstacles"
              >
                {Array.from({ length: 25 }, (_, i) => (
                  <div
                    key={i}
                    className={`${[6, 8, 11, 13, 16, 18].includes(i) ? "obstacle" : ""} ${path.includes(i) ? "route-cell" : ""}`}
                    style={{ animationDelay: `${path.indexOf(i) * 0.1}s` }}
                  >
                    {i === 20
                      ? "S"
                      : i === 4
                        ? "◎"
                        : path.includes(i)
                          ? "·"
                          : ""}
                  </div>
                ))}
              </div>
              <div className="simulation-controls">
                <span>Start → explore → goal</span>
                <button
                  className="small-button"
                  onClick={() => setEpisode((e) => e + 1)}
                >
                  Explore another route ↻
                </button>
              </div>
              <p className="demo-note">
                Two illustrative policies. This is a route visualization, not RL
                training.
              </p>
            </div>
          )}
          {mode === 3 && (
            <div className="demo-content">
              <div className="chart-heading">
                <label htmlFor="metric">Business overview</label>
                <select
                  id="metric"
                  value={metric}
                  onChange={(e) => setMetric(e.target.value)}
                >
                  <option>Revenue</option>
                  <option>Orders</option>
                  <option>Active users</option>
                </select>
              </div>
              <div className="analytics-value">
                {metric === "Revenue"
                  ? "$128,400"
                  : metric === "Orders"
                    ? "2,840"
                    : "8,620"}
                <span>Illustrative monthly {metric.toLowerCase()}</span>
              </div>
              <div
                className="bar-chart"
                role="img"
                aria-label={`Six months of illustrative ${metric.toLowerCase()} data`}
              >
                {[42, 65, 53, 76, 68, 94].map((v, i) => (
                  <div key={`${metric}-${i}`}>
                    <span
                      style={{
                        height: `${v - (metric === "Orders" ? i * 3 : metric === "Active users" ? 10 : 0)}%`,
                        animationDelay: `${i * 0.08}s`,
                      }}
                    />
                    <small>
                      {["May", "Jun", "Jul", "Aug", "Sep", "Oct"][i]}
                    </small>
                  </div>
                ))}
              </div>
              <p className="demo-note">
                Sample dashboard, with fictional values and no connected data
                sources.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
