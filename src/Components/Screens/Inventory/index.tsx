import React, { useState } from "react";
import ItemTypeList from "./ItemTypeList";
import ProductTable from "./ProductTable";
import ProductForm from "./ProductForm";

import { initialProducts } from "./constants";
import SubHeader from "./SubHeader";

function Inventory() {
  const [selectedCategoryType, setSelectedCategoryType] = useState<
    string | null
  >(null);
  const [selectedItemType, setSelectedItemType] = useState<string | null>(null);

  return (
    <div className="flex flex-col">
      <SubHeader />
      <div className="flex">
        <div className="w-40">
          <ItemTypeList
            selectedType={selectedCategoryType}
            onSelectType={setSelectedCategoryType}
          />
        </div>
        <div className="w-full">
          {selectedCategoryType && !selectedItemType && (
            <ProductTable
              selectedType={selectedCategoryType}
              onAddProduct={() => {}}
              products={initialProducts}
              onItemSelect={setSelectedItemType}
            />
          )}
          {selectedCategoryType && selectedItemType && (
            <ProductForm
              selectedType={selectedCategoryType}
              onAddProduct={() => {}}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Inventory;
