"use client";

import { Item } from "@/constants/items";
import ShopItem from "./ShopItem";

import Image from "next/image";

import toast from "react-hot-toast";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { useEffect } from "react";

interface ContentProps {
  onClick?: () => void;
  items: Item[];
  setItems?: any;
  amount: number;
  setAmount: any;
  perSecond: number;
  setPerSecond: any;
  grassPerClick: number;
  setGrassPerClick: any;
}

const Content = ({
  items,
  onClick,
  setItems,
  amount,
  setAmount,
  perSecond,
  setPerSecond,
  grassPerClick,
  setGrassPerClick,
}: ContentProps) => {
  useGSAP(() => {
    gsap.to("#grass", { opacity: 1, delay: 0.7, x: 0, y: 0 });
    gsap.to("#shop", { opacity: 1, delay: 1, x: 0, y: 0 });
  }, []);

  useEffect(() => {
    const keyDownHandler = (e: any) => {
      if (e.key === " ") {
        onClick!();
        toast.error(
          "Hey staph it >:((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((",
          {
            duration: 10000000000000,
            style: {
              minWidth: "100vw",
            },
            icon: "😠😠😠😠😠😠😠😠😠😠😠",
          }
        );
      }
    };

    document.addEventListener("keydown", keyDownHandler);
    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  }, []);

  return (
    <div className="h-screen w-full md:max-h-[600px] overflow-y-auto p-4 md:p-6 lg:p-8 flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-4 lg:space-x-7 xl:space-x-10 items-start justify-start">
      <div
        id="grass"
        className="opacity-0 translate-y-20 md:translate-y-0 md:-translate-x-20 w-full h-[200px] md:h-[500px] cursor-pointer"
        onClick={onClick}
      >
        <Image
          src="/grass.webp"
          alt="hero"
          height={20}
          width={20}
          unoptimized
          className="w-full h-full border-white border-2 rounded-lg hover:active:scale-95 transition-all duration-100 ease-in-out"
        />
      </div>
      <div
        id="shop"
        className="opacity-0 -translate-y-20 md:translate-y-0 md:translate-x-20 w-full h-[400px] md:h-[500px] rounded-lg bg-green-500 bg-opacity-50 border-white border-2 border-opacity-70 p-1 overflow-y-scroll"
      >
        <div className="flex flex-col w-full space-y-2 p-2">
          {items.map((item, index) => (
            <ShopItem
              key={index}
              item={item}
              items={items}
              setItems={setItems}
              amount={amount}
              setAmount={setAmount}
              perSecond={perSecond}
              setPerSecond={setPerSecond}
              grassPerClick={grassPerClick}
              setGrassPerClick={setGrassPerClick}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Content;
