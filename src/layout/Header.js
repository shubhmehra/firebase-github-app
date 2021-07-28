import React, { useState, useContext } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavbarText,
} from "reactstrap";
import { Link, NavLink } from "react-router-dom";
import { UserContext } from "../Context/UserContext";

const Header = () => {
  return (
    <div>
      <Navbar color="info" light expand="md">
        <NavbarBrand>
          <Link to="/" className="text-white">
            Github Firebase App
          </Link>
        </NavbarBrand>
        <NavbarToggler />
        <Collapse navbar>
          <Nav className="ms-auto" navbar>
            <NavItem>
              <NavLink to="/signup" className="text-white">
                Signup
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/signin" className="text-white">
                Signin
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/logout" className="text-white">
                Logout
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
