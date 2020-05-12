import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import ProductList from './pages/ProductList';
import ShoppingCart from './pages/ShoppingCart';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/shoppingCart" component={ShoppingCart} />
        <Route exact path="/" component={ProductList} />
      </Switch>
    </Router>
  );
}

export default App;
