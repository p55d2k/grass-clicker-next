import { Item, buyItem } from "@/constants/items";
import toast from "react-hot-toast";

interface ShopItemProps {
  onClick?: () => void;
  item: Item;
  items: Item[];
  setItems?: any;
  amount: number;
  setAmount: any;
  perSecond: number;
  setPerSecond: any;
  grassPerClick: number;
  setGrassPerClick: any;
}

const ShopItem = ({
  item,
  items,
  setItems,
  amount,
  setAmount,
  perSecond,
  setPerSecond,
  grassPerClick,
  setGrassPerClick,
}: ShopItemProps) => {
  return (
    <div
      onClick={() => {
        const newItems: Item[] | null = buyItem(
          item,
          items,
          amount,
          setAmount,
          perSecond,
          setPerSecond,
          grassPerClick,
          setGrassPerClick
        );

        if (newItems === null) {
          toast.error("You don't have enough grass!", {
            duration: 2000,
          });
        } else {
          toast.success("Item bought!", {
            duration: 2000,
          });
          setItems(newItems);
        }
      }}
      className={`w-full bg-white transition-all duration-200 ease-in-out hover:active:scale-95 select-none ${
        amount < item.price ? "opacity-60 bg-red-500" : "cursor-pointer"
      } bg-opacity-40 p-4 flex flex-col items-center justify-center rounded-lg border-white border-2`}
    >
      <h1 className="text-2xl text-center">{item.name}</h1>
      <p className="text-sm text-center max-w-[80%]">{item.description}</p>
      <div className="flex flex-row space-x-2 divide-x-2 divide-black text-center">
        <p className="text-md">
          Costs&nbsp;
          <span className="text-blue-500">{item.price}</span>
          &nbsp;grass
        </p>
        <p className="text-md pl-2 text-blue-500">Amount: {item.amount}</p>
      </div>
    </div>
  );
};

export default ShopItem;
