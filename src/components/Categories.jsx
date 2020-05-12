import React, { Component } from 'react';

export class Categories extends Component {
  render() {
    const categories = this.props.categories;
    const { selectedCategory, onCategoryChange } = this.props;

    return categories.map(({ id, name }) => (
      <div key={id} data-testid="category">
        <input
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
