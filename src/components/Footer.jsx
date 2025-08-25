import { footerIconsList } from "../constants";

export default function Footer() {
  return (
    <div className="w-full flex-center flex-col md:gap-6 gap-5 bg-black-300 py-10 scale-z-200">
      <p>Thank you for viewing! Feel free to connect.</p>
      <div className="underline md:flex-row flex flex-col items-center">
        <a className="mr-3 hover:text-[#22a1f1]" href="#hero">
          Home
        </a>
        <a className="mr-3 hover:text-[#22a1f1]" href="#about">
          About
        </a>
        <a className="mr-3 hover:text-[#22a1f1]" href="#techstack">
          TechStack
        </a>
        <a className="mr-3 hover:text-[#22a1f1]" href="#projects">
          Projects
        </a>
        <a className="mr-3 hover:text-[#22a1f1]" href="#experience">
          Experience
        </a>
        <a className="mr-3 hover:text-[#22a1f1]" href="#contact">
          Contact
        </a>
      </div>
      <div className="flex items-center md:gap-10 gap-6">
        {footerIconsList.map((icon, index) => (
          <a
            href={icon.href}
            target="_blank"
            key={index}
            className="cursor-pointer hover:-translate-y-3 transition-all duration-700"
          >
            <img src={icon.icon} alt={icon.name} className="md:size-8 size-6" />
          </a>
        ))}
      </div>
      <p className="font-regular md:text-lg text-sm -mb-7">
        &#169; 2025 <span className="text-[#22a1f1]">HANA</span> All rights
        reserved
      </p>
    </div>
  );
}
