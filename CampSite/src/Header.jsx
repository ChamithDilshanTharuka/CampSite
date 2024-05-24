import React from 'react';


const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="/Home">CampSite</a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <a className="nav-link mx-5" href="/Home">
                Home <span className="sr-only"></span>
              </a>
            </li>
            <li className="nav-item mx-5">
              <a className="nav-link" href="/Products">Products</a>
            </li>
            <li className="nav-item mx-5">
              <a className="nav-link" href="/AboutUs">About Us</a>
            </li>
            <li className="nav-item mx-5">
              <a className="nav-link" href="/ContactUs">Contact Us</a>
            </li>
          </ul>
          <button className="btn btn-outline-danger my-2 my-sm-0 mx-2" type="submit">
              🛒
            </button>
          <form className="form-inline my-2 my-lg-0 ml-auto ">
            <input
              className="form-control mr-sm-2 "
              type="search"
              placeholder="🔎 Search"
              aria-label="Search"
            />
          </form>
          
          <button className="btn btn-outline-warning my-2 my-sm-0 mx-2" type="submit">
              Search
            </button>
        </div>
      </nav>
    </div>
  );
};

export default Header;
