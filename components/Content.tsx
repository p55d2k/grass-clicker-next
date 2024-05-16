import { Item, buyItem } from "@/constants/items";
import Image from "next/image";
import React from "react";
import toast from "react-hot-toast";

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
  return (
    <div className="h-screen w-full md:max-h-[600px] overflow-y-auto p-4 md:p-6 lg:p-8 flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-4 lg:space-x-7 xl:space-x-10 items-start justify-start">
      <div
        className="w-full h-[200px] md:h-[500px] cursor-pointer active:scale-95 transition-all duration-100 ease-in-out"
        onClick={onClick}
      >
        <Image
          src="/grass.webp"
          alt="hero"
          height={20}
          width={20}
          unoptimized
          className="w-full h-full border-white border-2 rounded-lg"
        />
      </div>
      <div className="w-full h-[400px] md:h-[500px] rounded-lg bg-green-500 bg-opacity-50 border-white border-2 border-opacity-70 p-1 overflow-y-scroll">
        <div className="flex flex-col w-full space-y-2 p-2">
          {items.map((item, index) => (
            <div
              key={index}
              onClick={() => {
                const newItems: Item[] | null = buyItem(
                  item,
                  items,
                  setItems,
                  amount,
                  setAmount,
                  perSecond,
                  setPerSecond,
                  grassPerClick,
                  setGrassPerClick,
                );

                if (newItems === null) {
                  toast.error("You don't have enough grass!");
                } else {
                  toast.success("Item bought!")
                  setItems(newItems);
                }
              }}
              className={`w-full bg-white transition-all duration-200 ease-in-out hover:active:scale-95 ${
                amount < item.price ? "opacity-60 bg-red-500" : "cursor-pointer"
              } bg-opacity-40 p-4 flex flex-col items-center justify-center rounded-lg border-white border-2`}
            >
              <h1 className="text-2xl">{item.name}</h1>
              <p className="text-sm">{item.description}</p>
              <div className="flex flex-row space-x-2 divide-x-2 divide-black">
                <p className="text-md">
                  Costs&nbsp;
                  <span className="text-blue-500">{item.price}</span>
                  &nbsp;grass
                </p>
                <p className="text-md pl-2 text-blue-500">
                  Amount: {item.amount}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Content;
