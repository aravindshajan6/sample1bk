import React, { useState } from "react";
import { LessThan, PlusBox, Close } from "../../../Common/icons";
import { Link } from "react-router-dom";

interface AddItemsProps {}

const AddItem: React.FC<AddItemsProps> = ({}) => {
  return (
    <div>
      <div className="flex h-10 text-white justify-between items-center border border-gray-300">
        <div className="flex justify-center w-auto h-full items-center bg-gray-100">
          <Link to="/inventory">
            <LessThan className="rounded-full p-2" color="#302F51" size={50} />
          </Link>
        </div>
        <div className="flex h-full justify-center items-center w-full bg-grey-blue font-semibold">
          Add New Item
        </div>
        <div className="flex justify-center w-auto h-full items-center bg-gray-100">
          <Close className="rounded-full p-2" color="#E74C3C" size={50} />
        </div>
      </div>
      
    </div>
  );
};

export default AddItem;
