export interface CompanyDetails {
  name: string;
  location: string;
}

export interface JobResponse {
  id: string;
  role: string;
  company: CompanyDetails;
  period: string;
  highlights: string[];
}

export interface SkillCategoryResponse {
  id: string;
  category: string;
  items: string[];
}

export interface LanguageItemResponse {
  id: string;
  name: string;
  level: string;
  credentialUrl?: string;
}

export interface HeaderProfileResponse {
  name: string;
  role: string;
  email: string;
  phone: string;
  location: string;
  githubUrl: string;
  linkedinUrl: string;
}