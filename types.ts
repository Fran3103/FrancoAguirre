export interface Project {
  id: number;
  title: string;
  description: string;
  diagram: 'systragos' | 'ticker-api' | 'microservices-ecommerce' | 'bellezaglow';
  tags: string[];

  // nuevos
  github?: string;
  demo?: string;
  docs?: string;   // swagger / postman / readme / etc
  image?: string[];  // ruta o url de screenshot
}


export interface TechItem {
  name: string;
  category: string;
  icon: string; // URL o ruta al ícono
}