import Link from 'next/link';

function ScreenshotPlaceholder({ variant, label }: { variant: 'light' | 'dark'; label: string }) {
  const id = variant === 'light' ? 'stripeA' : 'stripeB';
  const bg = variant === 'light' ? ['#eef0fb', '#e5e8f8'] : ['#1f2029', '#24252f'];
  const text = variant === 'light' ? '#575a70' : '#9a9cb0';
  const border = variant === 'light' ? 'border-line' : 'border-dark-border';
  return (
    <svg viewBox="0 0 480 360" className={`w-full rounded-[14px] border ${border}`} role="img" aria-label={label}>
      <defs>
        <pattern id={id} width="10" height="10" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <rect width="10" height="10" fill={bg[0]} />
          <rect width="5" height="10" fill={bg[1]} />
        </pattern>
      </defs>
      <rect width="480" height="360" fill={`url(#${id})`} />
      <text x="240" y="184" textAnchor="middle" fontFamily="monospace" fontSize="14" fill={text}>
        [ {label} ]
      </text>
    </svg>
  );
}

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="max-w-content mx-auto px-8 max-[720px]:px-5 pt-[116px] pb-24 max-[880px]:pt-20 max-[880px]:pb-16">
        <div className="max-w-[820px]">
          <h1 className="text-[68px] max-[880px]:text-[40px] leading-[1.02] tracking-[-0.035em] font-black m-0 mb-[26px]">
            The law belongs to everyone.{' '}
            <span className="font-serif font-medium italic text-indigo">Our software proves it.</span>
          </h1>
          <p className="text-xl leading-relaxed text-secondary m-0 mb-[38px] max-w-[600px] [text-wrap:pretty]">
            EightArc builds legal technology that puts real legal power in more hands, whether
            you&apos;re one person with a question or a legal team with a hundred filings.
          </p>
          <div className="flex gap-3.5 flex-wrap">
            <Link
              href="/#products"
              className="bg-indigo text-white px-7 py-3.5 rounded-[9px] font-bold text-base hover:bg-indigo-hover transition-colors duration-150"
            >
              See our products
            </Link>
            <Link
              href="/about"
              className="border-[1.5px] border-outline text-ink px-7 py-3.5 rounded-[9px] font-bold text-base hover:border-indigo hover:text-indigo transition-colors duration-150"
            >
              Our mission
            </Link>
          </div>
        </div>
      </section>

      {/* LawOnSight */}
      <section id="products" className="anchor-offset border-t border-line bg-white">
        <div className="max-w-content mx-auto px-8 max-[720px]:px-5 py-24 max-[880px]:py-16 grid grid-cols-2 max-[880px]:grid-cols-1 gap-[72px] max-[880px]:gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 text-[12.5px] font-bold tracking-[0.1em] uppercase text-indigo mb-[18px]">
              Product 01 · For individuals
            </div>
            <h2 className="text-[42px] max-[880px]:text-[32px] font-extrabold tracking-[-0.025em] m-0 mb-[18px]">LawOnSight</h2>
            <p className="text-[17px] leading-[1.7] text-body m-0 mb-[22px] [text-wrap:pretty]">
              Free legal advice and the right attorney, on sight. LawOnSight answers legal questions
              24/7 and connects people with lawyers across immigration, personal injury, family law,
              criminal defense, business law, and more.
            </p>
            <ul className="m-0 mb-7 p-0 list-none flex flex-col gap-3 text-ink text-[15.5px] font-medium">
              <li className="flex gap-3 items-baseline"><span className="text-indigo font-extrabold">01</span> Free answers to legal questions, any time</li>
              <li className="flex gap-3 items-baseline"><span className="text-indigo font-extrabold">02</span> Find attorneys near you, matched to your matter</li>
              <li className="flex gap-3 items-baseline"><span className="text-indigo font-extrabold">03</span> Know your rights: immigration, injury, family, criminal, business</li>
            </ul>
            <a
              href="https://lawonsight.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-[15.5px] text-indigo hover:text-indigo-hover transition-colors duration-150"
            >
              Visit lawonsight.com →
            </a>
          </div>
          <ScreenshotPlaceholder variant="light" label="LawOnSight product screenshot" />
        </div>
      </section>

      {/* PermFlowAI */}
      <section className="bg-dark text-dark-text">
        <div className="max-w-content mx-auto px-8 max-[720px]:px-5 py-24 max-[880px]:py-16 grid grid-cols-2 max-[880px]:grid-cols-1 gap-[72px] max-[880px]:gap-10 items-center">
          <div className="max-[880px]:order-2">
            <ScreenshotPlaceholder variant="dark" label="PermFlowAI product screenshot" />
          </div>
          <div className="max-[880px]:order-1">
            <div className="inline-flex items-center gap-2 text-[12.5px] font-bold tracking-[0.1em] uppercase text-teal mb-[18px]">
              Product 02 · For legal teams
            </div>
            <h2 className="text-[42px] max-[880px]:text-[32px] font-extrabold tracking-[-0.025em] m-0 mb-[18px]">PermFlowAI</h2>
            <p className="text-[17px] leading-[1.7] text-dark-body m-0 mb-[22px] [text-wrap:pretty]">
              Workflow-first software for PERM labor certification. PermFlowAI keeps recruitment
              timelines, evidence, and filing readiness organized, with attorney review built into
              every step.
            </p>
            <ul className="m-0 mb-7 p-0 list-none flex flex-col gap-3 text-dark-text text-[15.5px] font-medium">
              <li className="flex gap-3 items-baseline"><span className="text-teal font-extrabold">01</span> PERM recruitment timelines, tracked automatically</li>
              <li className="flex gap-3 items-baseline"><span className="text-teal font-extrabold">02</span> Evidence tracking and filing readiness</li>
              <li className="flex gap-3 items-baseline"><span className="text-teal font-extrabold">03</span> Attorney review workflows, end to end</li>
            </ul>
            <a
              href="https://www.permflowai.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal font-bold text-[15.5px] hover:text-white transition-colors duration-150"
            >
              Visit permflowai.com →
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="anchor-offset border-t border-line bg-white">
        <div className="max-w-content mx-auto px-8 max-[720px]:px-5 py-[88px] max-[880px]:py-16">
          <div className="max-w-[640px] mb-12">
            <div className="text-[12.5px] font-bold tracking-[0.1em] uppercase text-indigo mb-[18px]">Services</div>
            <h2 className="text-[42px] max-[880px]:text-[32px] font-extrabold tracking-[-0.025em] m-0 mb-[18px]">
              Consulting &amp; software development
            </h2>
            <p className="text-[17px] leading-[1.7] text-body m-0 [text-wrap:pretty]">
              Beyond our products, we take on select consulting and custom software engagements,
              bringing the same product discipline to your problem.
            </p>
          </div>
          <div className="grid grid-cols-2 max-[880px]:grid-cols-1 gap-6">
            <div className="border border-line rounded-[14px] p-8 hover:border-indigo transition-colors duration-150">
              <div className="font-extrabold text-[19px] mb-2">Technology consulting</div>
              <p className="text-[15.5px] leading-[1.65] text-secondary m-0">
                Strategy and architecture for teams building or modernizing software, from AI
                adoption to workflow automation, with a focus on legal and regulated industries.
              </p>
            </div>
            <div className="border border-line rounded-[14px] p-8 hover:border-indigo transition-colors duration-150">
              <div className="font-extrabold text-[19px] mb-2">Custom software development</div>
              <p className="text-[15.5px] leading-[1.65] text-secondary m-0">
                Small-scale, high-craft builds: internal tools, workflow systems, and product
                prototypes, designed, shipped, and supported by the team behind our products.
              </p>
            </div>
          </div>
          <Link
            href="/contact"
            className="inline-block mt-8 font-bold text-[15.5px] text-indigo hover:text-indigo-hover transition-colors duration-150"
          >
            Start a conversation →
          </Link>
        </div>
      </section>

      {/* Mission strip */}
      <section className="max-w-content mx-auto px-8 max-[720px]:px-5 py-[110px] max-[880px]:py-20 text-center">
        <p className="font-serif italic text-[30px] max-[880px]:text-2xl leading-[1.45] text-ink max-w-[720px] mx-auto mb-[18px] [text-wrap:pretty]">
          &ldquo;Legal help shouldn&apos;t depend on who you know or what you can afford. It should
          be on sight, in flow, and within reach.&rdquo;
        </p>
        <div className="text-sm font-semibold tracking-[0.1em] uppercase text-muted">The EightArc mission</div>
      </section>
    </main>
  );
}
