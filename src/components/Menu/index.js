import React, {useState} from 'react'
import Navbar from './Navbar/index';
import Sidebar from './Sidebar/index'
import Popular from './Food/pages/popular'
import Rice from './Food/pages/Rice';
import Cart from './Cart';
import { BrowserRouter, Switch, Route } from "react-router-dom";

const MenuPage = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen);
      };

    return (
    <BrowserRouter>
    <Navbar toggle={toggle} />
    <Sidebar isOpen={isOpen} toggle={toggle}/>
    <Switch>
        <Route exact path="/menu" component={Popular} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/menu/rice" component={Rice} />
        <Route exact path="/menu/appetizers" component={Rice} />
        <Route exact path="/menu/sides" component={Rice} />
        <Route exact path="/menu/entrées" component={Rice} />
        <Route exact path="/menu/noodles" component={Rice} />
        <Route exact path="/menu/sets" component={Rice} />
        <Route exact path="/menu/cooked" component={Rice} />
        <Route exact path="/menu/raw" component={Rice} />
        <Route exact path="/menu/tempura" component={Rice} />
        <Route exact path="/menu/regular" component={Rice} />
        <Route exact path="/menu/special" component={Rice} />
        <Route exact path="/menu/vegetable" component={Rice} />
        <Route exact path="/menu/beverages" component={Rice} />
    </Switch>
    </BrowserRouter>
    )
}

export default MenuPage;