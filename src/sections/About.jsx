import { Tut } from "../../public/models/Tutankhamun_gold_mask";
import { Canvas } from "@react-three/fiber";
import GradientSpheres from "../components/GradientSphere";
import TitleHeader from "../components/TitleHeader";
import { OrbitControls } from "@react-three/drei";
import { socialLinks } from "../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  useGSAP(() => {
    gsap.from("#card", {
      opacity: 0,
      y: 60,
      stagger: 0.2,
      duration: 1.5,
      ease: "power3.inOut",
      scrollTrigger: {
        trigger: "#about",
        start: "top center"
      }
    });

    gsap.from(".animated-text", {
      opacity: 0,
      y: 30,
      stagger: 0.15,
      duration: 1,
      ease: "power3.inOut",
      scrollTrigger: {
        trigger: "#about",
        start: "top center",
        toggleActions: "restart none none reverse"
      }
    });

    gsap.from("#card2", {
      opacity: 0,
      x: -50,
      stagger: 0.15,
      duration: 1.5,
      ease: "power3.inOut",
      scrollTrigger: {
        trigger: "#about",
        start: "top center",
        toggleActions: "restart none none reverse"
      }
    });

    gsap.from("#card3", {
      opacity: 0,
      x: 50,
      stagger: 0.15,
      duration: 1.5,
      ease: "power3.inOut",
      scrollTrigger: {
        trigger: "#about",
        start: "top center",
        toggleActions: "restart none none reverse"
      }
    });
  }, []);

  return (
    <section
      id="about"
      className="relative flex-center overflow-hidden px-5 md:p-30"
    >
      <GradientSpheres
        sphere1Class="about-gradient-sphere about-sphere-1"
        sphere2Class="about-gradient-sphere about-sphere-2"
      />

      <div className="container relative z-10 my-20 h-full w-full md:my-40">
        <TitleHeader
          title="About Me"
          text="Passionate creator, Lifelong learner"
          number="01"
        />

        <div className="mt-10 md:mt-20">
          <div className="grid grid-cols-1 items-start gap-5 md:grid-cols-12">
            <div className="col-span-12 md:col-span-7">
              <div
                id="card2"
                className="card-glow w-full rounded-2xl bg-black-300 p-10"
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  e.currentTarget.style.setProperty(
                    "--x",
                    `${e.clientX - rect.left}px`
                  );
                  e.currentTarget.style.setProperty(
                    "--y",
                    `${e.clientY - rect.top}px`
                  );
                }}
              >
                <div>
                  <img
                    className="w-16 md:w-20"
                    src="/images/react.png"
                    alt="react"
                  />
                </div>
                <div className="mt-5">
                  <h1 className="text-3xl text-blue-50 md:text-4xl">
                    Hana Mohamed AbdelHamid
                  </h1>
                  <p className="mt-4 md:text-xl">
                    I am a Frontend Web Developer (Reactjs) based in Egypt,
                    passionate about creating websites that are both functional
                    and enjoyable to use. As a Computer Science student at
                    Helwan University, my journey has taken me through different
                    fields and industries, which has shaped the way I approach
                    problems and find creative solutions.
                  </p>
                </div>
              </div>
            </div>

            <div id="card3" className="col-span-12 md:col-span-5">
              <div className="h-80 w-full rounded-2xl bg-[#101827] hover:cursor-grab md:h-132 lg:h-94">
                <Canvas
                  camera={{ position: [0, 0, 5], fov: 50 }}
                  style={{ width: "100%", height: "100%" }}
                >
                  <ambientLight intensity={0.3} />
                  <directionalLight position={[5, 5, 5]} intensity={1.2} />
                  <group scale={0.029} position={[0, -1.8, 0]}>
                    <Tut />
                  </group>
                  <OrbitControls enableZoom={false} />
                </Canvas>
              </div>
            </div>

            <div id="card" className="col-span-12 md:col-span-6">
              <div
                className="card-glow rounded-2xl bg-black-300 p-10"
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  e.currentTarget.style.setProperty(
                    "--x",
                    `${e.clientX - rect.left}px`
                  );
                  e.currentTarget.style.setProperty(
                    "--y",
                    `${e.clientY - rect.top}px`
                  );
                }}
              >
                <h1 className="animated-text gradient-title text-2xl font-medium md:text-3xl">
                  Web Design
                </h1>
                <p className="animated-text mt-3 max-w-96 text-base md:text-lg">
                  I design visually appealing and intuitive user interfaces that
                  align with your brand. My goal is to create layouts that not
                  only look great but also enhance usability, ensuring visitors
                  enjoy seamless interaction on every device.
                </p>
              </div>
            </div>

            <div id="card" className="col-span-12 md:col-span-6">
              <div
                className="card-glow rounded-2xl bg-black-300 p-10"
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  e.currentTarget.style.setProperty(
                    "--x",
                    `${e.clientX - rect.left}px`
                  );
                  e.currentTarget.style.setProperty(
                    "--y",
                    `${e.clientY - rect.top}px`
                  );
                }}
              >
                <h1 className="animated-text gradient-title text-2xl font-medium md:text-3xl">
                  Web Development
                </h1>
                <p className="animated-text mt-3 max-w-96 text-base md:text-lg">
                  I build fast, responsive, and scalable websites using modern
                  technologies. Whether it’s a simple landing page or a
                  full-featured web application, I focus on writing clean code
                  and delivering smooth, user-friendly experiences.
                </p>
              </div>
            </div>

            <div id="card" className="col-span-12 md:col-span-6">
              <div
                className="card-glow rounded-2xl bg-black-300 p-7"
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  e.currentTarget.style.setProperty(
                    "--x",
                    `${e.clientX - rect.left}px`
                  );
                  e.currentTarget.style.setProperty(
                    "--y",
                    `${e.clientY - rect.top}px`
                  );
                }}
              >
                <div className="flex flex-col justify-between">
                  {["BE YOURSELF!", "BE DIFFERENT!", "BUILD DIFFERENT!"].map(
                    (text, index) => (
                      <h1
                        key={index}
                        className="animated-text gradient-title text-3xl font-bold md:text-4xl"
                      >
                        {text}
                      </h1>
                    )
                  )}
                </div>
              </div>
            </div>

            <div
              id="card3"
              className="col-span-12 grid h-full grid-cols-2 gap-5 md:col-span-6"
            >
              {socialLinks.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-full"
                >
                  <div
                    className="card-glow group h-full w-full cursor-pointer rounded-2xl bg-black-300 p-7"
                    onMouseMove={(e) => {
                      const rect = e.currentTarget.getBoundingClientRect();
                      e.currentTarget.style.setProperty(
                        "--x",
                        `${e.clientX - rect.left}px`
                      );
                      e.currentTarget.style.setProperty(
                        "--y",
                        `${e.clientY - rect.top}px`
                      );
                    }}
                  >
                    <div className="flex h-full items-center justify-between duration-300 hover:-translate-y-2">
                      <div className="flex items-center">
                        <img
                          src={item.icon}
                          alt={item.name}
                          className="scale-70 -ms-5 md:scale-80 lg:ms-5"
                        />
                        <h1 className="gradient-title ml-0 text-lg font-medium md:ml-5 md:text-2xl lg:ml-5">
                          {item.name}
                        </h1>
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
