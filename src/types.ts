export interface Project {
  id: number;
  title: string;
  category: string;
  summary: string;
  problem: string;
  solution: string;
  features: string[];
  status: string;
  tags: string[];
  github: string;
  demo?: string;
  docs?: string;
  images: string[];
}

export type CertificateCategory =
  | 'Análisis funcional'
  | 'Backend Java'
  | 'Testing QA'
  | 'Desarrollo web';

export type CertificateStatus =
  | 'Aprobado'
  | 'Finalizado'
  | 'En curso'
  | 'Participación';

export interface Certificate {
  id: string;
  title: string;
  institution: string;
  category: CertificateCategory;
  status: CertificateStatus;
  date?: string;
  duration?: string;
  note?: string;
  certificateUrl?: string;
  featured?: boolean;
}