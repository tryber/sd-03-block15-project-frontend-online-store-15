export function addToCart(title, price, id, availableQuantity) {
  const cartItems = JSON.parse(localStorage.getItem('cartItems'));
  const itemIndex = cartItems.findIndex((item) => item.id === id);
  if (itemIndex !== -1) {
    console.log(availableQuantity, cartItems[itemIndex].quantity);
    if (cartItems[itemIndex].quantity < availableQuantity) {
      cartItems[itemIndex].quantity += 1;
      localStorage.setItem(
        'cartItems',
        JSON.stringify(cartItems),
      );
    }
  } else {
    localStorage.setItem(
      'cartItems',
      JSON.stringify([...cartItems, { title, id, price, quantity: 1, availableQuantity }]),
    );
  }
}

export function subToCart(id) {
  const cartItems = JSON.parse(localStorage.getItem('cartItems'));
  const itemIndex = cartItems.findIndex((item) => item.id === id);
  if (itemIndex !== -1 && cartItems[itemIndex].quantity > 1) {
    cartItems[itemIndex].quantity -= 1;
    localStorage.setItem(
      'cartItems',
      JSON.stringify(cartItems),
    );
  }
}

export function updateCart(title, price, id, quantity) {
  console.log(title, price, id, quantity);
  const cartItems = JSON.parse(localStorage.getItem('cartItems'));
  const itemIndex = cartItems.findIndex((item) => item.id === id);
  if (itemIndex !== -1) {
    cartItems[itemIndex] = { quantity, title, price, id };
    localStorage.setItem(
      'cartItems',
      JSON.stringify(cartItems),
    );
  } else {
    localStorage.setItem(
      'cartItems',
      JSON.stringify([...cartItems, { title, id, price, quantity }]),
    );
  }
}

export function deleteCartItem(id) {
  const cartItems = JSON.parse(localStorage.getItem('cartItems'));
  const itemIndex = cartItems.findIndex((item) => item.id === id);
  if (itemIndex !== -1) {
    cartItems.splice(itemIndex, 1);
    localStorage.setItem(
      'cartItems',
      JSON.stringify(cartItems),
    );
  }
}
