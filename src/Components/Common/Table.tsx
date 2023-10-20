import React from "react";

interface Column {
  name: string;
  key: string;
  width: string;
  sub_key?: string;
}

interface RowData {
  [key: string]: string | number | boolean;
}

interface TableProps {
  columnData: Column[];
  rowData: RowData[];
}

const DynamicTable: React.FC<TableProps> = ({ columnData, rowData }) => {
  return (
    <table className="w-full border-collapse border border-gray-300 text-center">
      <thead>
        <tr>
          {columnData.map(column => (
            <td
              key={column.key}
              style={{ width: column.width }}
              className="border-r border-gray-300 p-2 text-regular"
            >
              {column.name}
            </td>
          ))}
        </tr>
      </thead>
      <tbody className="bg-gray-100">
        {rowData.map((row, rowIndex) => (
          <React.Fragment key={rowIndex}>
            <tr >
              {columnData.map(column => (
                <td key={column.key} className="border border-gray-300">
                  <div className="flex flex-col">
                    <span className="font-semibold text-md">{row[column.key]}</span>
                    <span className="text-xs">{column.sub_key ? row[column.sub_key] : ""}</span>
                  </div>
                </td>
              ))}
            </tr>
          </React.Fragment>
        ))}
      </tbody>
    </table>
  );
};

export default DynamicTable;
