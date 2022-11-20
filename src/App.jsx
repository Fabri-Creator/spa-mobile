import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Product from "./vistas/Product";
import Detail from "./vistas/Detail";
import useFetch from "./assets/useFetch";

import filterItems from "./assets/filterItems";
import getStorage from "./assets/getStorage";
import getMovile from "./assets/getMovile";
import fetchSingleProduct from "./assets/fetchSingleProduct";

import "./App.css";

function App() {
  const [items, setItems] = useState("");
  const [localItems, setlocalItems] = useState(getStorage());
  const [movile, setMovile] = useState(getMovile());

  useEffect(() => {
    const url = `https://front-test-api.herokuapp.com/api/product`
    useFetch(url)
    setItems(getStorage());
  }, []);

  const handleFilter = (filtrado) => {
    let filteredItems = filterItems(filtrado, localItems);
    return setItems(filteredItems);
  };

  const handleItems = (filtrado) => {
    !filtrado && setItems(localItems);

    if (filtrado) {
      return handleFilter(filtrado);
    }
  };

  const handleSingleProduct = (movileId) => {
    const url = `https://front-test-api.herokuapp.com/api/product/${movileId}`
    fetchSingleProduct(url)
    setMovile(getMovile());
  };

  const handleLimit = (elements) => {
    let limitedUnits = elements.slice(0, 8);
    return limitedUnits;
  };

  return (
    <div className="app">
      <Routes>
        <Route
          path="/"
          element={<Product items={handleLimit(items)} handleItems={handleItems} handleSingleProduct={handleSingleProduct}/>}
        />
        <Route
          path={`/${movile.id}`}
          element={<Detail item={movile} />}
        />
      </Routes>
    </div>
  );
}

export default App;
