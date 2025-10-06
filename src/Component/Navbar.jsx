import { FiSearch, FiShoppingCart, FiUser } from "react-icons/fi";

export default function Navbar() {
  return (
    <header className="w-full bg-white border-b border-gray-200">
      <div className="w-full mx-auto flex items-center justify-between py-3 px-4">
        {/* Left: Logo and Nav */}
        <div className="flex items-center gap-10">
          {/* Logo */}
          <span className="font-bold text-2xl tracking-wider">SAMSUNG</span>
          {/* Nav Links */}
          <nav className="hidden md:flex items-center gap-7 text-base font-medium text-gray-700">
            <a href="#" className="hover:text-black">Shop</a>
            <a href="#" className="hover:text-black">Mobile</a>
            <a href="#" className="hover:text-black">TV & AV</a>
            <a href="#" className="hover:text-black">Appliances</a>
            <a href="#" className="hover:text-black">Computing & Displays</a>
            <a href="#" className="hover:text-black">Accessories</a>
            <a href="#" className="hover:text-black">SmartThings</a>
            <a href="#" className="hover:text-black">AI</a>
          </nav>
        </div>

        {/* Right: Search/Support/Icons */}
        <div className="flex items-center gap-6">
          {/* Support links */}
          <div className="hidden md:flex items-center gap-2 text-gray-700 text-sm font-semibold">
            <span className="hover:text-black cursor-pointer">Support</span>
            <span className="hover:text-black cursor-pointer">For Business <span className="inline-block transform -rotate-45">&rarr;</span></span>
          </div>
          {/* Search box */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="rounded-full pl-10 pr-4 py-2 bg-gray-100 text-gray-800 placeholder-gray-400 w-36 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          </div>
          {/* Cart and User icons */}
          <FiShoppingCart className="text-gray-700 hover:text-black cursor-pointer" size={22} />
          <FiUser className="text-gray-700 hover:text-black cursor-pointer" size={22} />
        </div>
      </div>
    </header>
  );
}
