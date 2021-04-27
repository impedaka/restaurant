import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { GlobalStyle } from './globalStyles';
import Home from './components/Home/index';
import MenuPage from './components/Menu/index';

function App() {
  return (
        <BrowserRouter>
        <GlobalStyle/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/menu" component={MenuPage} />
        </Switch>
      </BrowserRouter>
  );
}

export default App;
