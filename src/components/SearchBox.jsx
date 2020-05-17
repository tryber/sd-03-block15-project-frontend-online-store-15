import React, { Component } from 'react';

export class SearchBox extends Component {
  render() {
    const { handleClick, searchText, onSearchTextChange } = this.props;
    return (
      <form className="form-inline form-control-lg w-50">
        <input
          id="search-input"
          className="form-control my-5 mx-3 my-sm-0 w-75"
          type="search"
          placeholder="Search"
          aria-label="Search"
          data-testid="query-input"
          value={searchText}
          onChange={onSearchTextChange}
        />

        <button
          className="btn btn-danger my-2 my-sm-0"
          type="submit"
          data-testid="query-button"
          onClick={handleClick()}
        >
          Search
        </button>
      </form>
    );
  }
}

export default SearchBox;
