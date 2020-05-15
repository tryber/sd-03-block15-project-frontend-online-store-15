import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import MainPage from './pages/MainPage';
import ShoppingCart from './pages/ShoppingCart';
import ProductDetail from './pages/ProductDetail';
import CheckOut from './pages/CheckOut';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/CheckOut" component={CheckOut} />
        <Route exact path="/shoppingCart" component={ShoppingCart} />
        <Route exact path="/product/:id" component={ProductDetail} />
        <Route exact path="/" component={MainPage} />
      </Switch>
    </Router>
  );
}

export default App;
