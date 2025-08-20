import TechIcon from "../components/TechIcon";
import TitleHeader from "../components/TitleHeader";
import { iconsList } from "../constants";

export default function TechStack() {
  return (
    <div className="w-full h-full" id="techstack">
      <div className="container mx-auto md:p-30 md:pb-0 p-5 ">
        <TitleHeader
          title={"Tech stack"}
          number={"02"}
          text={"My go-to tools for crafting solutions"}
        />
      </div>
      <div className="md:mt-20 mt-10 relative">
        <div className="tech-stack-gradient-left-box w-36 h-full absolute bottom-0 left-0 z-20"></div>
        <div className="tech-stack-gradient-right-box w-36 h-full absolute bottom-0 right-0 z-20"></div>
        <div className="marquee h-52 flex">
          <div className="marquee-box md:gap-12 gap-3">
            {iconsList.map((icon, index) => (
              <TechIcon key={`first-${index}`} icon={icon} />
            ))}
            {iconsList.map((icon, index) => (
              <TechIcon key={`sec-${index}`} icon={icon} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
