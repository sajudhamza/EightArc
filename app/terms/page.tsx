import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of service',
  description: 'EightArc Inc terms of service.',
};

export default function Terms() {
  return (
    <main className="max-w-content mx-auto px-8 max-[720px]:px-5 py-[100px] max-[880px]:py-16">
      <div className="max-w-[720px]">
        <div className="text-[13px] font-bold tracking-[0.12em] uppercase text-indigo mb-4">Legal</div>
        <h1 className="text-[52px] max-[880px]:text-[34px] font-black tracking-[-0.03em] leading-[1.05] m-0 mb-[26px]">
          Terms of service
        </h1>
        <p className="text-[17px] leading-[1.7] text-body m-0 mb-6 [text-wrap:pretty]">
          Our full terms of service are being finalized and will be published here. In the meantime,
          if you have any questions, please reach out.
        </p>
        <a
          href="mailto:hello@eightarc.com"
          className="font-bold text-[15.5px] text-indigo hover:text-indigo-hover transition-colors duration-150"
        >
          hello@eightarc.com →
        </a>
      </div>
    </main>
  );
}
