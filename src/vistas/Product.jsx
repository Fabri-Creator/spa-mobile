import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Header from "../components/Header";

import defaultUrl from "../services/variables";
import filterItems from "../services/filterItems";
import getStorage from "../services/getStorage";
import useFetch from "../services/useFetch";
import limitProducts from '../services/limitProducts';

import "./vistas.css";

function Product() {
  const [items, setItems] = useState("");
  const [localItems, setlocalItems] = useState(getStorage());

  useEffect(() => {
    useFetch(defaultUrl);
    setItems(limitProducts(getStorage()));
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

  return (
    <div className="vista-container">
      <Header handleItems={handleItems}></Header>
      <div className="cards-wraper">
        {items &&
          items.map((item) => {
            return (
              <div className="product-container">
                <Link to={item.id} className="product-link">
                  <h4 className="data">{item.brand}</h4>
                  <h5 className="data">{`Model: ${item.model}`}</h5>
                  <p className="data">{`Price: ${item.price}`}</p>
                  <div className="img-container">
                    <img src={`${item.imgUrl}`} alt={`${item.name}`} />
                  </div>
                </Link>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Product;
