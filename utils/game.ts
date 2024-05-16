import { resetItems } from "@/constants/items";

export const addGrassAndCheck = (
  addAmount: number,
  curAmount: number,
  setAmount: any,
  localStorage: any,
  setItems: any,
  setPerSecond: any,
  setGrassPerClick: any
) => {
  setAmount((curAmount: number) => curAmount + addAmount);
  if (curAmount >= 1000000000000000) {
    alert("You have won the game! Restart?");
    setItems(resetItems);
    setAmount(0);
    setPerSecond(0);
    setGrassPerClick(1);
  } else if (Number.isNaN(curAmount)) {
    setItems(resetItems);
    setAmount(0);
    setPerSecond(0);
    setGrassPerClick(1);
  }
};
