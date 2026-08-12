import Link from 'next/link';

export function Logo({ size = 'nav' }: { size?: 'nav' | 'footer' }) {
  const tile = size === 'nav' ? 'w-[30px] h-[30px] rounded-lg text-[17px]' : 'w-[26px] h-[26px] rounded-[7px] text-[15px]';
  return (
    <span className={`${tile} bg-indigo text-white inline-flex items-center justify-center font-extrabold shrink-0`}>
      8
    </span>
  );
}

export function LogoLockup() {
  return (
    <Link href="/" className="flex items-center gap-2.5 text-ink">
      <Logo size="nav" />
      <span className="font-bold text-[17px] tracking-[-0.02em]">EightArc</span>
    </Link>
  );
}
