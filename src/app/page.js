"use client";
import { useState } from "react";
import Navbar from "./component/Navbar/Navbar";

export default function Home() {
  const [activeNav, setActiveNav] = useState(false);
  return (
    <div className=" h-screen w-full">
      <Navbar activeNav={activeNav} setActiveNav={setActiveNav} />
      <button
        className="absolute bottom-5 left-1/2 h-[40px] w-[100px] -translate-x-1/2 rounded-xl bg-teal-400 font-black text-white"
        onClick={() => {
          setActiveNav(!activeNav);
          console.log(activeNav);
        }}
      >
        Menu
      </button>
    </div>
  );
}
