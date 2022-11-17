import { Link } from "react-router-dom";
import Header from '../components/Header'

import "./vistas.css";

function Detail() {
  return (
    <div className="vista-container">
      <Header></Header>
      <Link to="/">Product page</Link>
      Detail
    </div>
  );
}

export default Detail;
