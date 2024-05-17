"use client";

import { Item, resetItems } from "@/constants/items";
import { Urbanist } from "next/font/google";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import Link from "next/link";

const urbanist = Urbanist({
  weight: ["400", "700", "900"],
  subsets: ["latin"],
});

interface HeaderProps {
  amount: number;
  perSecond: number;
  grassPerClick: number;
  setAmount: (amount: number) => void;
  setPerSecond: (perSecond: number) => void;
  setGrassPerClick: (grassPerClick: number) => void;
  setItems: (items: Item[]) => void;
}

const Header = ({
  amount,
  perSecond,
  grassPerClick,
  setAmount,
  setGrassPerClick,
  setPerSecond,
  setItems,
}: HeaderProps) => {
  useGSAP(() => {
    gsap.to("#mainheader", { opacity: 1, delay: 0.2, y: 0 });
    gsap.to("#subtitles", { opacity: 1, delay: 0.4, y: 0 });
    gsap.to("#links", { opacity: 1, delay: 0.5, y: 0 });
  }, []);

  return (
    <header className="p-5 flex flex-col items-center justify-center">
      <h1
        id="mainheader"
        className={`${urbanist.className} opacity-0 translate-y-20 text-5xl sm:text-6xl md:text-7xl text-center font-light uppercase`}
      >
        grass clicker
      </h1>
      <div
        id="subtitles"
        // md:divide-y-0 divide-y-2 md:divide-x-2 divide-black
        className="sm:pt-4 opacity-0 translate-y-20 flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 items-center justify-center"
      >
        <p className="text-xl md:text-2xl lg:text-3xl text-center font-light">
          <span className="text-[#3C6B0C] text-2xl md:text-3xl lg:text-4xl">
            {amount}
          </span>{" "}
          grass
        </p>
        <p className="pt-2 md:pt-0 md:pl-4 text-xl md:text-2xl lg:text-3xl text-center font-light">
          <span className="text-[#3C6B0C] text-2xl md:text-3xl lg:text-4xl">
            {perSecond}
          </span>{" "}
          grass/s
        </p>
        <p className="pt-2 md:pt-0 md:pl-4 text-xl md:text-2xl lg:text-3xl text-center font-light">
          <span className="text-[#3C6B0C] text-2xl md:text-3xl lg:text-4xl">
            {grassPerClick}
          </span>{" "}
          grass/click
        </p>
      </div>
      <div
        id="links"
        className="pt-2 text-[#3C6B0C] opacity-0 translate-y-20 hidden sm:flex flex-row space-x-6 items-center justify-center"
      >
        <button
          className="text-lg md:text-2xl text-center font-light hover:text-[#52960D] transition-all duration-200 ease-in-out"
          onClick={() => {
            if (confirm("Are you sure you want to reset the game?")) {
              setItems(resetItems);
              setAmount(0);
              setPerSecond(0);
              setGrassPerClick(1);
            }
          }}
        >
          Reset
        </button>
        <Link
          href="https://github.com/p55d2k/grass-clicker-next/"
          target="_blank"
          className="text-lg md:text-2xl text-center font-light hover:text-[#52960D] transition-all duration-200 ease-in-out"
        >
          Source Code
        </Link>
        <p className="text-lg md:text-2xl text-center font-light text-black">
          By p55d2k and ski3r3n
        </p>
      </div>
    </header>
  );
};

export default Header;
