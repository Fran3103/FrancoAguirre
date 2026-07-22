import type { Project } from '../types';

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'CocktailOps',
    category: 'Proyecto principal · Full stack',
    summary:
      'Aplicación para planificar pedidos de cócteles para eventos, calcular insumos y generar órdenes y documentos PDF.',
    problem:
      'La planificación manual de bebidas e insumos para eventos puede producir cálculos imprecisos, faltantes y documentación desorganizada.',
    solution:
      'Una aplicación con backend Java/Spring Boot y frontend React que centraliza catálogos, calcula ingredientes y packs, registra órdenes y genera PDFs.',
    features: [
      'Creación de órdenes por duración del evento o cantidad de bebidas.',
      'Catálogos de productos, categorías y cócteles.',
      'Autenticación JWT y roles USER/ADMIN.',
      'Historial y detalle de órdenes por usuario.',
      'Generación de PDF público y protegido por propietario.',
      'Migraciones con Flyway y base de datos PostgreSQL.',
      'Docker Compose y validación continua con GitHub Actions.',
    ],
    status: 'Flujo principal implementado · Deploy pendiente',
    tags: [
      'Java 17',
      'Spring Boot',
      'PostgreSQL',
      'Flyway',
      'Spring Security',
      'JWT',
      'React',
      'TypeScript',
      'JUnit',
      'OpenAPI / Swagger',
      'Docker',
      'GitHub Actions',
    ],
    github: 'https://github.com/Fran3103/CocktailOps',
    docs: 'https://github.com/Fran3103/CocktailOps#readme',
    images: [
      '/cocktailOps/img-1.png',
      '/cocktailOps/img-2.png',
      '/cocktailOps/img-3.png',
      '/cocktailOps/img-4.png',
      '/cocktailOps/img-5.png',
    ],
  },
  {
    id: 2,
    title: 'Ticketing API',
    category: 'Backend Java',
    summary:
      'API REST para gestionar tickets de soporte e incidencias, usuarios, comentarios, estados, prioridades y asignaciones.',
    problem:
      'Los equipos de soporte necesitan registrar incidencias, asignarlas y seguir su evolución de manera estructurada.',
    solution:
      'Una API backend que modela el ciclo de vida de los tickets y protege sus operaciones mediante autenticación y autorización.',
    features: [
      'Registro, login, refresh token y logout.',
      'Estados y prioridades para los tickets.',
      'Usuarios con roles ADMIN, AGENT y CUSTOMER.',
      'Comentarios, asignaciones y paginación.',
      'Migraciones con Flyway.',
      'Documentación Swagger/OpenAPI.',
    ],
    status: 'Backend funcional · Sin demo pública',
    tags: [
      'Java 17',
      'Spring Boot',
      'Spring Security',
      'JWT',
      'PostgreSQL',
      'Flyway',
      'Swagger',
    ],
    github: 'https://github.com/Fran3103/ticketing-api',
    docs: 'https://github.com/Fran3103/ticketing-api#readme',
    images: [
      '/ticketing-api/img-1.png',
      '/ticketing-api/img-2.png',
      '/ticketing-api/img-3.png',
      '/ticketing-api/img-4.png',
    ],
  },
  {
    id: 3,
    title: 'API Ecommerce',
    category: 'Demo técnica · Microservicios',
    summary:
      'Demostración técnica de una arquitectura distribuida para un ecommerce desarrollada con Spring Boot y Spring Cloud.',
    problem:
      'Explorar cómo separar responsabilidades y comunicar componentes dentro de una arquitectura basada en servicios.',
    solution:
      'Servicios independientes para productos, carrito, ventas y usuarios, coordinados mediante service discovery y API Gateway.',
    features: [
      'Service discovery con Eureka.',
      'Punto de entrada mediante API Gateway.',
      'Servicios separados por dominio.',
      'Dos instancias del servicio de productos.',
      'Persistencia con bases MySQL.',
      'Ejecución local con Docker Compose.',
    ],
    status: 'Demo técnica · Ejecución local',
    tags: [
      'Java',
      'Spring Boot',
      'Spring Cloud',
      'Eureka',
      'API Gateway',
      'MySQL',
      'Docker Compose',
    ],
    github: 'https://github.com/Fran3103/api-ecommerce',
    images: [
      '/e-commerce/preview1.png',
      '/e-commerce/preview2.png',
      '/e-commerce/preview3.png',
      '/e-commerce/preview4.png',
      '/e-commerce/preview5.png',
      '/e-commerce/preview6.png',
      '/e-commerce/preview7.png',
      '/e-commerce/preview8.png',
    ],
  },
  {
    id: 4,
    title: 'BellezaGlow',
    category: 'Proyecto complementario · Frontend',
    summary:
      'Landing page responsive para presentar y comercializar un curso de cremas artesanales.',
    problem:
      'Presentar una propuesta comercial de manera clara y facilitar el acceso del usuario al proceso de compra.',
    solution:
      'Una experiencia web orientada a conversión con secciones informativas, llamados a la acción e integración de pagos.',
    features: [
      'Interfaz responsive desarrollada con React.',
      'Flujo de pago mediante Mercado Pago.',
      'Endpoints serverless en Vercel.',
      'Envío de correos con enlaces de descarga.',
      'Sitio desplegado públicamente.',
    ],
    status: 'Publicado',
    tags: [
      'React',
      'Vite',
      'Tailwind',
      'Mercado Pago',
      'Vercel',
    ],
    github: 'https://github.com/Fran3103/bellezaGlow',
    demo: 'https://bellezaglow.com/',
    docs: 'https://github.com/Fran3103/bellezaGlow#readme',
    images: [
      '/bellezaglow/image_1.png',
      '/bellezaglow/image_2.png',
      '/bellezaglow/image_3.png',
    ],
  },
];