const cart = [];
let total = 0;

function addToCart(productName, productPrice) {

  cart.push({ name: productName, price: productPrice });

  
  renderCart();
}

function renderCart() {
  const cartItems = document.getElementById('cartItems');
  cartItems.innerHTML = ''; 

  
  cart.forEach((product, index) => {
    const listItem = document.createElement('li');
    listItem.textContent = `${product.name} - R$${product.price}`;
    cartItems.appendChild(listItem);
  });

  
  total = cart.reduce((sum, product) => sum + product.price, 0);
  document.getElementById('total').textContent = total.toFixed(2);
}