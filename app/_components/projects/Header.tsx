import useIndex from "@/app/_hooks/useIndex";
import { BsCalculator, BsCalendar2Date, BsDpad, BsHouseHeart, BsKeyboard } from "react-icons/bs";

const Header = () => {
  const props = [
    {
      name: "Streakar",
      icon: <BsCalendar2Date className="size-9 mx-2 text-secondary dark:text-txt-primary" />,
      date: "Jun '24",
    },
    {
      name: "keyNkong",
      icon: <BsKeyboard className="size-12 mx-2 text-secondary dark:text-txt-primary" />,
      date: "Mar '24",
    },
    {
      name: "calc",
      icon: <BsCalculator className="size-8 mx-2 text-secondary dark:text-txt-primary" />,
      date: "Dec '23",
    },
    {
      name: "Simon Game",
      icon: <BsDpad className="size-8 mx-2 text-secondary dark:text-txt-primary" />,
      date: "Dec '23",
    },
    {
      name: "Hotel Hive",
      icon: <BsHouseHeart className="size-8 mx-2 text-secondary dark:text-txt-primary" />,
      date: "Nov '23",
    },
  ];
  const {idx, setIdx} = useIndex()
  const w = window.innerWidth/5
  return (
    <div className="w-full h-16 mb-1">
      <div className="h-0.5 bg-txt-alt"></div>
      <div className="relative flex items-center h-full">
        {props.map((prop, i) => (
          <div
            key={`project-header-item-${i}`}
            onClick={() => setIdx(i)}
           className={`w-1/5 group box-content h-3/4 flex justify-center md:justify-start items-center text-secondary dark:text-txt-primary cursor-pointer mr-1 ${i !== props.length-1 && 'border-r-2'} border-txt-alt relative`}>
            {prop.icon}
            <div className="hidden md:block ">
              <p className={`font-semibold group-hover:text-secondary dark:group-hover:text-txt-primary text-txt-alt ${idx === i && 'text-[#81B64C] dark:text-accent'}`}>{prop.name}</p>
              <p className="text-xs">{prop.date}</p>
            </div>
          </div>
        ))}
        <div style={{left: idx*w}} className="absolute w-[19.5%] top-16 h-0.5 bg-accent transition-all duration-300"></div>
      </div>
      <div className="h-0.5 bg-txt-alt"></div>
    </div>
  );
};

export default Header;
