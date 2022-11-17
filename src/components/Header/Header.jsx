import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

import "./Header.css";

function Header({ handleItems }) {
  const [pages, setPages] = useState("");
  const { pathname } = useLocation();

  useEffect(() => {
    let pages = [];
    pathname === "/" && pages.push("Products");
    pathname === "/Detail" && pages.push("Products", "Detail");
    console.log(pages);
    return setPages(pages);
  }, [pathname]);

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
                to={page === "Products" ? "/" : "/Detail"}
                className="nav-style"
              >
                {`/ ${page} `}
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
