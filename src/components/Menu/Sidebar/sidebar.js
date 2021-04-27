import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 350px;
  flex: 0.2;
  height: 100%;
  background: #FA8072;
  display: grid;
  align-items: center;
  top: 0;
  transition: 0.3s ease-in-out;
  right: ${({ isOpen }) => (isOpen ? '0' : '-1000px')};
  @media screen and (max-width: 400px) {
    width: 100%;
  }
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  border: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const SidebarMenu = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(14, 60px);
  text-align: center;
  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(14, 40px);
  }
`;

export const CloseIcon = styled(FaTimes)`
  color: #FFE6EE;
  &:hover {
    color: white;
    transition: 0.2s ease-in-out;
  }
`;

export const SidebarLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: left;
  font-size: 1.5rem;
  padding: 50px;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  color: #FFE6EE;
  cursor: pointer;
  &:hover {
    color: white;
    transition: 0.2s ease-in-out;
  }
`;
