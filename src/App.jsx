import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Product from "./vistas/Product";
import Detail from "./vistas/Detail";
// import useFetch from "./assets/useFetch";

import getStorage from "./assets/getStorage";
import getMovile from './assets/getMovile'
import filterItems  from './assets/filterItems'

import "./App.css";

function App() {
  const [items, setItems] = useState("");
  const [localItems, setlocalItems] = useState(getStorage());
  const [movile, setMovile] = useState(getMovile());

  useEffect(() => {
    setItems(getStorage());
  }, []);

  const handleFilter = (filtrado) => {
    let filteredItems = filterItems(filtrado, localItems)
    return setItems(filteredItems);
  };

  const handleItems = (filtrado) => {
    !filtrado && setItems(localItems);

    if (filtrado) {
      handelFilter(filtrado);
    }

  };

  return (
    <div className="app">
      <Routes>
        <Route
          path="/"
          element={<Product items={items} handleItems={handleItems} />}
        />
        <Route path="/ZmGrkLRPXOTpxsU4jjAcv" element={<Detail item={movile}/>} />
      </Routes>
    </div>
  );
}

export default App;
