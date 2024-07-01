import laminasData from "../../data/LAMINAS_DATA.json";
import React from "react";
import TableComponent from './TableComponent';

function Laminas() {
  const data = React.useMemo(() => laminasData, []);
  const columns = React.useMemo(
    () => [
      { Header: "ID", accessor: "id" },
      { Header: "Nombre", accessor: "nombre_lamina" },
      { Header: "Grupo", accessor: "grupo" },
      { Header: "Posicion", accessor: "posicion" }
    ],
    []
  );

  return (
    <>
      <h2>Buscador Laminas Escolares</h2>
      <div className="App">
        <div className="container">
          <TableComponent data={data} columns={columns} />
        </div>
      </div>
    </>
  );
}

export default Laminas;
