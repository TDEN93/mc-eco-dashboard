import { FaBars } from 'react-icons/fa'
import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'
export const PrimaryNav = styled.nav`
  z-index: 14;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 90px;
  display: flex;
  justify-content: flex-end;
  background: transparent;
  
`
export const MenuLink = styled(Link)`
  color: #fff;
  display: flex;
  cursor: pointer;
  align-items: center;
  text-decoration: none;
  padding: 0 1.2rem;
  height: 100%;
  &.active {
    color: #000000;
  }
`
export const Hamburger = styled(FaBars)`
  display: none;
  color: #ffffff;
  @media screen and (max-width: 768px) {
    display: block;
    font-size: 1.9rem;
    top: 0;
    right: 0;
    position: absolute;
    cursor: pointer;
    transform: translate(-100%, 75%);
  }
`
export const Menu = styled.div`
  display: flex;
  align-items: center;
  padding: .875rem 1.25rem;
  @media screen and (max-width: 768px) {
    display: none;
  }
`