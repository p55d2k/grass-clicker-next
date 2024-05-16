import { Item, SaveItem, resetItems } from "@/constants/items";

export const reset = (localStorage: any) => {
  localStorage.clear();
  location.reload();
};

export const saveGame = (
  items: Item[],
  grass: number,
  perSecond: number,
  grassPerClick: number,
  localStorage: any
) => {
  let defaultItems: Item[] = resetItems();
  let savedItems: SaveItem[] = [];

  for (let i = 0; i < defaultItems.length; i++) {
    savedItems.push({
      id: defaultItems[i].id,
      amount: items[i].amount,
      price: items[i].price,
    });
  }

  const gameData = {
    savedItems,
    grass,
    perSecond,
    grassPerClick,
  };

  localStorage.setItem("gameData", JSON.stringify(gameData));
};

export const loadGame = (
  localStorage: any
): {
  items: Item[];
  grass: number;
  perSecond: number;
  grassPerClick: number;
} | null => {
  const gameData = localStorage.getItem("gameData");

  if (gameData) {
    try {
      const data = JSON.parse(gameData);

      let defaultItems: Item[] = resetItems();
      let items: Item[] = [];

      for (let i = 0; i < defaultItems.length; i++) {
        items.push({
          ...defaultItems[i],
          amount: data.savedItems[i].amount,
          price: data.savedItems[i].price,
        });
      }

      return {
        items,
        grass: data.grass,
        perSecond: data.perSecond,
        grassPerClick: data.grassPerClick,
      };
    } catch (error) {
      return null;
    }
  } else {
    return null;
  }
};
