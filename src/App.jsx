import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Product from "./vistas/Product";
import Detail from "./vistas/Detail";
import useFetch from "./assets/useFetch";

import filterItems from "./assets/filterItems";
import getStorage from "./assets/getStorage";
import getMovile from "./assets/getMovile";
import defaultUrl from "./assets/variables";

import "./App.css";
 
function App() {


  const [items, setItems] = useState("");
  const [localItems, setlocalItems] = useState(getStorage());
  const [movile, setMovile] = useState(getMovile());

  console.log(defaultUrl)

  useEffect(() => {
    useFetch(defaultUrl)
    setItems(getStorage());
  }, []);

  const handleFilter = (filterValue) => {
    let filteredItems = filterItems(filterValue, localItems);
    return setItems(filteredItems);
  };

  const handleItems = (filter) => {
    !filter && setItems(localItems);

    if (filter) {
      return handleFilter(filter);
    }
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
          element={<Product items={handleLimit(items)} handleItems={handleItems}/>}
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
