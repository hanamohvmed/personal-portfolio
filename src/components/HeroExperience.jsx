import { Canvas } from "@react-three/fiber";
import { HeroGirl } from "../../public/models/68a0b96b6db44d17d1003c88";
import { Suspense } from "react";
import { useInView } from "react-intersection-observer";

export default function HeroExperience() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <div ref={ref} className="w-full h-full">
      {inView && (
        <Canvas dpr={1} shadows={false} gl={{ antialias: true }}>
          <ambientLight intensity={0.7} />
          <directionalLight position={[0, 1, 5]} intensity={1.5} />
          <Suspense fallback={null}>
            <HeroGirl scale={9} position={[0, -13.5, 0]} />
          </Suspense>
        </Canvas>
      )}
    </div>
  );
}
