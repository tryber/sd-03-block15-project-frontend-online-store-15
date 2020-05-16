import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as api from '../services/api';
import SearchBox from '../components/SearchBox';
import ProductList from '../components/ProductList';
import Categories from '../components/Categories';

export default class MainPage extends Component {
  constructor(props) {
    super(props);

    if (!localStorage.getItem('cartItems')) {
      localStorage.setItem('cartItems', '[]');
    }

    this.state = {
      categories: [],
      selectedCategory: '',
      searchText: '',
      products: [],
    };
    this.searchProducts = this.searchProducts.bind(this);
  }

  componentDidMount() {
    api.getCategories().then((categories) => {
      this.setState({ categories });
    });
  }

  searchProducts() {
    const { searchText, selectedCategory } = this.state;
    api
      .getProductsFromCategoryAndQuery(selectedCategory, searchText)
      .then((products) => this.setState({ products }));
  }

  render() {
    const { searchText, products, categories, selectedCategory, cartItems } = this.state;
    return (
      <div>
        <div className="navbar navbar-dark bg-dark justify-content-center ">
          <SearchBox
            handleClick={() => this.searchProducts}
            searchText={searchText}
            onSearchTextChange={(e) => this.setState({ searchText: e.target.value })}
          />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-3">
              <Categories
                categories={categories}
                selectedCategory={selectedCategory}
                onCategoryChange={async (e) => {
                  await this.setState({ selectedCategory: e.target.value });
                  this.searchProducts();
                }}
              />
            </div>
            <div className="col">
              <Link
                to="/shoppingCart"
                data-testid="shopping-cart-button"
              >
                Carrinho de compras
              </Link>
              <ProductList products={products} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
