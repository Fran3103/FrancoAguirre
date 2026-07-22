import Hero from "../components/Hero";
import Profile from "../components/Profile";
import Projects from "../components/Projects";
import TechStack from "../components/TechStack";
import Education from "../components/Education";
import Contact from "../components/Contact";
import PageMetadata from "../components/PageMetadata";
function HomePage() {
  return (
    <>
      <PageMetadata
        title="Franco Aguirre | Desarrollador Backend Java"
        description="Portfolio de Franco Aguirre, desarrollador backend especializado en Java, Spring Boot, APIs REST y bases de datos SQL, con formación complementaria en testing QA y análisis funcional."
        path="/"
      />
      <Hero />
      <Profile />
      <Projects />
      <TechStack />
      <Education />
      <Contact />
    </>
  );
}

export default HomePage;
