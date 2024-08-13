import booksData from "../../data/BOOKS_DATA.json";
import React, { useEffect, useState } from "react";
import TableComponent from './TableComponent';
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../config/firebase-config";

function Books() {
  const data = React.useMemo(() => booksData, []);
  const columns = React.useMemo(
    () => [
      { Header: "ID", accessor: "id" },
      { Header: "Nombre", accessor: "Nombre" },
      { Header: "Precio Bs.", accessor: "Precio" },
      { Header: "Autor", accessor: "Autor" }
    ],
    []
  );

  const [books, setBooks] = useState([]);
  const booksCollectionRef = collection(db, "books");

  useEffect(() => {
    const getBooks = async () => {
      const data = await getDocs(booksCollectionRef);
      console.log(data);  
      setBooks(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getBooks();
    
  }, []);

  return (
    <>
      <h2>Buscador Libros</h2>
      {/* {books.map((book) => {
        return (
          <div>
            
            <h5>Name: {book.Nombre}</h5>
            <h5>Age: {book.Precio}</h5>
          </div>
        );
      })} */}
      <div className="App">
        <div className="container">
          <TableComponent data={data} columns={columns} />
        </div>
      </div>
    </>
  );
}

export default Books;