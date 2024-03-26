import type { MenuItem } from "../types";

type MenuItemProps = {
  item: MenuItem;
  addItem: (item: MenuItem) => void
};

const MenuItems = ({ item, addItem }: MenuItemProps) => {
  return (
    <button
        className="border-2 border-teal-400 hover:bg-teal-200 w-full p-3 rounded-lg flex justify-between"
        onClick={() => addItem(item)}
    >
      <p>{item.name}</p>
      <p className="font-bold">${item.price}</p>
    </button>
  );
};

export default MenuItems;
