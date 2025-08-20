import HeroExperience from "../components/HeroExperience";
import GradientSpheres from "../components/GradientSphere";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative w-screen h-dvh overflow-hidden px-5 md:p-20 text-white-50"
    >
      <GradientSpheres
        sphere1Class="gradient-sphere sphere-1"
        sphere2Class="gradient-sphere sphere-2"
      />

      <div className="gradient-box absolute bottom-0 left-0 z-20 w-full h-96" />

      <div className="flex-center w-full h-full">
        <div className="container relative w-full h-full">
          <div className="mt-20 md:mt-10">
            <p className="font md:text-2xl text-base">Hello there!</p>
            <h1 className="font-bold text-5xl md:text-8xl">
              HANA MO ABDELHAMID
            </h1>
            <h1 className="font-bold text-5xl md:text-8xl">CREATIVE</h1>
          </div>

          <div className="absolute bottom-20 md:-bottom-5 right-0 z-30 w-full">
            <div className="flex items-end justify-between">
              <div className="flex flex-col items-center gap-1 md:gap-5">
                <p className="text-xs md:text-base">Explore</p>
                <img
                  src="images/arrowdown.svg"
                  alt="arrow down"
                  className="size-7 animate-bounce"
                />
              </div>

              <div className="flex flex-col items-end">
                <img
                  src="/images/shape.svg"
                  alt="decorative shape"
                  className="size-15"
                />
                <h1 className="font-bold text-5xl md:text-8xl">DEVELOPER</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-0">
        <HeroExperience />
      </div>
    </section>
  );
}
