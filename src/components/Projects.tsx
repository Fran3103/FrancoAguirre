import React from "react";
import { Project } from "../../types";
import ProjectCard from "../utils/ProjectCard";

const PROJECTS: Project[] = [
  {
    id: 1,
    title: "CocktailOps  — Gestión de eventos y órdenes",
    description:
      "Sistema para gestionar eventos y generar automáticamente listas de insumos/bebidas y una orden en PDF. Backend con API REST, persistencia en base de datos y documentación de endpoints.",
    diagram: "cocktailops",
    tags: [
      "Java",
      "Spring Boot",
      "Flyway",
      "PostgreSQL",
      "Swagger",
      "Postman",
    ],
    github: "https://github.com/Fran3103/CocktailOps",
    demo: "",
    docs: "",
    image: ["cocktailOps/img-1.png", "cocktailOps/img-2.png", "cocktailOps/img-3.png", "cocktailOps/img-4.png", "cocktailOps/img-5.png"],
  },
  {
    id: 2,
    title: "API Ticker — Servicio REST con persistencia y documentación",
    description:
      "API para consultar y guardar información de “tickers”, con endpoints REST, validaciones y manejo de errores. Incluye documentación con Swagger y pruebas con Postman.",
    diagram: "ticketing-api",
    tags: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "PostgreSQL",
      "Flyway",
      "Swagger",
      "Postman",
    ],
    github: "https://github.com/Fran3103/ticketing-api",
    demo: "",
    docs: "",
    image: ["ticketing-api/img-1.png", "ticketing-api/img-2.png", "ticketing-api/img-3.png", "ticketing-api/img-4.png", "ticketing-api/img-5.png"],
  },
  {
    id: 3,
    title: "E-commerce Microservicios — Demo con Spring Cloud",
    description:
      "Demo técnica para mostrar arquitectura de microservicios: servicios separados, comunicación entre componentes y ejecución local con Docker Compose. Enfocado en estructura, configuración y despliegue.",
    diagram: "microservices-ecommerce",
    tags: [
      "Java",
      "Spring Boot",
      "Spring Cloud",
      "Docker",
      "SQL",
      "MySQL",
    ],
    github: "https://github.com/Fran3103/api-ecommerce",
    demo: "",
    docs: "",
    image: ["e-commerce/preview1.png", "e-commerce/preview2.png", "e-commerce/preview3.png" ,"e-commerce/preview4.png", "e-commerce/preview5.png",
        "e-commerce/preview6.png","e-commerce/preview7.png","e-commerce/preview8.png"
    ],
  },
  {
    id: 4,
    title: "BellezaGlow — Landing en producción con checkout",
    description:
      "Landing page en producción orientada a conversión, con UI responsive y flujo de pago integrado con Mercado Pago. Proyecto enfocado en experiencia de usuario y despliegue.",
    diagram: "bellezaglow",
    tags: ["React", "Tailwind", "Mercado Pago"],
    github: "https://github.com/Fran3103/bellezaGlow",
    demo: "https://bellezaglow.com",
    docs: "",
    image: ["/bellezaglow/image_1.png",
      "/bellezaglow/image_2.png",
      "/bellezaglow/image_3.png"],
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tighter uppercase">
            Proyectos Destacados
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {PROJECTS.map((project) => (
            <ProjectCard  project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
