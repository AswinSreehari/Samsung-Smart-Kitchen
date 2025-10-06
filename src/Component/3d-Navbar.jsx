import { useState } from "react";
import { MdHome } from "react-icons/md";
import { Link } from "react-router-dom";

// const navItems = [
//   { label: "Kitchen View", animation: "Idle" },
//   { label: "Fridge", animation: "Fridge2" },
//   { label: "Chimney", animation: "Chimney" },
//   { label: "MicrowaveOven", animation: "StoveOven" },
//   { label: "Washing Machine", animation: "WashM" },
//   { label: "Vaccum Robot", animation: "Vaccum" },
// ];

const navItems = [
  { label: "Kitchen View", animation: ["Idle"] },
  { label: "Fridge", animation: ["Fridge", "Fridge2"] },
  { label: "Chimney", animation: ["Chimney"] },
  { label: "MicrowaveOven", animation: ["StoveOven"] },
  { label: "Washing Machine", animation: ["WashM"] },
  { label: "Vaccum Robot", animation: ["Vaccum"] },
];

export default function ThreeDNavbar({ onSelect }) {
  const [active, setActive] = useState(null);

  const handleClick = (item) => {
    setActive(item.label);
    if (onSelect) onSelect(item.animation); // Pass animation name to parent
  };

  return (
    <div className="relative w-full bg-white border-b border-gray-200">
      <Link to="/" className="absolute left-4 top-5">
        <span className="bg-gray-700 text-white rounded-full shadow flex items-center justify-center w-12 h-12">
          <MdHome size={28} />
        </span>
      </Link>

      <div className="flex flex-col items-center">
        <h2 className="font-bold text-2xl mt-4 mb-6 text-center">
          Experience Samsung Kitchen
        </h2>
        <nav className="flex gap-8 justify-center cursor-pointer">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleClick(item)}
              className={`text-lg font-semibold px-2 pb-1 cursor-pointer ${
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

