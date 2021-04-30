import React, {useState, useEffect} from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { GlobalStyle } from './globalStyles';
import Home from './components/Home/index';
import Navbar from './components/Menu/Navbar/index';
import {db} from './firebase'
import Cart from './components/Cart/Cart';
import Popular from './components/Menu/Food/pages/popular';
import Rice from './components/Menu/Food/pages/rice';
import Sidebar from './components/Menu/Sidebar';
import Checkout from './components/CheckoutForm/Checkout'
import Completed from './components/CheckoutForm/Completed';
import Appetizer from './components/Menu/Food/pages/appetizer'
import Side from './components/Menu/Food/pages/side';
import Entrees from './components/Menu/Food/pages/entrees';
import Noodles from './components/Menu/Food/pages/noodles';
import Sets from './components/Menu/Food/pages/sets';
import Cooked from './components/Menu/Food/pages/cooked';
import Raw from './components/Menu/Food/pages/raw'
import Tempura from './components/Menu/Food/pages/tempura'
import Regular from './components/Menu/Food/pages/regular'
import Special from './components/Menu/Food/pages/special';
import Vegetable from './components/Menu/Food/pages/vegetable';
import Drinks from './components/Menu/Food/pages/drinks'
import Footer from './components/Footer/index';

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
          <Route exact path="/menu/appetizers" component={Appetizer} />
          <Route exact path="/menu/sides" component={Side} />
          <Route exact path="/menu/entrées" component={Entrees} />
          <Route exact path="/menu/noodles" component={Noodles} />
          <Route exact path="/menu/sets" component={Sets} />
          <Route exact path="/menu/cooked" component={Cooked} />
          <Route exact path="/menu/raw" component={Raw} />
          <Route exact path="/menu/tempura" component={Tempura} />
          <Route exact path="/menu/regular" component={Regular} />
          <Route exact path="/menu/special" component={Special} />
          <Route exact path="/menu/vegetable" component={Vegetable} />
          <Route exact path="/menu/beverages" component={Drinks} />
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
        <Footer/>
      </BrowserRouter>
  );
}

export default App;
