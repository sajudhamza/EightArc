import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description:
    'EightArc Inc makes the law accessible through software, one focused product at a time.',
};

export default function About() {
  return (
    <main className="max-w-content mx-auto px-8 max-[720px]:px-5 py-[100px] max-[880px]:py-16">
      <div className="max-w-[720px] mb-20 max-[880px]:mb-12">
        <div className="text-[13px] font-bold tracking-[0.12em] uppercase text-indigo mb-4">About EightArc</div>
        <h1 className="text-[52px] max-[880px]:text-[34px] font-black tracking-[-0.03em] leading-[1.05] m-0 mb-[26px]">
          We make the law accessible through software.
        </h1>
        <p className="text-[19px] leading-[1.7] text-body m-0 [text-wrap:pretty]">
          Legal processes are among the most consequential things people and businesses go through,
          and among the least well-served by technology. EightArc Inc exists to change that, one
          focused product at a time.
        </p>
      </div>

      <div className="grid grid-cols-2 max-[880px]:grid-cols-1 gap-16 max-[880px]:gap-10 mb-20 max-[880px]:mb-12">
        <div className="text-[16.5px] leading-[1.75] text-body">
          <h2 className="text-2xl font-extrabold tracking-[-0.02em] text-ink m-0 mb-3.5">Why &ldquo;EightArc&rdquo;?</h2>
          <p className="m-0 [text-wrap:pretty]">
            The arc is the shape of progress: the long arc that bends toward justice. Eight is the
            loop that never ends. We build products for the legal system the way it should work:
            continuously, for everyone.
          </p>
        </div>
        <div className="text-[16.5px] leading-[1.75] text-body">
          <h2 className="text-2xl font-extrabold tracking-[-0.02em] text-ink m-0 mb-3.5">How we build</h2>
          <p className="m-0 [text-wrap:pretty]">
            We don&apos;t build one platform for everything. We build sharp tools for specific legal
            workflows: LawOnSight for individuals who need answers and attorneys, PermFlowAI for
            teams managing PERM filings. Each product stands alone; all share the same standard of
            care.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-3 max-[880px]:grid-cols-1 gap-6">
        <div className="border-t-[3px] border-indigo pt-[18px]">
          <div className="font-extrabold text-[17px] mb-1.5">Focused</div>
          <div className="text-[15px] leading-[1.6] text-secondary">One product, one workflow, done properly. No sprawl.</div>
        </div>
        <div className="border-t-[3px] border-indigo pt-[18px]">
          <div className="font-extrabold text-[17px] mb-1.5">Trustworthy</div>
          <div className="text-[15px] leading-[1.6] text-secondary">Legal work demands accuracy, discretion, and plain language.</div>
        </div>
        <div className="border-t-[3px] border-indigo pt-[18px]">
          <div className="font-extrabold text-[17px] mb-1.5">Growing</div>
          <div className="text-[15px] leading-[1.6] text-secondary">Two products today. More legal workflows are coming.</div>
        </div>
      </div>
    </main>
  );
}
