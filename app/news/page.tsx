import type { Metadata } from 'next';
import { posts } from '@/lib/posts';

export const metadata: Metadata = {
  title: 'News',
  description: "What's new at EightArc: product launches and company updates.",
};

export default function News() {
  return (
    <main className="max-w-content mx-auto px-8 max-[720px]:px-5 py-[100px] max-[880px]:py-16">
      <div className="text-[13px] font-bold tracking-[0.12em] uppercase text-indigo mb-4">News</div>
      <h1 className="text-[52px] max-[880px]:text-[34px] font-black tracking-[-0.03em] m-0 mb-14">
        What&apos;s new at EightArc
      </h1>
      <div className="flex flex-col max-w-[760px]">
        {posts.map((post) => (
          <a
            key={post.title}
            href="#"
            className="grid grid-cols-[130px_1fr] max-[720px]:grid-cols-1 gap-8 max-[720px]:gap-1.5 py-7 border-t border-line text-inherit hover:bg-surface transition-colors duration-150"
          >
            <div className="text-sm font-semibold text-muted pt-[3px]">{post.date}</div>
            <div>
              <div className="text-xl font-bold tracking-[-0.015em] mb-1.5 text-ink">{post.title}</div>
              <div className="text-[15px] leading-[1.6] text-secondary">{post.excerpt}</div>
            </div>
          </a>
        ))}
      </div>
    </main>
  );
}
