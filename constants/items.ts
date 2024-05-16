import { addGrassAndCheck } from "@/utils/game";

export interface Item {
  id: number;
  name: string;
  description: string;
  price: number;
  unlocked: boolean;
  amount: number;
  multiplier: number;
  effects: (
    perSecond: number,
    setPerSecond: any,
    grassPerClick: number,
    setGrassPerClick: any
  ) => void;
}

export const resetItems = (): Item[] => [
  {
    id: 1,
    name: "Aunty 帮你拿 grass",
    description:
      "Aunty feeling generous today so wholesome :) +0.5 clicks per second!",
    price: 10,
    multiplier: 1.2,
    unlocked: true,
    amount: 0,
    effects: (
      perSecond: number,
      setPerSecond: any,
      grassPerClick: number,
      setGrassPerClick: any
    ) => {
      setPerSecond(perSecond + 0.5);
    },
  },
  {
    id: 2,
    name: "Hire a workman",
    description: "Hire a workman to help you click grass! +1 grass per click!",
    price: 50,
    multiplier: 1.2,
    unlocked: false,
    amount: 0,
    effects: (
      perSecond: number,
      setPerSecond: any,
      grassPerClick: number,
      setGrassPerClick: any
    ) => {
      setGrassPerClick(grassPerClick + 1);
    },
  },
  {
    id: 3,
    name: "Farms",
    description:
      "You get a grass farm to autofarm more grass! +5 grass per second!",
    price: 75,
    multiplier: 1.2,
    unlocked: false,
    amount: 0,
    effects: (
      perSecond: number,
      setPerSecond: any,
      grassPerClick: number,
      setGrassPerClick: any
    ) => {
      setPerSecond(perSecond + 5);
    },
  },
  {
    id: 4,
    name: "Nicer grass",
    description:
      "Grass feels nicer to touch, so you get more grass. +5 grass per click!",
    price: 200,
    multiplier: 1.2,
    unlocked: false,
    amount: 0,
    effects: (
      perSecond: number,
      setPerSecond: any,
      grassPerClick: number,
      setGrassPerClick: any
    ) => {
      setPerSecond(perSecond + 5);
    },
  },
];

export const buyItem = (
  item: Item,
  items: Item[],
  setItems: any,
  grass: number,
  setGrass: any,
  perSecond: number,
  setPerSecond: any,
  grassPerClick: number,
  setGrassPerClick: any
): Item[] | null => {
  if (grass < item.price) {
    return null;
  }
  setGrass(grass - item.price);
  item.effects(perSecond, setPerSecond, grassPerClick, setGrassPerClick);

  item.amount += 1;
  item.price = Math.round(item.price * item.multiplier);

  return items.map((i) => (i.id === item.id ? item : i));
};
