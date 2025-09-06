"use client";
import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react"; // hamburger & close icons

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full shadow-md">
      <div className="flex items-center justify-center p-5 max-w-7xl mx-auto gap-10 ">
        
        <Image src="/CasaLogo.png" alt="Logo" width={90} height={60} />

      
        <ul className="hidden lg:flex gap-10 items-center">
          <li className="cursor-pointer">Services</li>
          <li className="cursor-pointer">How it works</li>
          <li className="cursor-pointer">Why is different</li>
          <li className="cursor-pointer">Reviews</li>
          <li className="cursor-pointer">Pricing</li>
          <li className="cursor-pointer">Contact</li>
          <li className="flex gap-3">
            <button className="bg-[#DFEDE3] py-2 px-5 rounded-full">Sign in</button>
            <button className="bg-black text-white py-2 px-5 rounded-full">
              Sign up
            </button>
          </li>
        </ul>

        
        <button
          className="lg:hidden ml-50 md:ml-96 "
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

    
      {isOpen && (
        <ul className="flex flex-col gap-5 items-center  bg-white p-5 lg:hidden">
          <li className="cursor-pointer">Services</li>
          <li className="cursor-pointer">How it works</li>
          <li className="cursor-pointer">Why is different</li>
          <li className="cursor-pointer">Reviews</li>
          <li className="cursor-pointer">Pricing</li>
          <li className="cursor-pointer">Contact</li>
          <li className="flex flex-col gap-3 w-full">
            <button className="bg-[#DFEDE3] py-2 px-5 rounded-full w-full">
              Sign in
            </button>
            <button className="bg-black text-white py-2 px-5 rounded-full w-full">
              Sign up
            </button>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
