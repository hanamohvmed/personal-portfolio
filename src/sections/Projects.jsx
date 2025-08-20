import Carousel from "../components/Carousel";
import GradientSpheres from "../components/GradientSphere";
import TitleHeader from "../components/TitleHeader";

export default function Projects() {
  return (
    <section id="projects" className="relative flex-center h-full w-full">
      <GradientSpheres
        sphere1Class="projects-gradient-sphere projects-sphere-1"
        sphere2Class="projects-gradient-sphere projects-sphere-2"
      />

      <div className="relative z-10 my-20 w-full md:my-40">
        <div className="container mx-auto px-5 md:p-30 md:pb-0">
          <TitleHeader
            title="My PROJECTS"
            number="03"
            text="Check my recent projects below"
          />
        </div>
        <div className="mt-10 md:mt-20">
          <Carousel />
        </div>
      </div>
    </section>
  );
}
