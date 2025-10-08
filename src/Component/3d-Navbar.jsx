import { useState } from "react";
import { MdHome } from "react-icons/md";
import { Link } from "react-router-dom";

const navItems = [
  { label: "Kitchen View", animation: ["Idle"] },
  { label: "Fridge", animation: ["Fridge", "Fridge2"] },
  { label: "Chimney", animation: ["Chimney"] },
  { label: "MicrowaveOven", animation: ["StoveOven"] },
  { label: "Washing Machine", animation: ["WashM"] },
  { label: "Vaccum Robot", animation: ["Vaccum"] },
];

export default function ThreeDNavbar({ onSelect }) {
  const [active, setActive] = useState("Kitchen View");

  const handleClick = (item) => {
    setActive(item.label);
    if (onSelect) onSelect(item.animation);
  };

  return (
    <div className="relative w-full bg-white border-b border-gray-200">
      <Link to="/" className="absolute left-3 top-3 sm:left-4 sm:top-5 z-10">
        <span className="bg-gray-700 text-white rounded-full shadow flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12">
          <MdHome size={24} className="sm:size-7" />
        </span>
      </Link>
      <div className="flex flex-col items-center pt-4 pb-2 sm:pt-6 sm:pb-4">
        <h2 className="font-bold text-base sm:text-2xl mt-2 sm:mt-0 mb-2 sm:mb-6 text-center">
          Experience Samsung Kitchen
        </h2>
        <nav className="flex flex-col gap-3 sm:flex-row sm:gap-8 w-full justify-center items-center">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleClick(item)}
              className={`text-sm sm:text-lg font-semibold px-2 pb-1 sm:pb-1 cursor-pointer transition ${
                active === item.label
                  ? "text-black underline underline-offset-4 decoration-2"
                  : "text-gray-700 hover:text-black"
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
}
