import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import MainPage from './pages/MainPage';
import ShoppingCart from './pages/ShoppingCart';
import ProductDetail from './pages/ProductDetail';
import Checkout from './pages/Checkout';

function App() {
  return (
    <Router>
      <nav className="navbar navbar-dark bg-dark justify-content-center">
        <Link to="/" className="navbar-brand">Online Store</Link>
      </nav>
      <Switch>
        <Route exact path="/CheckOut" component={Checkout} />
        <Route exact path="/shoppingCart" component={ShoppingCart} />
        <Route exact path="/product/:id" component={ProductDetail} />
        <Route exact path="/" component={MainPage} />
      </Switch>
    </Router>
  );
}

export default App;
