import React, { Component } from 'react';

export class Categories extends Component {
  render() {
    const { selectedCategory, onCategoryChange, categories } = this.props;

    return categories.map(({ id, name }) => (
      <div key={id}>
        <input
          data-testid="category"
          type="radio"
          id={id}
          value={id}
          name="categories"
          checked={selectedCategory === id}
          onChange={onCategoryChange}
        />
        <label htmlFor={id}>{name}</label>
      </div>
    ));
  }
}

export default Categories;
