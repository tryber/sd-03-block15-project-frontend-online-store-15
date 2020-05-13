export async function getCategories(countryCode = 'MLB') {
  return fetch(`https://api.mercadolibre.com/sites/${countryCode}/categories`)
    .then((categoriesList) => categoriesList.json());
}

export async function getProductsFromCategoryAndQuery(categoryId, query, countryCode = 'MLB') {
  return fetch(`https://api.mercadolibre.com/sites/${countryCode}/search?category=${categoryId}&q=${query}`)
    .then((products) => products.json());
}
