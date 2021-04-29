import React from 'react';
import {
  SidebarContainer,
  Icon,
  SidebarMenu,
  SidebarLink,
  CloseIcon
} from './sidebar';

//allows user to see differnt pages with react-router
const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle} >
      <Icon onClick={toggle}>
      <CloseIcon />
      </Icon>
      <SidebarMenu >
        <SidebarLink to='/menu'>Popular Items</SidebarLink>
        <SidebarLink to='/menu/appetizers'>Appetizers</SidebarLink>
        <SidebarLink to='/menu/sides'>Soup & Salad</SidebarLink>
        <SidebarLink to='/menu/entrées'>Entrées</SidebarLink>
        <SidebarLink to='/menu/noodles'>Noodles</SidebarLink>
        <SidebarLink to='/menu/sets'>Sushi Sets & Platters</SidebarLink>
        <SidebarLink to='/menu/cooked'>Cooked Nigiri</SidebarLink>
        <SidebarLink to='/menu/raw'>Raw Nigiri</SidebarLink>
        <SidebarLink to='/menu/tempura'>Tempura Rolls</SidebarLink>
        <SidebarLink to='/menu/regular'>Regular Roll</SidebarLink>
        <SidebarLink to='/menu/special'>Special Rolls</SidebarLink>
        <SidebarLink to='/menu/vegetable'>Vegetable Rolls</SidebarLink>
        <SidebarLink to='/menu/rice'>Rice Dish</SidebarLink>
        <SidebarLink to='/menu/beverages'>Beverages</SidebarLink>
      </SidebarMenu>
    </SidebarContainer>
  );
};

export default Sidebar;