import React, {useState, useEffect} from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { GlobalStyle } from './globalStyles';
import Home from './components/Home/index';
import Navbar from './components/Menu/Navbar/index';
import {db} from './firebase'
import Cart from './components/Cart/Cart';
import Popular from './components/Menu/Food/pages/popular';
import Rice from './components/Menu/Food/pages/Rice';
import Sidebar from './components/Menu/Sidebar';
import Checkout from './components/CheckoutForm/Checkout'
import Completed from './components/CheckoutForm/Completed';

function App() {
  const [cartItems, setCartItems] = useState([])

  const getCartitems = () => {
    db.collection('CartItems').onSnapshot((snapshot) => {
      const tempItems = snapshot.docs.map((doc) => ({
        id: doc.id,
        product: doc.data()
      }))
      setCartItems(tempItems)
    })
  }
//get items from db
  useEffect(()=>{
    getCartitems();
  }, [])

    //toggle function for sidebar
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen);
      };

//different routes render different menues with different foods
  return (
        <BrowserRouter>
          <Navbar toggle={toggle} cartItems={cartItems}/>
          <Sidebar isOpen={isOpen} toggle={toggle}/>
        <GlobalStyle/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/menu" component={Popular} />
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
          <Route exact path="/done">
            <Completed cartItems={cartItems}/>
          </Route>
          <Route exact path="/checkout">
            <Checkout cartItems={cartItems}/>
          </Route>
          <Route exact path="/cart">
            <Cart cartItems={cartItems}/>
          </Route>
        </Switch>
      </BrowserRouter>
  );
}

export default App;
