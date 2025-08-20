import { useProgress } from "@react-three/drei";
import { useEffect } from "react";
import gsap from "gsap";

export default function Loader({ onLoaded }) {
  const { progress } = useProgress();

  useEffect(() => {
    if (progress === 100) {
      gsap.to(".loader-container", {
        opacity: 0,
        duration: 0.8,
        onComplete: () => onLoaded()
      });
    }
  }, [progress, onLoaded]);

  return (
    <div className="loader-container fixed inset-0 flex flex-col justify-center items-center bg-black z-[9999] text-white">
      <div className="text-2xl font-bold">Loading...</div>
      <div className="mt-4 w-64 bg-gray-700 rounded-full h-2 overflow-hidden">
        <div
          className="bg-white h-2 transition-all duration-300"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <p className="mt-3 text-sm">{Math.floor(progress)}%</p>
    </div>
  );
}
