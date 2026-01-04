
export type ServiceType = 'LOGO' | 'SNS' | 'WEB' | 'ALL';

export interface PortfolioItem {
  id: string;
  title: string;
  category: ServiceType;
  description: string;
  imageUrl: string;
  client?: string;
  createdAt: number;
}

export interface Review {
  id: string;
  author: string;
  content: string;
  rating: number;
  platform: 'Kmong' | 'Direct';
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  icon: string;
}
