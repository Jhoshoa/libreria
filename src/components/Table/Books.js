import booksData from "../../data/BOOKS_DATA.json";
import React from "react";
import TableComponent from './TableComponent';

function Books() {
  const data = React.useMemo(() => booksData, []);
  const columns = React.useMemo(
    () => [
      { Header: "ID", accessor: "Numero" },
      { Header: "Nombre", accessor: "Nombre" },
      { Header: "Precio Bs.", accessor: "Precio" },
      { Header: "Autor", accessor: "Autor" }
    ],
    []
  );

  return (
    <>
      <h2>Buscador Libros</h2>
      <div className="App">
        <div className="container">
          <TableComponent data={data} columns={columns} />
        </div>
      </div>
    </>
  );
}

export default Books;