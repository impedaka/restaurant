import styled from 'styled-components';
import {FaBars} from 'react-icons/fa';
import {AiOutlineShoppingCart} from 'react-icons/ai';

export const Circle = styled.nav`
  text-align: center;
  font-size: 12px;
  background-color: #FA8072;
  border-radius: 50%;
  padding: 5px;
  color: white;
  height: 25px;
  width: 25px;
  display: inline-block;
  position: absolute;
  top: 10px;
`
export const Nav = styled.nav`
  background-color: white;
  height: 80px;
  display: flex;
  justify-content: center;
  justify-content: space-between;
  font-weight: 700;
  position: sticky;
  top: 0;
  z-index: 100;
`;

export const NavIcon = styled.div`
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  color: grey;
  p {
    transform: translate(-175%, 100%);
    font-weight: bold;
  }
  &:hover {
    color: black;
    transition: 0.2s ease-in-out;
  }
`;

export const Bars = styled(FaBars)`
font-size: 2rem;
transform: translate(-50%, -15%);
&:hover {
  color: black;
  transition: 0.2s ease-in-out;
}
`

export const Cart = styled(AiOutlineShoppingCart)`
font-size: 3.5rem;
color: grey;
position: center;
transform: translate(15%, 15%);
cursor: pointer;
&:hover {
  color: black;
  transition: 0.2s ease-in-out;
}
`