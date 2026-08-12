export type Post = {
  date: string;
  title: string;
  excerpt: string;
};

// Add new posts to the top of this list.
export const posts: Post[] = [
  {
    date: 'Aug 2026',
    title: 'PermFlowAI opens to immigration law firms',
    excerpt:
      'Our PERM workflow platform is now available to firms managing labor certification at scale: timelines, evidence, and attorney review in one place.',
  },
  {
    date: 'Jun 2026',
    title: 'LawOnSight reaches all 50 states',
    excerpt:
      'Free legal answers and attorney matching now cover immigration, personal injury, family law, criminal defense, and business law nationwide.',
  },
  {
    date: 'Mar 2026',
    title: 'Introducing EightArc',
    excerpt:
      'A new legal technology company with one mission: make the law accessible through software. Two products at launch, more to come.',
  },
];
