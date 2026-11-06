import BorderBeam from "./ui/BorderBeam";

export default function IntelligenceVisual() {
  const layers = [3, 5, 6, 5, 3];
  const nodes = layers.flatMap((count, layer) =>
    Array.from({ length: count }, (_, n) => ({
      x: 65 + layer * 100,
      y: 165 + (n - (count - 1) / 2) * 33,
      layer,
      n,
    })),
  );
  return (
    <div className="intelligence-visual">
      <BorderBeam />
      <div className="visual-top">
        <span>
          <i className="status-dot" /> INTELLIGENCE IN MOTION
        </span>
        <span>EA / 001</span>
      </div>
      <svg
        viewBox="0 0 530 330"
        role="img"
        aria-label="Animated neural network showing information flowing from inputs through hidden layers to outputs"
      >
        <defs>
          <radialGradient id="networkGlow">
            <stop stopColor="#8475ff" stopOpacity=".3" />
            <stop offset="1" stopColor="#8475ff" stopOpacity="0" />
          </radialGradient>
        </defs>
        <ellipse cx="265" cy="165" rx="230" ry="150" fill="url(#networkGlow)" />
        {nodes
          .filter((p) => p.layer < 4)
          .flatMap((p) =>
            nodes
              .filter((q) => q.layer === p.layer + 1)
              .map((q) => (
                <line
                  key={`${p.layer}-${p.n}-${q.n}`}
                  x1={p.x}
                  y1={p.y}
                  x2={q.x}
                  y2={q.y}
                  className="neural-edge"
                  style={{ animationDelay: `${p.layer * 0.35 + q.n * 0.12}s` }}
                />
              )),
          )}
        {nodes.map((p) => (
          <g key={`${p.layer}-${p.n}`}>
            <circle
              cx={p.x}
              cy={p.y}
              r="10"
              fill="#121a2a"
              stroke={p.layer === 4 ? "#80e0cb" : "#a99aff"}
              strokeWidth="1.5"
            />
            <circle
              cx={p.x}
              cy={p.y}
              r="4"
              fill={p.layer === 4 ? "#80e0cb" : "#a99aff"}
              className="neural-node"
              style={{ animationDelay: `${p.layer * 0.4 + p.n * 0.15}s` }}
            />
          </g>
        ))}
        <text x="65" y="303" textAnchor="middle">
          INPUT
        </text>
        <text x="265" y="303" textAnchor="middle">
          LEARNING LAYERS
        </text>
        <text x="465" y="303" textAnchor="middle">
          OUTPUT
        </text>
      </svg>
      <div className="visual-bottom">
        <span>DATA → MODELS → POSSIBILITIES</span>
        <span className="signal-bars">▂ ▄ ▆ █ ▅</span>
      </div>
      <div className="floating-chip chip-one">
        <span>⌘</span> Context-aware LLMs
      </div>
      <div className="floating-chip chip-two">
        <i className="status-dot" /> Built around your data
      </div>
    </div>
  );
}
