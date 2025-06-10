import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Achievements from "../components/Achievements";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import FloatingActionButton from "../components/FloatingActionButton";
import Certificates from "../components/Certificates";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Achievements />
      <Projects />
      <Certificates />
      <Contact />
      <Footer />
      <FloatingActionButton />
    </div>
  );
};

export default Index;
