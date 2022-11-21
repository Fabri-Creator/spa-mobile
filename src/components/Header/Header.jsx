import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

import getMobile from "../../services/getMobile";

import "./Header.css";

function Header({ handleItems }) {
  const [pages, setPages] = useState("");
  const [mobile, setMobile] = useState(getMobile());
  let location  = useLocation();

  useEffect(() => {
    let crumbs = [];
    location.pathname === '/' && crumbs.push('/')
    location.pathname !== '/' && crumbs.push('/', mobile.id)
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
                to={page === "/" ? "/" : `/${mobile.id}`}
                className="nav-style"
              >
                {page === "/" ? "/Mobiles" : `/${mobile.model}`}
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
