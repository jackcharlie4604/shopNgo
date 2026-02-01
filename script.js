let foodCart = [];
let shopCart = [];

/* SWITCH SECTIONS */
function showFood() {
  document.getElementById("foodSection").style.display = "block";
  document.getElementById("shopSection").style.display = "none";
}

function showShop() {
  document.getElementById("foodSection").style.display = "none";
  document.getElementById("shopSection").style.display = "block";
}

/* FOOD CART */
function addFood(item, price) {
  foodCart.push(price);
  document.getElementById("foodCart").innerHTML += `<li>${item} - ₹${price}</li>`;
  updateFoodTotal();
}

function updateFoodTotal() {
  const total = foodCart.reduce((a,b)=>a+b,0);
  document.getElementById("foodTotal").innerText = "Total: ₹" + total;
}

/* SHOP CART */
function addShop(item, price) {
  shopCart.push(price);
  document.getElementById("shopCart").innerHTML += `<li>${item} - ₹${price}</li>`;
  updateShopTotal();
}

function updateShopTotal() {
  const total = shopCart.reduce((a,b)=>a+b,0);
  document.getElementById("shopTotal").innerText = "Total: ₹" + total;
}

/* PAYMENT */
function checkout() {
  alert(
    "Thank you for choosing us.\n\n" +
    "This is a demo website.\n" +
    "We will be live soon and notify you."
  );
  document.getElementById("feedback").style.display = "block";
}

/* FEEDBACK */
function submitFeedback() {
  alert("Thank you for your feedback!");
}
