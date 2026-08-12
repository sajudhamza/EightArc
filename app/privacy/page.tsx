import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy policy',
  description: 'EightArc Inc privacy policy.',
};

export default function Privacy() {
  return (
    <main className="max-w-content mx-auto px-8 max-[720px]:px-5 py-[100px] max-[880px]:py-16">
      <div className="max-w-[720px]">
        <div className="text-[13px] font-bold tracking-[0.12em] uppercase text-indigo mb-4">Legal</div>
        <h1 className="text-[52px] max-[880px]:text-[34px] font-black tracking-[-0.03em] leading-[1.05] m-0 mb-[26px]">
          Privacy policy
        </h1>
        <p className="text-[17px] leading-[1.7] text-body m-0 mb-6 [text-wrap:pretty]">
          Our full privacy policy is being finalized and will be published here. In the meantime, if
          you have any questions about how EightArc Inc handles your information, please reach out.
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
