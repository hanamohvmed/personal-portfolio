import { Github, Link2 } from "lucide-react";
import { slides } from "../constants";
import { useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  function prevSlide() {
    setCurrentSlide(
      (prev) => (prev - 1 + (slides.length - 1)) % (slides.length - 1)
    );
  }
  function nextSlide() {
    setCurrentSlide((prev) => (prev + 1) % (slides.length - 1));
  }

  useGSAP(() => {
    gsap.to(".slider-item", {
      x: `-${currentSlide * 63}vw`,
      opacity: 1,
      duration: 1.2,
      ease: "expo.out"
    });

    gsap.fromTo(
      `.slider-item:nth-child(${currentSlide + 2}) img`,
      {
        scale: 2
      },
      {
        scale: 1,
        duration: 1,
        ease: "power2.out"
      }
    );
  }, [currentSlide]);

  return (
    <div className="relative">
      <div className="w-full relative lg:h-[60vh] md:h-[40vh] h-[60vh]">
        <div className="carousel-gradient-left-box md:w-52 w-16 h-full absolute bottom-0 left-0 z-20"></div>
        <div className="carousel-gradient-right-box md:w-52 w-16 h-full absolute bottom-0 right-0 z-20"></div>
        <div className="absolute w-full -left-[43vw] top-0">
          <div className="flex w-full lg:h-[60vh] md:h-[40vh] h-[60vh] items-center gap-[3vw]">
            {slides.map((slide, index) => (
              <div
                className="slider-item w-[60vw] h-full flex-none relative overflow-hidden rounded-xl"
                key={index}
              >
                <img
                  src={slide.img}
                  alt="slide"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute w-full h-20 bottom-0 left-0 bg-black-300 bg-opacity-90 px-5">
                  <div className="w-full h-full flex justify-between items-center">
                    <div className="flex-center gap-2">
                      <p className="md:text-2xl text-white-50 opacity-80">
                        {index}.
                      </p>
                      <p className="md:text-2xl text-white-50 opacity-80">
                        {slide.title}
                      </p>
                    </div>
                    <div className="flex-center gap-5">
                      <p className="text-xl hidden md:block text-white-50 opacity-80">
                        Preview Project
                      </p>
                      <div className="flex justify-between gap-5">
                        <a href={slide.github} target="_blank">
                          <Github />
                        </a>
                        <a href={slide.link} target="_blank">
                          <Link2 />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-10 text-white-50 flex justify-end gap-5 md:-translate-x-32 -translate-x-5">
        <div
          onClick={prevSlide}
          className="rounded-full cursor-pointer bg-blue-50 hover:bg-pink-100 duration-300 active:scale-90 transition-all w-12 h-12 flex-center"
        >
          <img src="/images/CaretLeft.svg" alt="left" className="w-5 h-5" />
        </div>

        <div
          onClick={nextSlide}
          className="rounded-full cursor-pointer bg-blue-50 hover:bg-pink-100 duration-300 active:scale-90 transition-all w-12 h-12 flex-center"
        >
          <img src="/images/CaretRight.svg" alt="right" className="w-5 h-5" />
        </div>
      </div>
    </div>
  );
}
