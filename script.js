let cart = [];

function addToCart(item) {
  cart.push(item);
  renderCart();
  showToast(item + " added to cart");
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

function checkout() {
  alert(
    "Thank you for choosing us.\n\n" +
    "This is a demo website.\n" +
    "We will be live soon and notify you."
  );

  document.getElementById("feedbackSection").style.display = "block";
}

function submitFeedback() {
  alert("Thank you for your feedback!");
}
function showToast(message) {
  const toast = document.getElementById("toast");
  toast.innerText = message;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 2000);
}
function addToCart(item) {
  cart.push(item);
  renderCart();
  showToast(item + " added to cart");
}
function loginUser() {
  showToast("Login successful (demo)");
}
function submitFeedback() {
  showToast("Thank you for your feedback!");
}
