export function getCategories(countryCode = 'MLB') {
  const proxy = 'https://cors-anywhere.herokuapp.com/';
  const api = `https://api.mercadolibre.com/sites/${countryCode}/categories`;
  return fetch(`${proxy}${api}`)
    .then((response) => response.json());
}

export async function getProductsFromCategoryAndQuery(categoryId, query, countryCode = 'MLB') {
  const proxy = 'https://cors-anywhere.herokuapp.com/';
  const api = `https://api.mercadolibre.com/sites/${countryCode}/search?category=${categoryId}&q=${query}`;
  return fetch(`${proxy}${api}`)
    .then((response) => response.json());
}
