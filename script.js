let cart = [];
let prices = {
  Pizza: 299,
  Burger: 199,
  Biryani: 349,
  Salad: 249,
  Smartphone: 15999,
  Laptop: 55000,
  Headphones: 2499,
  Clothing: 999
};

function addToCart(item) {
  cart.push(item);
  renderCart();
}

function renderCart() {
  const cartList = document.getElementById("cart");
  const totalBox = document.getElementById("total");

  if (!cartList || !totalBox) return;

  cartList.innerHTML = "";
  let total = 0;

  cart.forEach(item => {
    const li = document.createElement("li");
    li.innerText = `${item} - ₹${prices[item]}`;
    cartList.appendChild(li);
    total += prices[item];
  });

  totalBox.innerText = "Total: ₹" + total;
}

function checkout() {
  if (cart.length === 0) {
    alert("Your cart is empty");
    return;
  }

  alert(
    "🙏 Thank you for choosing us!\n\n" +
    "This website is for demo purposes only.\n" +
    "We will notify you when we go live."
  );

  document.getElementById("feedbackSection").style.display = "block";
  cart = [];
  renderCart();
}
