import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-[#020618] backdrop-blur border-b-[2px] border-[#00ce7c] text-white px-6 py-4 flex items-center justify-between w-full shadow">
      <div className="flex items-center space-x-2">
        <span
          className="font-lobster  text-3xl text-green-400"
          style={{ fontFamily: "var(--font-lobster)" }}
        >
          TaxiGo
        </span>
      </div>

      <div className="hidden md:flex items-center space-x-8 text-sm">
        <a href="#" className="hover:text-[#00DC82]">
          History
        </a>
        <a href="#" className="hover:text-[#00DC82]">
          Plans
        </a>
        <a href="#" className="hover:text-[#00DC82]">
          Newly Launched
        </a>
      </div>

      <div className="flex items-center space-x-4 text-lg">
        <button className="hover:text-[#00DC82]">
          <i className="fas fa-search"></i>
        </button>
        <button className="hover:text-[#00DC82]">
          <i className="fas fa-moon"></i>
        </button>
        <a
          href="https://github.com/"
          target="_blank"
          className="hover:text-[#00DC82]"
        >
          <i className="fab fa-github"></i>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
