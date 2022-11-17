import Product from "./vistas/Product";
import Detail from "./vistas/Detail";
 import useFetch from "./assets/useFetch";

import { Routes, Route } from "react-router-dom";

import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [items, setItems] = useState('')

  useEffect(() => {
    useFetch('https://front-test-api.herokuapp.com/api/product').then(setItems)
  }, []);

  //   useEffect(() => {
  //   console.log('PRODUCTS FILTRADOS', items)
  // }, [items]);

const handleItems = (filtrado) => {
  
  (!filtrado) && useFetch('https://front-test-api.herokuapp.com/api/product').then(setItems)

  const filteredItems = items.filter(movile => movile.brand.includes(filtrado) || movile.model.includes(filtrado)  ) 
  
  console.log('PRODUCTS FILTRADOS', filteredItems);
}

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Product items={items} handleItems={handleItems} />} />
        <Route path="/Detail" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
