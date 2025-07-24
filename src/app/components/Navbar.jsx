import React from "react";

const Navbar = () => {
  return (
    <nav class="bg-[#060A12] text-white px-6 py-3 flex items-center justify-between w-full shadow">
      <div class="flex items-center space-x-2">
       
        <span class="font-semibold text-3xl text-green-400">TaxiGo</span>
       
      </div>

      <div class="hidden md:flex items-center space-x-8 text-sm">
       
        <a href="#" class="hover:text-[#00DC82]">
          History
        </a>
        <a href="#" class="hover:text-[#00DC82]">
          Plans
        </a>
        <a href="#" class="hover:text-[#00DC82]">
          Newly Launched 
        </a>
      </div>

      <div class="flex items-center space-x-4 text-lg">
        <button class="hover:text-[#00DC82]">
          <i class="fas fa-search"></i>
        </button>
        <button class="hover:text-[#00DC82]">
          <i class="fas fa-moon"></i>
        </button>
        <a
          href="https://github.com/"
          target="_blank"
          class="hover:text-[#00DC82]"
        >
          <i class="fab fa-github"></i>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
