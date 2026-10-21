export type ServiceCategory = 
  | 'all'
  | 'graphic-design'
  | 'social-media'
  | 'illustrator'
  | 'video-editing'
  | 'wordpress'
  | 'seo-marketing';

export interface ServiceItem {
  id: string;
  category: ServiceCategory;
  title: string;
  tagline: string;
  description: string;
  software: string[];
  deliverables: string[];
  turnaround: string;
  priceEstimate: string;
  highlight: string;
}

export interface CaseStudyData {
  objective: string;
  challenge: string;
  process: string[];
  softwareUsed: string[];
  deliverables: string[];
  finalResult: string;
  metricsOrOutcome: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: ServiceCategory;
  categoryLabel: string;
  image: string;
  aspect: 'landscape' | 'square' | 'portrait';
  shortDesc: string;
  tags: string[];
  isConceptProject: boolean;
  caseStudy: CaseStudyData;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  serviceReceived: string;
  rating: number;
  isSamplePlaceholder: boolean;
}

export interface ContactFormData {
  fullName: string;
  email: string;
  service: string;
  budget: string;
  timeline: string;
  message: string;
}
