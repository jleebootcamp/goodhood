import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarPages.js";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to="/Home" activeStyle>
            Home
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
