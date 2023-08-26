import { FaBars } from 'react-icons/fa'
import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'
export const PrimaryNav = styled.nav`
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 90px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #222022;
  background: #4c4947;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3);
  
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

export const Logo = styled.span`
  color: #fff;
  font-size: 1.875rem;
  margin-left: 1.5rem;

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