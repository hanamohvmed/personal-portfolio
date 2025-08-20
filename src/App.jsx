import { useState } from "react";
import Loader from "./components/Loader";
import Footer from "./components/Footer";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Experience from "./sections/Experience";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import TechStack from "./sections/TechStack";
import NavBar from "./components/NavBar";

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="overflow-hidden">
      {!isLoaded && <Loader onLoaded={() => setIsLoaded(true)} />}
      {isLoaded && (
        <>
          <NavBar />
          <Hero />
          <About />
          <TechStack />
          <Projects />
          <Experience />
          <Contact />
          <Footer />
        </>
      )}
    </div>
  );
}
