export default function TechIcon({ icon }) {
  return (
    <div className="md:w-32 md:h-32 w-20 h-20 ng-black-300 flex-center gradient-border hover:-translate-y-3 transition-all duration-300 marquee-item flex-none">
      <img src={icon.image} alt={icon.name} className="md:size-16 size-10" />
      <p className="absolute text-sm md:text-medium mt-14 md: md:mt-24">
        {icon.name}
      </p>
    </div>
  );
}
