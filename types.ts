export interface Project {
  id: number;
  title: string;
  description: string;
  diagram: 'cocktailops' | 'ticketing-api' | 'microservices-ecommerce' | 'bellezaglow';
  tags: string[];
  // nuevos
  github?: string;
  demo?: string;
  docs?: string;  
  image?: string[];  
}


export interface TechItem {
  name: string;
  category: string;
  icon: string; 
}