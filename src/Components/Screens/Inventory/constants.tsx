import React from "react";

import { Link } from "react-router-dom";
import { Product } from "./ProductTable";

export const initialProducts: Product[] = [
  {
    id: 1,
    name: "Favorites",
    price: 10.99,
  },
  {
    id: 2,
    name: "Product 2",
    price: 15.49,
  },
  {
    id: 3,
    name: "Product 3",
    price: 7.99,
  },
  {
    id: 4,
    name: "Product 3",
    price: 7.99,
  },
  {
    id: 5,
    name: "Product 3",
    price: 7.99,
  },
  {
    id: 6,
    name: "Product 3",
    price: 7.99,
  },
  {
    id: 7,
    name: "Product 3",
    price: 7.99,
  },
];

export const columnData = (onItemSelect:any) => [
  { title: "Sl No", key: "sl_no", dataIndex: "sl_no", width: "5%" },
  {
    title: "Items",
    key: "item",
    dataIndex: "item",
    render: (text: string) => <div className="cursor-pointer" onClick={() => onItemSelect(text)}>{text}</div>,
    width: "20%",
  },
  { title: "Qty", key: "qty", dataIndex: "qty", width: "5%" },
  { title: "CSGT", key: "csgt", dataIndex: "csgt", width: "5%" },
  { title: "SGST", key: "sgst", dataIndex: "sgst", width: "5%" },
  { title: "IGST", key: "igst", dataIndex: "igst", width: "5%" },
  { title: "Tax", key: "tax", dataIndex: "tax", width: "5%" },
  { title: "Cost/Unit", key: "cost", dataIndex: "cost", width: "5%" },
  { title: "Sp", key: "sp", dataIndex: "sp", width: "5%" },
  { title: "Disc", key: "disc", dataIndex: "disc", width: "5%" },
  { title: "MRP", key: "mrp", dataIndex: "mrp", width: "5%" },
];
