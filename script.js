// Cart array
let cartItems = [];

// Add item to cart
function addToCart(item) {
  cartItems.push(item);
  updateCart();
}

// Update cart UI
function updateCart() {
  const cartList = document.getElementById("cart");
  cartList.innerHTML = "";

  if (cartItems.length === 0) {
    cartList.innerHTML = "<li>Cart is empty</li>";
    return;
  }

  cartItems.forEach((item, index) => {
    const li = document.createElement("li");
    li.textContent = item;
    cartList.appendChild(li);
  });
}

// Checkout (demo)
function checkout() {
  if (cartItems.length === 0) {
    alert("Your cart is empty!");
    return;
  }

  alert(
    "🙏 Thank you for choosing us!\n\n" +
    "This website is for demo purposes only.\n" +
    "We will notify you when we go live."
  );

  document.getElementById("feedbackSection").style.display = "block";
  cartItems = [];
  updateCart();
}
