import React from "react";
import Image from "next/image";
import logo from "@/assets/logo.png"

const Footer = () => {
  return (
    <footer className="bg-[#0b0c0f] text-white">
      <div className="container mx-auto flex h-16 items-center justify-between px-6">

        {/* Logo */}
        <div className="flex items-center gap-2">
           <Image

              src= {logo}
              alt= "fitlog"
              width= {20}
              height= {20}
            
            
            />

          <h2 className="text-sm font-bold tracking-wide">
            FITLOG
          </h2>
        </div>


        {/* Copyright */}
        <p className="text-xs text-gray-500">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>

      </div>
    </footer>
  );
};

export default Footer;