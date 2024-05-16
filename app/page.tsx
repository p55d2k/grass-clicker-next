"use client";

import { useState, useEffect, useRef } from "react";
import { Toaster } from "react-hot-toast";
import Image from "next/image";

import { addGrassAndCheck } from "@/utils/game";
import { Item, SaveItem, resetItems } from "@/constants/items";

import Content from "@/components/Content";
import Header from "@/components/Header";
import { loadGame, reset, saveGame } from "@/utils/storage";

export default function Home() {
  const [amount, setAmount] = useState<number>(0);
  const [grassPerClick, setGrassPerClick] = useState<number>(1);
  const [perSecond, setPerSecond] = useState<number>(0);
  const [items, setItems] = useState<Item[]>(resetItems());
  const [loadedData, setLoadedData] = useState<boolean>(false);

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
      addGrassAndCheck(
        grassToAdd,
        amountRef.current,
        setAmount,
        setItems,
        localStorage
      );
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

  useEffect(() => {
    if (!loadedData) {
      const data: {
        items: Item[];
        grass: number;
        perSecond: number;
        grassPerClick: number;
      } | null = loadGame(localStorage);

      if (data) {
        setItems(data.items);
        setAmount(data.grass);
        setPerSecond(data.perSecond);
        setGrassPerClick(data.grassPerClick);
      }

      setLoadedData(true);
    }
  }, []);

  useEffect(() => {
    saveGame(items, amount, perSecond, grassPerClick, localStorage);
  }, [items, amount, perSecond, grassPerClick]);

  return (
    <div className="w-full">
      <Image
        unoptimized
        alt="Grass Clicker Background"
        src="/background.png"
        layout="fill"
        objectFit="cover"
        className="absolute z-[-4] opacity-80 w-full min-h-[150vh]"
      />
      <div className="h-screen p-3">
        <Header
          amount={parseInt(amount.toString())}
          perSecond={perSecond}
          grassPerClick={grassPerClick}
          setItems={setItems}
        />
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
            addGrassAndCheck(
              grassPerClick,
              amount,
              setAmount,
              setItems,
              localStorage
            )
          }
        />
      </div>
      <Toaster position="bottom-center" reverseOrder={false} />
    </div>
  );
}
