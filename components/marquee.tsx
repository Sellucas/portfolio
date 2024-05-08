import { marqueeData } from "@/constants";

export const Marquee = () => {
  return (
    <div className="w-full -skew-y-3 inline-flex overflow-hidden bg-blue-700 py-4 text-white">
      <ul className="flex items-center justify-center md:justify-start [&_li]:ml-12 animate-infinite-scroll whitespace-nowrap">
        {marqueeData.map((item, index) => (
          <li className="flex items-center" key={index}>
            <span className="text-4xl mr-12">•</span>
            <div className="flex flex-col">
              <p className="font-semibold text-[6rem]">{item.title}</p>
              <p className="text-2xl font-mono">{item.description}</p>
            </div>
          </li>
        ))}
      </ul>
      <ul
        className="flex items-center justify-center md:justify-start [&_li]:ml-12 animate-infinite-scroll whitespace-nowrap"
        aria-hidden="true"
      >
        {marqueeData.map((item, index) => (
          <li className="flex items-center" key={index}>
            <span className="text-4xl mr-12">•</span>
            <div className="flex flex-col">
              <p className="font-semibold text-[6rem]">{item.title}</p>
              <p className="text-2xl font-mono">{item.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
