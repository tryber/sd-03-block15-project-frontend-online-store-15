import React, { Component } from 'react';
import * as api from '../services/api';
import SearchBox from '../components/SearchBox';
import ProductList from '../components/ProductList';
import Categories from '../components/Categories';
import Navbar from '../components/Navbar';

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
    const { searchText, products, categories, selectedCategory } = this.state;
    const { updateCartSize } = this.props;
    return (
      <div>
        <Navbar>
          <SearchBox
            handleClick={() => this.searchProducts}
            searchText={searchText}
            onSearchTextChange={(e) => this.setState({ searchText: e.target.value })}
          />
        </Navbar>
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
              <ProductList products={products} updateCartSize={updateCartSize} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
