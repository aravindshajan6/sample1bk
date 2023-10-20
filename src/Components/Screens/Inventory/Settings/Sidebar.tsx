import React from "react";

interface SidebarProps {
  selectedItem: string | null;
  onItemClick: (item: string) => void;
}

const Options = [
  "Manage Categories",
  "Dietary Variations",
  "Shapes",
  "Flavours",
];

const Sidebar: React.FC<SidebarProps> = ({ selectedItem, onItemClick }) => {
  return (
    <>
      <p>Menu</p>
      {Options.map((o, i) => (
        <div
          key={i}
          onClick={() => onItemClick(o)}
          className={`cursor-pointer p-6 flex items-center justify-center h-20 border border-r border-gray-100 text-center font-medium text-md
                     ${
                       selectedItem === o
                         ? "bg-grey-blue text-white font-bold"
                         : "bg-gray-200 hover:bg-gray-300"
                     }`}
        >
          {o}
        </div>
      ))}
    </>
  );
};

export default Sidebar;
