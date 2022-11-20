// import { useEffect } from "react";

import { useNavigate } from "react-router-dom";

import Header from "../components/Header";

import "./vistas.css";

function Product({ items, handleItems, handleSingleProduct }) {
  const navigate = useNavigate();

  const handleProductDetail = (movileId) => {
    const url = `https://front-test-api.herokuapp.com/api/product/${movileId}`;
    handleSingleProduct(movileId);
    navigate(`/${movileId}`);
  };

  return (
    <div className="vista-container">
      <Header handleItems={handleItems}></Header>
      <div className="cards-wraper">
        {items &&
          items.map((item) => {
            return (
              <div
                className="product-container"
                onClick={() => handleProductDetail(item.id)}
              >
                <h4 className="data">{item.brand}</h4>
                <h5 className="data">{`Model: ${item.model}`}</h5>
                <p className="data">{`Price: ${item.price}`}</p>
                <div className="img-container">
                  <img src={`${item.imgUrl}`} alt={`${item.name}`} />
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Product;
