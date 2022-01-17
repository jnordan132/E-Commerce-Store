import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

function refreshPage(){
  window.location.reload();
}

function Nav() {

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="flex-row" style={{ listStyle: "none"}}>
          <li className="mx-1">
            <Link to="/orderHistory" style={{ textDecoration: 'none' }}>
              Order History
            </Link>
          </li>
          <li className="mx-1">
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a href="/" onClick={() => Auth.logout()}  style={{ textDecoration: 'none' }}>
              Logout
            </a>
          </li>
        </ul>
      );
    } else {
      return (
        <ul className="flex-row" style={{ listStyle: "none" }}>
          <li className="mx-1">
            <Link to="/signup"  style={{ textDecoration: 'none' }}>
              Signup
            </Link>
          </li>
          <li className="mx-1">
            <Link to="/login"  style={{ textDecoration: 'none' }}>
              Login
            </Link>
          </li>
        </ul>
      );
    }
  }

  return (
    <header className="flex-row px-1">
      <h1>
        <Link to="/" onClick={refreshPage} style={{ textDecoration: 'none' }} >
          Shoe Fanatic
        </Link>
      </h1>

      <nav>
        {showNavigation()}
      </nav>
    </header>
  );
}

export default Nav;
