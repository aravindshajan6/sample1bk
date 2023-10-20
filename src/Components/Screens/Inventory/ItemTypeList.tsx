import React from "react";

import { ManageCategories } from "../../Common/icons";

interface ItemTypeListProps {
  selectedType: string | null;
  onSelectType: (itemType: string | null) => void;
}

const itemTypes = [
  { id: "1", name: "Favorites" },
  { id: "2", name: "Bread" },
  { id: "3", name: "Cakes" },
  { id: "4", name: "Pastries" },
  { id: "5", name: "Cookies" },
  { id: "6", name: "Bread" },
  { id: "7", name: "Cakes" },
  { id: "8", name: "Pastries" },
  { id: "9", name: "Cookies" },
];

const ItemTypeList: React.FC<ItemTypeListProps> = ({
  selectedType,
  onSelectType,
}) => {
  return (
    <ul className="flex flex-col h-screen w-full space-y-0 overflow-y-auto relative">
      {itemTypes.map(itemType => (
        <li
          key={itemType?.id}
          className={`cursor-pointer p-4 border-2 border-gray-300 text-center font-semibold text-md ${
            selectedType === itemType?.id
              ? "bg-grey-blue text-white font-bold"
              : "bg-gray-200 hover:bg-gray-300"
          }`}
          onClick={() => onSelectType(itemType?.id)}
          style={{ marginBottom: "-2px" }}
        >
          {itemType?.name}
        </li>
      ))}
      <li
        className={`cursor-pointer p-4 border-2 border-gray-300 text-center font-semibold text-md ${
          selectedType === "add_category"
            ? "bg-grey-blue text-white font-bold"
            : "bg-gray-200 hover:bg-gray-300"
        }`}
        onClick={() => onSelectType("add_category")}
        style={{ position: "sticky", bottom: 0 }}
      >
        <div className="flex flex-row items-center space-x-1">
          <ManageCategories size={40}/>
          <span>Manage Categories</span>
        </div>
      </li>
    </ul>
  );
};

export default ItemTypeList;
