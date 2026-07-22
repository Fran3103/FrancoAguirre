# Portfolio profesional — Franco Aguirre

Portfolio personal orientado a presentar mi perfil como **Desarrollador Backend Java**, mis proyectos, tecnologías, formación académica y certificaciones.

El sitio fue desarrollado como una SPA responsive con React, TypeScript y Tailwind CSS.

## Sitio publicado

**[Ver portfolio en producción](https://francoaguirre.vercel.app/)**

## Características principales

- Presentación profesional enfocada en desarrollo backend con Java.
- Sección de proyectos destacados con imágenes, tecnologías y enlaces.
- Stack técnico organizado por áreas.
- Formación académica y profesional.
- Página independiente de certificaciones.
- Visualización de certificados PDF mediante un modal.
- Descarga del CV actualizado.
- Formulario de contacto integrado con EmailJS.
- Protección básica contra bots mediante un campo honeypot.
- Navegación responsive para dispositivos móviles.
- Metadatos SEO personalizados.
- Analíticas mediante Vercel Analytics.
- Carga diferida de imágenes para mejorar el rendimiento.

## Tecnologías utilizadas

### Frontend

- React 19
- TypeScript
- Vite
- Tailwind CSS 4
- React Router
- React Icons

### Servicios e integración

- EmailJS
- Vercel Analytics

### Desarrollo y despliegue

- Git y GitHub
- Vercel
- npm

## Estructura principal

```text
src/
├── components/     # Componentes visuales y secciones
├── data/           # Información de proyectos y certificados
├── pages/          # Página principal y certificaciones
├── utils/          # Componentes y utilidades reutilizables
├── App.tsx         # Configuración general y rutas
├── index.css       # Tailwind y estilos globales
└── main.tsx        # Punto de entrada de la aplicación

public/
├── certificados/   # Certificados en formato PDF
├── imágenes/       # Capturas de proyectos
└── CV              # Currículum descargable
```

## Ejecución local

### Requisitos

- Node.js
- npm

### Instalación

Clonar el repositorio:

```bash
git clone https://github.com/Fran3103/FrancoAguirre.git
```

Ingresar al proyecto:

```bash
cd FrancoAguirre
```

Instalar las dependencias:

```bash
npm install
```

Iniciar el entorno de desarrollo:

```bash
npm run dev
```

La aplicación estará disponible en:

```text
http://localhost:3000
```

## Variables de entorno

Para utilizar el formulario de contacto es necesario crear un archivo `.env.local` en la raíz del proyecto:

```env
VITE_EMAILJS_SERVICE_ID=tu_service_id
VITE_EMAILJS_TEMPLATE_ID=tu_template_id
VITE_EMAILJS_PUBLIC_KEY=tu_public_key
```

Estas variables deben configurarse también en el entorno de despliegue.

El archivo `.env.local` no debe subirse al repositorio.

## Scripts disponibles

```bash
npm run dev
```

Inicia el servidor local de desarrollo.

```bash
npm run typecheck
```

Verifica los tipos de TypeScript sin generar archivos.

```bash
npm run build
```

Ejecuta la verificación de TypeScript y genera la versión de producción.

```bash
npm run preview
```

Permite revisar localmente la versión generada para producción.

## Proyectos presentados

- [CocktailOps](https://github.com/Fran3103/CocktailOps)
- [Ticketing API](https://github.com/Fran3103/ticketing-api)
- [E-commerce con microservicios](https://github.com/Fran3103/api-ecommerce)
- [BellezaGlow](https://github.com/Fran3103/bellezaGlow)

## Contacto

- [LinkedIn](https://www.linkedin.com/in/franconahuelaguirre/)
- [GitHub](https://github.com/Fran3103)
- [Portfolio](https://francoaguirre.vercel.app/)