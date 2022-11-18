// import { useEffect } from "react";

import { Link } from "react-router-dom";

import Header from "../components/Header";

function Product({ items, handleItems }) {

// console.log('cambios', items)  

  // useEffect(() => {
  //   moviles = items.slice(0, 10);
  //   return moviles
  // }, [items]);
 
  return (
    <div className="vista-container">
      <Header handleItems= {handleItems}></Header>
      <Link to="/Detail">Detail page</Link>

      {items &&
        items.map((item) => {
          return (
            <>
              <h3 className="data">{item.id}</h3>
              <h3 className="data">{item.brand}</h3>
              <h3 className="data">{item.model}</h3>
            </>
          );
        })}
    </div>
  );
}

export default Product;
