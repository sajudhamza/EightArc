import Link from 'next/link';
import { Logo } from './Logo';

const col = 'flex flex-col gap-2.5';
const head = 'text-[12.5px] font-bold tracking-[0.1em] uppercase text-muted';
const link = 'text-body text-[14.5px] hover:text-indigo transition-colors duration-150';

export default function Footer() {
  return (
    <footer className="border-t border-line bg-surface">
      <div className="max-w-content mx-auto px-8 max-[720px]:px-5 pt-14 pb-9">
        <div className="flex justify-between flex-wrap gap-10 mb-12">
          <div className="flex items-start gap-2.5">
            <Logo size="footer" />
            <div>
              <div className="font-bold text-base">EightArc Inc</div>
              <div className="text-[13.5px] text-muted mt-0.5">Making law accessible through software.</div>
            </div>
          </div>
          <div className="flex gap-16 flex-wrap max-[720px]:gap-10">
            <div className={col}>
              <div className={head}>Products</div>
              <a href="https://lawonsight.com" target="_blank" rel="noopener noreferrer" className={link}>LawOnSight</a>
              <a href="https://www.permflowai.com" target="_blank" rel="noopener noreferrer" className={link}>PermFlowAI</a>
            </div>
            <div className={col}>
              <div className={head}>Services</div>
              <Link href="/#services" className={link}>Consulting</Link>
              <Link href="/#services" className={link}>Software development</Link>
            </div>
            <div className={col}>
              <div className={head}>Company</div>
              <Link href="/about" className={link}>About</Link>
              <Link href="/careers" className={link}>Careers</Link>
              <Link href="/news" className={link}>News</Link>
              <Link href="/contact" className={link}>Contact</Link>
            </div>
            <div className={col}>
              <div className={head}>Legal</div>
              <Link href="/privacy" className={link}>Privacy policy</Link>
              <Link href="/terms" className={link}>Terms of service</Link>
            </div>
          </div>
        </div>
        <div className="border-t border-hairline pt-[22px] flex justify-between flex-wrap gap-3 text-muted text-[13.5px]">
          <div>© 2026 EightArc Inc. All rights reserved.</div>
          <div>eightarc.com</div>
        </div>
      </div>
    </footer>
  );
}
