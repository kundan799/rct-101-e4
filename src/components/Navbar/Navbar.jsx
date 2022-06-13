import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div data-cy="navbar" style={{display:"flex",
    justifyContent:"space-between"}}>
      <div>
        {/* TODO: Use Link instead of anchor tag. */}
        <Link data-cy="navbar-home-link" to="/">LOGO</Link>
      </div>
      <div  style={{display:"flex",
    justifyContent:"space-evenly"}}>
        <div data-cy="navbar-cart-items-count">cart:(0)</div>
        <button data-cy="navbar-login-logout-button">login</button>
      </div>
    </div>
  );
};

export default Navbar;
