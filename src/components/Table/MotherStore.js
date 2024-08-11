import productsStoreData from "../../data/MON_STORE.json";
import React from "react";
import TableComponent from './TableComponent';

function MotherStore() {
  const data = React.useMemo(() => productsStoreData, []);
  const columns = React.useMemo(
    () => [
      { Header: "ID", accessor: "Numero" },
      { Header: "Producto", accessor: "Poductos" },
      { Header: "Precio Bs.", accessor: "Precio" }
    ],  
    []
  );

  return (
    <>
      <h2>Tienda Tiwanaku</h2>
      <div className="App">
        <div className="container">
          <TableComponent data={data} columns={columns} />
        </div>
      </div>
    </>
  );
}

export default MotherStore;
