import React from "react";
import { PrimaryNav, MenuLink, Menu, Hamburger } from "./NavElement";
const Navbar = () => {
  return (
    <>
      <PrimaryNav>
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
