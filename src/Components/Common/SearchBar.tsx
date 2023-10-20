import React, { useState, ChangeEvent } from "react";

import { SearchLense } from "./icons";

interface SearchBarProps {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  placeHolder?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({
  value,
  setValue,
  placeHolder = "Search...",
}) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <div className="flex justify-between text-md text-gray-500 w-full h-full border-gray-200 items-center">
      <input
        type="text"
        placeholder={placeHolder}
        value={value}
        onChange={handleChange}
        className="w-11/12  px-2 py-1 focus:outline-none"
      />
      <SearchLense className="w-1/12" />
    </div>
  );
};

export default SearchBar;
