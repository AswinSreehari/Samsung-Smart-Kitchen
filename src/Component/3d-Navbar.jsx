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
      <Link to="/" className="absolute left-2 top-2 sm:left-3 sm:top-3 z-10">
        <span className="bg-gray-700 text-white rounded-full shadow flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10">
          <MdHome size={18} className="sm:w-6 sm:h-6" />
        </span>
      </Link>
      <div className="flex flex-col items-center pt-2 pb-1 sm:pt-3 sm:pb-2">
        <h2 className="font-bold text-xs sm:text-lg mt-1 sm:mt-0 mb-1 sm:mb-3 text-center">
          Experience Samsung Kitchen
        </h2>
        <nav className="flex flex-col gap-2 sm:flex-row sm:gap-5 w-full justify-center items-center">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleClick(item)}
              className={`text-xs sm:text-base font-semibold px-2 pb-1 cursor-pointer transition ${
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
