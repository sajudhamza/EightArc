import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Careers',
  description: 'Build software that changes who the law works for. Join EightArc.',
};

export default function Careers() {
  return (
    <main className="max-w-content mx-auto px-8 max-[720px]:px-5 py-[100px] max-[880px]:py-16">
      <div className="max-w-[680px]">
        <div className="text-[13px] font-bold tracking-[0.12em] uppercase text-indigo mb-4">Careers</div>
        <h1 className="text-[52px] max-[880px]:text-[34px] font-black tracking-[-0.03em] leading-[1.05] m-0 mb-[26px]">
          Build software that changes who the law works for.
        </h1>
        <p className="text-lg leading-[1.7] text-body m-0 mb-10 [text-wrap:pretty]">
          We&apos;re a small team building products with outsized consequences: the difference
          between someone knowing their rights or not, a green-card case filed on time or not. If
          that&apos;s the kind of work you want, we want to hear from you.
        </p>
        <div className="bg-white border border-line rounded-[14px] p-8 flex justify-between items-center gap-6 flex-wrap">
          <div>
            <div className="font-extrabold text-lg mb-1.5">No open roles right now</div>
            <div className="text-[15px] text-secondary leading-[1.6]">
              But exceptional people don&apos;t wait for job posts. Introduce yourself.
            </div>
          </div>
          <a
            href="mailto:careers@eightarc.com"
            className="bg-indigo text-white px-6 py-[13px] rounded-[9px] font-bold text-[15px] whitespace-nowrap hover:bg-indigo-hover transition-colors duration-150"
          >
            careers@eightarc.com
          </a>
        </div>
      </div>
    </main>
  );
}
