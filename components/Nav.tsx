'use client';

import { useState } from 'react';
import Link from 'next/link';
import { LogoLockup } from './Logo';

const links = [
  { href: '/#products', label: 'Products' },
  { href: '/#services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/careers', label: 'Careers' },
  { href: '/news', label: 'News' },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[rgba(251,251,253,0.85)] backdrop-blur-[12px] border-b border-line">
      <div className="max-w-content mx-auto px-8 max-[720px]:px-5 h-[68px] flex items-center justify-between">
        <LogoLockup />

        {/* Desktop nav */}
        <nav className="flex max-[720px]:hidden gap-[30px] items-center text-[14.5px] font-medium">
          {links.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className="text-body hover:text-indigo transition-colors duration-150"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="bg-ink text-white px-[18px] py-[9px] rounded-lg font-semibold hover:bg-indigo transition-colors duration-150"
          >
            Get in touch
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          className="hidden max-[720px]:flex flex-col justify-center items-center w-10 h-10 gap-[5px]"
        >
          <span className={`block w-5 h-[2px] bg-ink transition-transform duration-150 ${open ? 'translate-y-[7px] rotate-45' : ''}`} />
          <span className={`block w-5 h-[2px] bg-ink transition-opacity duration-150 ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-[2px] bg-ink transition-transform duration-150 ${open ? '-translate-y-[7px] -rotate-45' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="hidden max-[720px]:flex flex-col px-5 pb-5 gap-1 border-t border-line bg-page">
          {links.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-body font-medium text-[15.5px] py-3 border-b border-line"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-3 bg-ink text-white px-[18px] py-[11px] rounded-lg font-semibold text-center text-[15px]"
          >
            Get in touch
          </Link>
        </nav>
      )}
    </header>
  );
}
