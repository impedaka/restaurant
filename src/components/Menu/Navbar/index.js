import React from 'react';
import { Nav, NavIcon, Bars, Cart, Circle } from './Navbar';
import {Link} from 'react-router-dom';
import {useStateValue} from "./StateProvider";

const Navbar = ({ toggle }) => {
  const [{basket}] = useStateValue();
  console.log(basket);
  return (
    <>
      <Nav>
        <Link to ="/cart">
          <Cart/>
          <Circle>{basket?.length}</Circle>
        </Link>
        <NavIcon onClick={toggle}>
          <p>Menu</p>
          <Bars/>
        </NavIcon>
      </Nav>
    </>
  );
};

export default Navbar;