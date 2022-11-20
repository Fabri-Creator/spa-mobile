import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

import getMovile from "../../assets/getMovile";

import "./Header.css";

function Header({ handleItems }) {
  const [pages, setPages] = useState("");
  const [movile, setMovile] = useState(getMovile());
  let location  = useLocation();

  useEffect(() => {
    let crumbs = [];
    location.pathname === '/' && crumbs.push('/')
    location.pathname !== '/' && crumbs.push('/', movile.id)
    return setPages(crumbs);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { value } = e.target;
    handleItems(value);
  };
  
  return (
    <div className="header-container">
      <div className="breadCrumb-container">
        {pages &&
          pages.map((page) => {
            return (
              <NavLink
                to={page === "/" ? "/" : `/${movile.id}`}
                className="nav-style"
              >
                {page === "/" ? "/Moviles" : `/${movile.model}`}
              </NavLink>
            );
          })}
      </div>

      <NavLink to="/" className="nav-style">
        Header
      </NavLink>

      <div className="search-container">
        <form onSubmit={handleSubmit}>
          <input
            title="inputTest"
            type="text"
            placeholder="Search"
            onChange={handleSubmit}
          />
          <button type="submit" className="button-search" title="buttonTest">
            OK
          </button>
        </form>
      </div>
    </div>
  );
}

export default Header;
