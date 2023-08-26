import React from "react";
import { PrimaryNav, MenuLink, Menu, Hamburger, Logo } from "./NavElement";
const Navbar = () => {
  return (
    <>
      <PrimaryNav>
        <Logo>MC ECO ENGINE DASHBOARD</Logo>
        <Hamburger />
        <Menu>
          <MenuLink to="/home">Home</MenuLink>
          <MenuLink to="/about">Cookbooks</MenuLink>
        </Menu>
      </PrimaryNav>
    </>
  );
};
export default Navbar;
