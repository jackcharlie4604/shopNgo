console.log("ShopNgo JS loaded");

let cartItems = [];

function addToCart(item) {
  alert(item + " added to cart");
  cartItems.push(item);
  renderCart();
}

function renderCart() {
  const cart = document.getElementById("cart");
  if (!cart) return;

  cart.innerHTML = "";
  cartItems.forEach(item => {
    const li = document.createElement("li");
    li.innerText = item;
    cart.appendChild(li);
  });
}

function checkout() {
  if (cartItems.length === 0) {
    alert("Cart is empty");
    return;
  }

  alert(
    "Thank you for choosing us.\n\n" +
    "This website is for demo purposes only.\n" +
    "We will notify you when we go live."
  );

  document.getElementById("feedbackSection").style.display = "block";
  cartItems = [];
  renderCart();
}
