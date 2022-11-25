import React, { useMemo, useState } from "react";
import { TbArrowsSort } from "react-icons/tb";

const Table = ({ data, tableConfig }) => {
  const [activeSort, setActiveSort] = useState("");

  const sortedData = useMemo(() => {
    if (activeSort) {
      const sortFn = tableConfig.fields.find(
        (field) => field.key === activeSort
      )?.sortHandler;
      return data.sort((b, a) => {
        if (sortFn) {
          return sortFn(b[activeSort], a[activeSort]);
        }
        return b[activeSort] > a[activeSort] ? 1 : -1;
      });
    }
    return data;
  }, [data, activeSort, tableConfig.fields]);

  return (
    <table>
      <thead>
        <tr>
          {tableConfig.fields.map((column) => (
            <th
              key={column.key}
              onClick={() => {
                if (column.sortable) {
                  setActiveSort(column.key);
                }
              }}
            >
              {column.title}{" "}
              {column.sortable ? (
                <span className="sort-icon">
                  <TbArrowsSort />
                </span>
              ) : null}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {sortedData.map((record, index) => (
          <tr key={index}>
            {tableConfig.fields.map((column) => {
              const columnValue = record[column.key];
              return (
                <td key={column.key}>
                  {column.render ? column.render(columnValue) : columnValue}
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;

