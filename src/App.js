import './App.css';
import fakeData from "./MOCK_DATA.json";
import * as React from "react";
import { useTable, useGlobalFilter } from "react-table";
import { GlobalFilter } from './components/GlobalFilter';

function App() {
  const data = React.useMemo(() => fakeData, []);
  const columns = React.useMemo(
    () => [
      {
        Header: "ID",
        accessor: "id",
      },
      {
        Header: "Nombre",
        accessor: "nombre_lamina",
      },
      {
        Header: "Grupo",
        accessor: "grupo",
      },
      {
        Header: "Posicion",
        accessor: "posicion",
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow, state, setGlobalFilter } =
    useTable({ columns, data }, useGlobalFilter);

    const { globalFilter } = state

  return (
    <>
    <h2>Buscador Laminas Escolares</h2>
    <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
    <div className="App">
      <div className="container">
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
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <td {...cell.getCellProps()}> {cell.render("Cell")} </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
    </>
  );
}

export default App;
