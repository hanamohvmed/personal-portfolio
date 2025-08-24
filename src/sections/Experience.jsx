import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { expCards } from "../constants";
import TitleHeader from "../components/TitleHeader";
import GradientSpheres from "../components/GradientSphere";

gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
  useGSAP(() => {
    gsap.utils.toArray(".timeline-card").forEach((card) => {
      const image = card.querySelector(".card-image");
      const text = card.querySelector(".card-text");

      gsap.from(image, {
        x: -100,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: card,
          start: "top 70%",
          toggleActions: "play none none reverse"
        }
      });

      gsap.from(text, {
        x: 100,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: card,
          start: "top 70%",
          toggleActions: "play none none reverse"
        }
      });
    });

    gsap.fromTo(
      ".progress-line",
      { scaleY: 0 },
      {
        scaleY: 1,
        ease: "none",
        scrollTrigger: {
          trigger: ".timeline-container",
          start: "top 60%",
          end: "bottom 80%",
          scrub: true
        }
      }
    );
  }, []);

  return (
    <section
      id="experience"
      className="w-full md:mt-40 mt-20 section-padding xl:px-0 relative"
    >
      <GradientSpheres
        sphere1Class="about-gradient-sphere about-sphere-1"
        sphere2Class="about-gradient-sphere about-sphere-2"
      />
      <div className="w-full h-full md:px-30 px-5">
        <TitleHeader
          title="Experience"
          text="My real world experiences where I collaborated in development environments"
          number="04"
        />
        <div className="timeline-container relative flex flex-col mt-20">
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 w-1 h-full bg-gray-700 rounded-full"></div>
          <div className="progress-line absolute left-1/2 transform -translate-x-1/2 top-0 w-1 h-full bg-gradient-to-b from-blue-400 via-pink-200 to-purple-400 origin-top rounded-full"></div>
          <div className="flex flex-col gap-20">
            {expCards.map((card, index) => (
              <div
                key={index}
                className="timeline-card flex flex-col xl:flex-row gap-10 xl:gap-20 relative"
              >
                <div className="xl:w-1/3 card-image">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-auto rounded-lg object-cover shadow-lg"
                  />
                </div>
                <div className="xl:w-1/3 flex flex-col gap-6 card-text lg:ml-60">
                  <div className="flex items-start gap-5">
                    <div className="absolute left-1/2 -translate-x-88 top-0 z-20">
                      <img
                        src={card.logo}
                        alt="logo"
                        className="w-12 h-12 md:w-16 md:h-16 object-contain rounded-full border-4 border-white bg-gray-900 shadow-lg relative z-10"
                      />
                    </div>
                    <div>
                      <h1 className="font-medium text-2xl md:text-3xl text-white-50">
                        {card.title}
                      </h1>
                      <p className="text-[#839cb5] italic mt-5">
                        What we learned
                      </p>
                      <ul className="list-disc ms-5 mt-5 flex flex-col gap-3 text-[#d4d4d4]">
                        {card.whatwedid.map((did, index) => (
                          <li key={index} className="text-base md:text-lg">
                            {did}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
