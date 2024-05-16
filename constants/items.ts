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
    description: "Aunty feeling generous today... +0.5 grass per second!",
    price: 15,
    multiplier: 1.4,
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
    description: "Hire a workman to help you click grass! +1 grass per click.",
    price: 100,
    multiplier: 1.4,
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
      "You get a grass farm to autofarm more grass! +2 grass per second!",
    price: 230,
    multiplier: 1.6,
    unlocked: false,
    amount: 0,
    effects: (
      perSecond: number,
      setPerSecond: any,
      grassPerClick: number,
      setGrassPerClick: any
    ) => {
      setPerSecond(perSecond + 2);
    },
  },
  {
    id: 4,
    name: "Nicer grass",
    description:
      "Grass feels nicer to touch, so you get addicted to touching grass. +2 grass per click!",
    price: 500,
    multiplier: 1.5,
    unlocked: false,
    amount: 0,
    effects: (
      perSecond: number,
      setPerSecond: any,
      grassPerClick: number,
      setGrassPerClick: any
    ) => {
      setGrassPerClick(grassPerClick + 2);
    },
  },
  {
    id: 5,
    name: "Businessmen",
    description:
      "Businessmen invest in your grass and your grass stocks boom! +4 grass per second!",
    price: 1000,
    multiplier: 1.5,
    unlocked: false,
    amount: 0,
    effects: (
      perSecond: number,
      setPerSecond: any,
      grassPerClick: number,
      setGrassPerClick: any
    ) => {
      setPerSecond(perSecond + 4);
    },
  },
  {
    id: 5,
    name: "Professional farmers",
    description:
      "Actually good farmers arrive and farm better! +5 grass per click!",
    price: 3600,
    multiplier: 1.4,
    unlocked: false,
    amount: 0,
    effects: (
      perSecond: number,
      setPerSecond: any,
      grassPerClick: number,
      setGrassPerClick: any
    ) => {
      setGrassPerClick(grassPerClick + 5);
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
