import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import * as api from './services/api';
import ProductList from './pages/ProductList';

function App() {
  api.getCategories().then((categories) => { console.log(categories); });
  api.getProductsFromCategoryAndQuery('MLB1144', 'playstation').then((playstations) => { console.log(playstations); });
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ProductList} />
      </Switch>
    </Router>
  );
}

export default App;
