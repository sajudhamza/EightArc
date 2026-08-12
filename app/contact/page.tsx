import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Partnerships, press, investors, or questions about our products. Get in touch with EightArc.',
};

const card =
  'bg-white border border-line rounded-[14px] px-7 py-6 flex justify-between items-center gap-4 flex-wrap';
const linkCls = 'font-bold text-[15.5px] text-indigo hover:text-indigo-hover transition-colors duration-150';

export default function Contact() {
  return (
    <main className="max-w-content mx-auto px-8 max-[720px]:px-5 py-[100px] max-[880px]:py-16">
      <div className="max-w-[620px]">
        <div className="text-[13px] font-bold tracking-[0.12em] uppercase text-indigo mb-4">Contact</div>
        <h1 className="text-[52px] max-[880px]:text-[34px] font-black tracking-[-0.03em] m-0 mb-[22px]">
          Let&apos;s talk.
        </h1>
        <p className="text-lg leading-[1.7] text-body m-0 mb-10 [text-wrap:pretty]">
          Partnerships, press, investors, or questions about our products. We read everything.
        </p>
        <div className="flex flex-col gap-4">
          <div className={card}>
            <div>
              <div className="font-bold text-base">General</div>
              <div className="text-sm text-muted">Everything else</div>
            </div>
            <a href="mailto:hello@eightarc.com" className={linkCls}>hello@eightarc.com</a>
          </div>
          <div className={card}>
            <div>
              <div className="font-bold text-base">Consulting &amp; development</div>
              <div className="text-sm text-muted">Project inquiries</div>
            </div>
            <a href="mailto:consulting@eightarc.com" className={linkCls}>consulting@eightarc.com</a>
          </div>
          <div className={card}>
            <div>
              <div className="font-bold text-base">LawOnSight</div>
              <div className="text-sm text-muted">Consumer legal help</div>
            </div>
            <a href="https://lawonsight.com" target="_blank" rel="noopener noreferrer" className={linkCls}>lawonsight.com</a>
          </div>
          <div className={card}>
            <div>
              <div className="font-bold text-base">PermFlowAI</div>
              <div className="text-sm text-muted">PERM workflow software</div>
            </div>
            <a href="https://www.permflowai.com" target="_blank" rel="noopener noreferrer" className={linkCls}>permflowai.com</a>
          </div>
        </div>
      </div>
    </main>
  );
}
