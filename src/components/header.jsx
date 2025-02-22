import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-slate-800 text-slate-50 border-b border-solid border-[rgba(255,255,255,0.1)]">
      <div className="px-6 md:px-12 py-4 max-w-[1200px] mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/evsu.png" className="sm:max-w-36 max-w-40" alt="EVSU Logo" />
        </div>

        <button
          className="md:hidden text-slate-50"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="size-[24px] cursor-pointer" /> : <Menu className="size-[24px] cursor-pointer" />}
        </button>

        <nav className={`absolute md:relative top-16 md:top-auto left-0 w-full md:w-auto bg-slate-800 md:bg-transparent transition-all duration-300 ease-in-out ${menuOpen ? "block" : "hidden"} md:flex md:ml-auto`}>
          <ul className="flex flex-col md:flex-row list-none gap-3 text-base md:gap-6 p-4 md:p-0">
            <li><a className="block hover:text-cyan-400 duration-75 ease-in-out" href="#home">Home</a></li>
            <li><a className="block hover:text-cyan-400 duration-75 ease-in-out" href="#events">Events</a></li>
            <li><a className="block hover:text-cyan-400 duration-75 ease-in-out" href="#about">About</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
