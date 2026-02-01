let foodCart = [];
let shopCart = [];

function showFood(){
  document.getElementById("foodSection").style.display="block";
  document.getElementById("shopSection").style.display="none";
}

function showShop(){
  document.getElementById("foodSection").style.display="none";
  document.getElementById("shopSection").style.display="block";
}

function addFood(item,price){
  foodCart.push(price);
  document.getElementById("foodCart").innerHTML += `<li>${item} - ₹${price}</li>`;
  updateFoodTotal();
}

function addShop(item,price){
  shopCart.push(price);
  document.getElementById("shopCart").innerHTML += `<li>${item} - ₹${price}</li>`;
  updateShopTotal();
}

function updateFoodTotal(){
  let total = foodCart.reduce((a,b)=>a+b,0);
  document.getElementById("foodTotal").innerText = "Total: ₹"+total;
}

function updateShopTotal(){
  let total = shopCart.reduce((a,b)=>a+b,0);
  document.getElementById("shopTotal").innerText = "Total: ₹"+total;
}

function checkout(){
  alert("Thank you for choosing us. This is a demo website but we will be live soon. We will notify you.");
  document.getElementById("feedback").style.display="block";
}

function submitFeedback(){
  alert("Thank you for your feedback!");
}

/* Visitor tracking (demo) */
let visits = JSON.parse(localStorage.getItem("visits") || "[]");
visits.push({time:new Date().toString()});
localStorage.setItem("visits",JSON.stringify(visits));
