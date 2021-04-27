import styled from 'styled-components';
import {AiOutlineInfoCircle} from 'react-icons/ai'
import {IoIosAddCircle} from 'react-icons/io';
import {GoDiffAdded} from 'react-icons/go';
import {GoDiffRemoved} from 'react-icons/go';
import {AiOutlineEdit} from 'react-icons/ai';
import {BsArrowReturnLeft} from 'react-icons/bs';
import {BsBookmarkCheck} from 'react-icons/bs';

export const Checkout = styled.nav`
text-align: center;
padding: 100px;
color: white;
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