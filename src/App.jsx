import Product from "./product";
import Detail from "./Detail";

// import { createRoot } from "react-dom/client";
import { Routes, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Product />} />
        <Route path="/Detail" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
