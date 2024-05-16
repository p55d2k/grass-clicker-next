"use client";

import { useState, useEffect, useRef } from "react";
import { Toaster } from "react-hot-toast";
import Image from "next/image";

import { addGrassAndCheck } from "@/utils/game";
import { Item, resetItems } from "@/constants/items";

import Content from "@/components/Content";
import Header from "@/components/Header";

export default function Home() {
  const [amount, setAmount] = useState<number>(0);
  const [grassPerClick, setGrassPerClick] = useState<number>(1);
  const [perSecond, setPerSecond] = useState<number>(0);
  const [items, setItems] = useState<Item[]>(resetItems());
  const amountRef = useRef(amount);
  const perSecondRef = useRef(perSecond);
  const lastTimeRef = useRef<number>(0);

  useEffect(() => {
    amountRef.current = amount;
  }, [amount]);

  useEffect(() => {
    perSecondRef.current = perSecond;
  }, [perSecond]);

  useEffect(() => {
    const addGrassBasedOnTime = (deltaTime: number) => {
      const grassToAdd = (deltaTime / 1000) * perSecondRef.current;
      addGrassAndCheck(grassToAdd, amountRef.current, setAmount, setItems);
    };

    const tick = (time: number) => {
      if (lastTimeRef.current !== 0) {
        const deltaTime = time - lastTimeRef.current;
        addGrassBasedOnTime(deltaTime);
      }
      lastTimeRef.current = time;
      requestAnimationFrame(tick);
    };

    const id = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(id);
    };
  }, []);
  return (
    <div className="w-full max-h-screen">
      <Image
        unoptimized
        alt="Grass Clicker Background"
        src="/background.png"
        layout="fill"
        objectFit="cover"
        className="absolute z-[-4] opacity-80 w-full h-full"
      />
      <div className="h-screen p-3">
        <Header amount={parseInt(amount.toString())} perSecond={perSecond} />
        <Content
          items={items}
          setItems={setItems}
          amount={amount}
          setAmount={setAmount}
          perSecond={perSecond}
          setPerSecond={setPerSecond}
          grassPerClick={grassPerClick}
          setGrassPerClick={setGrassPerClick}
          onClick={() =>
            addGrassAndCheck(grassPerClick, amount, setAmount, setItems)
          }
        />
      </div>
      <Toaster position="bottom-center" reverseOrder={false} />
    </div>
  );
}
