import styled from 'styled-components';
import {AiOutlineInfoCircle} from 'react-icons/ai'
import {IoIosAddCircle} from 'react-icons/io';
import {BsFillTrashFill} from 'react-icons/bs';

export const Quantity = styled.nav`
select {
  font-size: 1rem;
  border-radius: 7px;
  background-color: #F0F2F2; 
  padding: 4px;
  box-shadow: 0 2px 5px rgba(15,17,17,.15);
  :focus {
      outline: none;
  }
}
`
export const Delete = styled(BsFillTrashFill)`
font-size: 1.5rem;
transform: translate(-50%, -15%);
color: grey;
position: relative;
left: 140px;
top: 40px;
cursor: pointer;
&:hover {
  color: black;
  transition: 0.2s ease-in-out;
}
`
export const Info = styled(AiOutlineInfoCircle)`
font-size: 1.5rem;
transform: translate(-50%, -15%);
color: grey;
position: relative;
left: 225px;
cursor: pointer;
&:hover {
  color: black;
  transition: 0.2s ease-in-out;
}
`
export const Add = styled(IoIosAddCircle)`
font-size: 2.5rem;
transform: translate(-50%, -15%);
color: white;
opactiy: 0.5;
position: relative;
bottom: -55px;
left: 225px;
cursor: pointer;
&:hover {
  color: #fa8072;
  transition: 0.2s ease-in-out;
}
`
export const Layout = styled.nav `
    flex-wrap: wrap; 
    display: flex; 
    padding: 40px 20px;
`