import React, { useState, useContext } from "react";
import { Menu, Segment, Header } from "semantic-ui-react";
import { Link, NavLink } from "react-router-dom";
import { UserContext } from "../Context/UserContext";

const HeaderMain = () => {
  const context = useContext(UserContext);

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const [activeItem, setActiveItem] = useState("home");

  const handleItemClick = (e, { name }) => {
    setActiveItem(name);
  };

  return (
    <div>
      <Segment inverted>
        <Menu inverted secondary>
          <Menu.Item
            name="home"
            active={activeItem === "home"}
            onClick={handleItemClick}
          >
            <Link to="/">
              <Header as="h4" inverted>
                Github Firebase App
              </Header>
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Header size="small" inverted>
              {context.user?.email ? context.user.email : ""}
            </Header>
          </Menu.Item>
          <Menu.Menu position="right">
            {context.user ? (
              <Menu.Item>
                <NavLink onClick={() => context.setUser(null)} to="/">
                  Logout
                </NavLink>
              </Menu.Item>
            ) : (
              <>
                <Menu.Item
                  name="signup"
                  active={activeItem === "signup"}
                  onClick={handleItemClick}
                >
                  <Link to="/signup">Sign Up</Link>
                </Menu.Item>
                <Menu.Item
                  name="signin"
                  active={activeItem === "signin"}
                  onClick={handleItemClick}
                >
                  <Link to="/signin">Sign In</Link>
                </Menu.Item>
              </>
            )}
          </Menu.Menu>
        </Menu>
      </Segment>
    </div>
  );
  // return (
  //   <div>
  //     <Navbar color="info" light expand="md">
  //       <NavbarBrand>
  //         <Link to="/" className="text-white">
  //           Github Firebase App
  //         </Link>
  //       </NavbarBrand>
  //       <NavbarText className="text-white">
  //         {context.user?.email ? context.user.email : ""}
  //       </NavbarText>
  //       <NavbarToggler onClick={toggle} />
  //       <Collapse navbar isOpen={isOpen}>
  //         <Nav className="ms-auto" navbar>
  //           {context.user ? (
  //             <NavItem>
  //               <NavLink tag={Link} to="/logout" className="text-white">
  //                 Logout
  //               </NavLink>
  //             </NavItem>
  //           ) : (
  //             <>
  //               <NavItem>
  //                 <NavLink to="/signup" className="text-white">
  //                   Signup
  //                 </NavLink>
  //               </NavItem>
  //               <NavItem>
  //                 <NavLink to="/signin" className="text-white">
  //                   Signin
  //                 </NavLink>
  //               </NavItem>
  //             </>
  //           )}
  //         </Nav>
  //       </Collapse>
  //     </Navbar>
  //   </div>
  // );
};

export default HeaderMain;
