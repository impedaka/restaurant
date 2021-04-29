import React from 'react';
import { Nav, NavIcon, Bars, Cart, Circle } from './Navbar';
import {Link} from 'react-router-dom';


const Navbar = ({ cartItems, toggle}) => {
  const getCount = () => {
    let count = 0;
    // Loop through all cart items
    cartItems.forEach((item) => {
        // add the quantity of the cart item to total
        count += item.product.quantity;
    })

    return count;
}

  return (
    <>
      <Nav>
        <Link to ="/cart">
          <Cart/>
          <Circle>{getCount()}</Circle>
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