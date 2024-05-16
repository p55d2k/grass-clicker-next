export interface Item {
  id: number;
  name: string;
  description: string; 
  price: number;
  amount: number;
  multiplier: number;
  effects: (
    perSecond: number,
    setPerSecond: any,
    grassPerClick: number,
    setGrassPerClick: any
  ) => void;
}

export interface SaveItem {
  id: number;
  amount: number;
  price: number;
}

export const resetItems = (): Item[] => [
  {
    id: 1,
    name: "Aunty 帮你拿 grass",
    description: "Aunty feeling generous today... +0.5 grass per second!",
    price: 15,
    multiplier: 1.4,
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
    id: 6,
    name: "Professional farmers",
    description:
      "Actually good farmers arrive and farm better! +5 grass per click!",
    price: 3600,
    multiplier: 1.4,
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
  {
    id: 7,
    name: "AI",
    description:
      "Sam Altman sold you some GPT-5s! x1.2 more efficient auto-clicking!",
    price: 7500,
    multiplier: 1.2,
    amount: 0,
    effects: (
      perSecond: number,
      setPerSecond: any,
      grassPerClick: number,
      setGrassPerClick: any
    ) => {
      setPerSecond(perSecond * 1.2);
    },
  },
  {
    id: 8,
    name: "Non-halting Turing Machine",
    description:
      "Despite the fact that Alan Turing is dead, he sold you some non-halting turing machines (but they're a bit slow...)! x1.1 more efficient manual clicking!",
    price: 15000,
    multiplier: 1.2,
    amount: 0,
    effects: (
      perSecond: number,
      setPerSecond: any,
      grassPerClick: number,
      setGrassPerClick: any
    ) => {
      setGrassPerClick(grassPerClick * 1.1);
    },
  },
  {
    id: 9,
    name: "Aliens",
    description:
      "Aliens discover grass, but get also ironically addicted to it! x1.2 more efficient auto and manual clicking!",
    price: 25000,
    multiplier: 1.3,
    amount: 0,
    effects: (
      perSecond: number,
      setPerSecond: any,
      grassPerClick: number,
      setGrassPerClick: any
    ) => {
      setPerSecond(perSecond * 1.2);
      setGrassPerClick(grassPerClick * 1.2);
    },
  },
  {
    id: 10,
    name: "Higher Life Form",
    description:
      "Some higher life form arrives and teaches you how to click grass better! x1.3 more efficient auto and manual clicking!",
    price: 80000,
    multiplier: 1.4,
    amount: 0,
    effects: (
      perSecond: number,
      setPerSecond: any,
      grassPerClick: number,
      setGrassPerClick: any
    ) => {
      setPerSecond(perSecond * 1.3);
      setGrassPerClick(grassPerClick * 1.3);
    },
  },
  {
    id: 11,
    name: "Grass God",
    description:
      "The Grass God himself discovers you, a grass-touching addict, and decides to help you out! x1.5 more efficient auto and manual clicking!",
    price: 200000,
    multiplier: 1.7,
    amount: 0,
    effects: (
      perSecond: number,
      setPerSecond: any,
      grassPerClick: number,
      setGrassPerClick: any
    ) => {
      setPerSecond(perSecond * 1.5);
      setGrassPerClick(grassPerClick * 1.5);
    },
  },
  {
    id: 12,
    name: "Grass God's Grass",
    description:
      "The Grass God gives you some of his grass...? x2 more efficient auto and manual clicking!",
    price: 1000000,
    multiplier: 2,
    amount: 0,
    effects: (
      perSecond: number,
      setPerSecond: any,
      grassPerClick: number,
      setGrassPerClick: any
    ) => {
      setPerSecond(perSecond * 2);
      setGrassPerClick(grassPerClick * 2);
    },
  },
  {
    id: 13,
    name: "Grass God's Disciples",
    description:
      "The Grass God has disciples? x5 more efficient auto and manual clicking!",
    price: 10000000,
    multiplier: 2.4,
    amount: 0,
    effects: (
      perSecond: number,
      setPerSecond: any,
      grassPerClick: number,
      setGrassPerClick: any
    ) => {
      setPerSecond(perSecond * 5);
      setGrassPerClick(grassPerClick * 5);
    },
  },
  {
    id: 14,
    name: "A Grass Angel",
    description:
      "The Grass God is so impressed he lets you have a go at being a Grass God too! x10 more efficient auto and manual clicking!",
    price: 100000000,
    multiplier: 2.4,
    amount: 0,
    effects: (
      perSecond: number,
      setPerSecond: any,
      grassPerClick: number,
      setGrassPerClick: any
    ) => {
      setPerSecond(perSecond * 10);
      setGrassPerClick(grassPerClick * 10);
    },
  },
  {
    id: 15,
    name: "A second Grass God",
    description:
      "The Grass God is so impressed he lets you have a go at being a Grass God too! x50 more efficient auto and manual clicking!",
    price: 10000000000,
    multiplier: 3,
    amount: 0,
    effects: (
      perSecond: number,
      setPerSecond: any,
      grassPerClick: number,
      setGrassPerClick: any
    ) => {
      setPerSecond(perSecond * 50);
      setGrassPerClick(grassPerClick * 50);
    },
  },
];

export const buyItem = (
  item: Item,
  items: Item[],
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
