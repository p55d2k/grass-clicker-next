"use client";

import { useState, useEffect, useRef } from "react";
import { Toaster } from "react-hot-toast";
import Image from "next/image";

import { addGrassAndCheck } from "@/utils/game";
import { loadGame, saveGame } from "@/utils/storage";
import { Item, resetItems } from "@/constants/items";

import Content from "@/components/Content";
import Header from "@/components/Header";

export default function Home() {
  const [amount, setAmount] = useState<number>(0);
  const [grassPerClick, setGrassPerClick] = useState<number>(1);
  const [perSecond, setPerSecond] = useState<number>(0);
  const [items, setItems] = useState<Item[]>(resetItems);
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
        localStorage,
        setItems,
        setPerSecond,
        setGrassPerClick
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
        alt="Grass Clicker Background"
        src="/background.png"
        width={100}
        height={100}
        unoptimized
        className="absolute z-[-4] opacity-70 w-full min-h-[160vmin]"
      />
      <div className="h-screen p-3">
        <Header
          amount={parseInt(amount.toString())}
          perSecond={perSecond}
          grassPerClick={grassPerClick}
          setAmount={setAmount}
          setPerSecond={setPerSecond}
          setGrassPerClick={setGrassPerClick}
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
              localStorage,
              setItems,
              setPerSecond,
              setGrassPerClick
            )
          }
        />
      </div>
      <Toaster position="bottom-center" reverseOrder={false} />
    </div>
  );
}
