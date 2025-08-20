export default function TitleHeader({ title, text, number }) {
  return (
    <div className="flex justify-between items-center">
      <div className="">
        <h1 className="uppercase gradient-title font-semibold md:text-5xl text-4xl">
          {title}
        </h1>
        <p className="md:text-2xl md:mt-5">{text}</p>
      </div>
      <div className="md:flex hidden items-center gap-7">
        <div className="w-36 border border-white-50"></div>
        <p className="gradient-title text-5xl">{number}</p>
      </div>
    </div>
  );
}
