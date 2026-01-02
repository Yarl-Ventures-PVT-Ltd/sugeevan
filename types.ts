
export interface NavItem {
  label: string;
  href: string;
}

export interface Venture {
  id: string;
  title: string;
  oneLiner: string;
  description: string;
  highlights: string[];
  ctaText: string;
  accentColor: 'blue' | 'emerald' | 'amber' | 'pink';
  link: string;
  image: string;
}

export interface Service {
  title: string;
  description: string;
  icon: string;
}

export interface Milestone {
  text: string;
  year?: string;
}

export interface Article {
  slug: string;
  title: string;
  summary: string;
  date: string;
  tag: string;
  content: React.ReactNode;
}
