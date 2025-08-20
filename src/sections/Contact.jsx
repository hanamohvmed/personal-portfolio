import { Canvas } from "@react-three/fiber";
import ContactForm from "../components/ContactForm";
import TitleHeader from "../components/TitleHeader";
import { Text3D } from "@react-three/drei";
import GradientSpheres from "../components/GradientSphere";

export default function Contact() {
  return (
    <section id="contact" className="flex-center relative md:p-30 md:pb-0 px-5">
      <GradientSpheres
        sphere1Class="about-gradient-sphere about-sphere-1"
        sphere2Class="about-gradient-sphere about-sphere-2"
      />
      <div className="w-full h-full container md:my-40 my-20">
        <TitleHeader
          title="Contact Me"
          text="Feel free to reach out for any questions or opportunities"
          number="05"
        />
        <div className="mt-20">
          <div className="grid grid-cols-12">
            <div className="md:col-span-6 col-span-12 bg-black p-10 rounded-2xl z-100">
              <ContactForm />
            </div>
            <div className="md:col-span-6 col-span-12">
              <div className="w-full h-full md:m-0 -mt-32">
                <Canvas>
                  <ambientLight intensity={2} />
                  <directionalLight />
                  <group>
                    <Text3D
                      position={[-2, 0, -2]}
                      curveSegments={32}
                      bevelEnabled
                      bevelSize={0.04}
                      bevelThickness={0.1}
                      height={0.5}
                      lineHeight={0.5}
                      letterSpacing={-0.06}
                      size={1.5}
                      font="/fonts/Inter_Bold.json"
                    >
                      {`hello\nworld`}
                      <meshNormalMaterial />
                    </Text3D>
                  </group>
                </Canvas>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
