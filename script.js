let cart = [];

function addToCart(item) {
  cart.push(item);
  renderCart();
}

function renderCart() {
  const cartList = document.getElementById("cart");
  cartList.innerHTML = "";

  cart.forEach(item => {
    const li = document.createElement("li");
    li.innerText = item;
    cartList.appendChild(li);
  });
}
