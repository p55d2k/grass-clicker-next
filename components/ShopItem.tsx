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
      className={`w-full transition-all duration-200 ease-in-out hover:bg-opacity-50 hover:active:scale-95 select-none ${
        amount < item.price
          ? "opacity-60 bg-white"
          : "cursor-pointer bg-yellow-200"
      } bg-opacity-40 p-4 flex flex-row items-center justify-center rounded-lg min-h-[100px]`}
    >
      <div className="w-1/6 text-[#3C6B0C] flex text-start items-end justify-start text-3xl">
        <span className="text-5xl">{item.amount}</span>x
      </div>
      <div className="flex items-start justify-start flex-col w-full">
        <h1 className="text-[27px] text-left">{item.name}</h1>
        <p className="text-md text-left max-w-[80%] leading-5">{item.description}</p>
      </div>
      <div className="w-1/5 flex text-right items-end justify-end text-4xl text-[#3C6B0C]">
        {item.price}G
      </div>
    </div>
  );
};

export default ShopItem;
