import { useNavigate } from "react-router-dom";

import Header from "../components/Header";

import defaultUrl from "../assets/variables";
import fetchSingleProduct from "../assets/fetchSingleProduct";

import "./vistas.css";

function Product({ items, handleItems }) {
  const navigate = useNavigate();

  const handleProductDetail = (movileId) => {
    const url = `${defaultUrl}/${movileId}`
    fetchSingleProduct(url).then(navigate(`/${movileId}`))
    setMovile(getMovile());
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
