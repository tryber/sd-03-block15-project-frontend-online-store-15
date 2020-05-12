import React from 'react';
import './App.css';
import * as api from './services/api';

function App() {
  api.getCategories().then(categories => { console.log(categories); });
  api.getProductsFromCategoryAndQuery('MLB1144', 'playstation').then(playstations => { console.log(playstations); });
  return (
    <div className="App">
    </div>
  );
}

export default App;
