import React from "react";
import { useTable, useGlobalFilter, usePagination } from "react-table";
import { GlobalFilter } from '../GlobalFilter';
import './TableComponent.css';
import Pagination from "./Pagination";

function TableComponent({ data, columns }) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page, // Instead of rows, use page for pagination
    prepareRow,
    state,
    setGlobalFilter,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
  } = useTable(
    { columns, data, initialState: { pageIndex: 0 } },
    useGlobalFilter,
    usePagination // Add usePagination here
  );

  const { globalFilter, pageIndex, pageSize } = state;

  return (
    <div className="table-container">
      <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => { // Use page instead of rows for pagination
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>

      <Pagination
        canPreviousPage={canPreviousPage}
        canNextPage={canNextPage}
        pageOptions={pageOptions}
        pageCount={pageCount}
        gotoPage={gotoPage}
        nextPage={nextPage}
        previousPage={previousPage}
        pageIndex={pageIndex}
        pageSize={pageSize}
        setPageSize={setPageSize}
      />    
    </div>
  );
}

export default TableComponent;
