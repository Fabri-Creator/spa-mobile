import { useEffect } from "react";

import { Routes, Route, useNavigate } from "react-router-dom";

import Product from "./vistas/Product";
import Detail from "./vistas/Detail";
import useFetch from "./services/useFetch";
import defaultUrl from "./services/variables";

import "./App.css";

function App() {

  useEffect(() => {
    const interval = setInterval(() => {
       useFetch(defaultUrl);
    }, 3600000)
  }, [])


  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Product />} />
        <Route path="/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
