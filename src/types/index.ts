export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  detailedDescription?: string;
  whoItsFor?: string;
  whatYouGet?: string[];
  typicalOutcomes?: string[];
}

export interface ProcessStep {
  id: number;
  title: string;
  description: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  thumbnail: string;
  isConcept: boolean;
  objective?: string;
  approach?: string;
  tools?: string[];
  images?: string[];
}

export interface ContactInfo {
  email: string;
  whatsapp: string;
  workingHours: string;
}
