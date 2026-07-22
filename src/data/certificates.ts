import type {
  Certificate,
  CertificateCategory,
} from '../types';

export const CERTIFICATE_CATEGORIES: CertificateCategory[] = [
  'Análisis funcional',
  'Backend Java',
  'Testing QA',
  'Desarrollo web',
];

export const CERTIFICATES: Certificate[] = [
  
  {
    id: 'analisis-funcional',
    title: 'Análisis Funcional',
    institution: 'Educación IT',
    category: 'Análisis funcional',
    status: 'Aprobado',
    date: '15 de abril de 2026',
    duration: '15 horas',
    certificateUrl:
      '/certificados/educacion-it-analisis-funcional.pdf',
    featured: true,
  },
  {
    id: 'gestion-proyectos',
    title: 'Gestión de Proyectos',
    institution: 'Educación IT',
    category: 'Análisis funcional',
    status: 'Aprobado',
    date: '23 de junio de 2026',
    duration: '18 horas',
    certificateUrl:
      '/certificados/educacion-it-gestion-proyectos.pdf',
    featured: true,
  },
  {
    id: 'user-stories',
    title: 'User Stories',
    institution: 'Educación IT',
    category: 'Análisis funcional',
    status: 'Aprobado',
    date: '23 de junio de 2026',
    duration: '12 horas',
    certificateUrl:
      '/certificados/educacion-it-user-stories.pdf',
    featured: true,
  },
  {
    id: 'scrum-fundamentos',
    title: 'Scrum Fundamentos',
    institution: 'Educación IT',
    category: 'Análisis funcional',
    status: 'Aprobado',
    date: '23 de junio de 2026',
    duration: '12 horas',
    certificateUrl:
      '/certificados/educacion-it-scrum-fundamentos.pdf',
    featured: true,
  },
  {
    id: 'okr-fundamentals',
    title: 'OKR Fundamentals',
    institution: 'Educación IT',
    category: 'Análisis funcional',
    status: 'Aprobado',
    date: '23 de junio de 2026',
    duration: '9 horas',
    certificateUrl:
      '/certificados/educacion-it-okr-fundamentals.pdf',
    featured: true,
  },
  {
    id: 'uml',
    title: 'UML: Análisis y Diseño Orientado a Objetos',
    institution: 'Educación IT',
    category: 'Análisis funcional',
    status: 'Aprobado',
    date: '25 de junio de 2026',
    duration: '10 horas',
    certificateUrl: '/certificados/educacion-it-uml.pdf',
    featured: true,
  },

  {
    id: 'spring-boot',
    title: 'Desarrollo de APIs en Java con Spring Boot',
    institution: 'TodoCode Academy',
    category: 'Backend Java',
    status: 'Finalizado',
    date: '13 de mayo de 2025',
    certificateUrl: '/certificados/todocode-spring-boot.pdf',
    featured: true,
  },
  {
    id: 'spring-security',
    title: 'Seguridad con Spring Security',
    institution: 'TodoCode Academy',
    category: 'Backend Java',
    status: 'Finalizado',
    date: '28 de enero de 2026',
    certificateUrl:
      '/certificados/todocode-spring-security.pdf',
    featured: true,
  },
  {
    id: 'spring-cloud',
    title: 'Microservicios con Spring Cloud',
    institution: 'TodoCode Academy',
    category: 'Backend Java',
    status: 'Finalizado',
    date: '2 de enero de 2026',
    certificateUrl: '/certificados/todocode-spring-cloud.pdf',
    featured: true,
  },
  {
    id: 'sql-sin-fronteras',
    title: 'SQL: Sin Fronteras',
    institution: 'Academia Hola Mundo',
    category: 'Backend Java',
    status: 'Finalizado',
    date: '29 de enero de 2025',
    certificateUrl: '/certificados/hola-mundo-sql.pdf',
  },


  
  {
    id: 'web-designer',
    title: 'Web Designer',
    institution: 'Digital House',
    category: 'Desarrollo web',
    status: 'Finalizado',
    date: '2024',
    duration: '50 horas',
    certificateUrl:
      '/certificados/digital-house-web-designer.pdf',
  },

];