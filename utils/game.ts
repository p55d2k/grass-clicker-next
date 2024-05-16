import { reset } from "./storage";

export const addGrassAndCheck = (
  addAmount: number,
  curAmount: number,
  setAmount: any,
  localStorage: any
) => {
  setAmount((curAmount: number) => curAmount + addAmount);
  if (curAmount >= 1000000000000000) {
    alert("You have won the game! Restart?");
    reset(localStorage);
  } else if (Number.isNaN(curAmount)) {
    reset(localStorage);
  }
};
