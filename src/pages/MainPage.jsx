import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as api from '../services/api';
import SearchBox from '../components/SearchBox';
import ProductList from '../components/ProductList';
import Categories from '../components/Categories';

export default class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      selectedCategory: '',
      searchText: '',
      products: [],
      cartItems: [],
    };
    this.searchProducts = this.searchProducts.bind(this);
    this.addToCart = this.addToCart.bind(this);
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

  addToCart(id, title, price) {
    const { cartItems } = this.state;
    const itemIndex = cartItems.findIndex((item) => item.id === id);
    if (itemIndex !== -1) {
      const updatedCart = cartItems;
      updatedCart[itemIndex].quantity += 1;
      this.setState({ cartItems: updatedCart });
    } else {
      this.setState({
        cartItems: [...cartItems,
          { title, id, price, quantity: 1 }],
      });
    }
  }

  updatedCart

  render() {
    const { searchText, products, categories, selectedCategory, cartItems } = this.state;
    return (
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
            <SearchBox
              handleClick={() => this.searchProducts}
              searchText={searchText}
              onSearchTextChange={(e) => this.setState({ searchText: e.target.value })}
            />
            <Link to={{ pathname: '/shoppingCart', state: { cartItems } }} data-testid="shopping-cart-button">
              Carrinho de compras
            </Link>
            <ProductList products={products} addToCart={this.addToCart} />
          </div>
        </div>
      </div>
    );
  }
}
