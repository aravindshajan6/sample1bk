import React from "react";
import DynamicTable from "../../Common/Table";
import { columnData } from "./constants";
import { Table } from "antd";

interface ProductTableProps {
  selectedType: string | null;
  products: Product[];
  onAddProduct?: () => void;
  onItemSelect: React.Dispatch<React.SetStateAction<string | null>>;
}

export interface Product {
  id: number;
  name: string;
  price: number;
}

const rowData = [
  {
    sl_no: 1,
    item: "Classic Yellow Cake",
    subItem: "Yellow Cake",
    qty: "50",
    csgt: "50",
    subCsgt: "10%",
    sgst: "50",
    subSgst: "10%",
    igst: "50",
  },
  {
    sl_no: 2,
    item: "Classic Cake",
    subItem: "Yellow Cake",
    qty: "50",
    csgt: "50",
    subCsgt: "10%",
    sgst: "50",
    subSgst: "10%",
    igst: "50",
  },
  {
    sl_no: 3,
    item: "Classic Yellow",
    subItem: "Yellow Cake",
    qty: "50",
    csgt: "50",
    subCsgt: "10%",
    sgst: "50",
    subSgst: "10%",
    igst: "50",
  },
];

const ProductTable: React.FC<ProductTableProps> = ({
  selectedType,
  products,
  onAddProduct,
  onItemSelect,
}) => {
  return (
    <div>
      {/* <DynamicTable columnData={columnData} rowData={rowData} /> */}
      <Table
        dataSource={rowData}
        columns={columnData(onItemSelect)}
        pagination={{ style: { display: "none" } }}
      />
    </div>
  );
};

export default ProductTable;
