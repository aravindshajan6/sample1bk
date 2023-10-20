import React, { useState } from "react";
import { Gear, PlusBox } from "../../Common/icons";
import SearchBar from "../../Common/SearchBar";

interface SubHeaderProps {}

const SubHeader: React.FC<SubHeaderProps> = ({}) => {
  const [searchValue, setSearchValue] = useState<string>("");
  return (
    <div className="fixed top-16 left-0 right-0 bg-white z-10 shadow-md flex justify-between items-center border border-gray-300">
      <div className="border-r border-gray-300 w-2/6">
        <div className="flex justify-between p-2">
          <span>Total Items:150</span>
          <span className="underline">Out-Of-Stock:150</span>
        </div>
      </div>
      <div className="w-3/6  border-gray-300 ">
        <div className="px-2">
          <SearchBar
            value={searchValue}
            setValue={setSearchValue}
            placeHolder="Search Item"
          />
        </div>
      </div>
      <div className="flex flex-row items-center bg-gray-100 space-x-1 w-1/6">
        <div className="border-x border-gray-300 p-3 flex items-center">
          <Gear size={26} />
        </div>
        <div className="flex items-center justify-center w-2/3">
          <PlusBox size={28} />
          <span className="ml-2">Add Item</span>
        </div>
      </div>
    </div>
  );
};

export default SubHeader;
