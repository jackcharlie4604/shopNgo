const foodByCity = {
  Delhi: ["Chole Bhature", "Momos", "Butter Chicken"],
  Mumbai: ["Vada Pav", "Pav Bhaji", "Bhel Puri"],
  Hyderabad: ["Biryani", "Haleem", "Kebab"],
  Bangalore: ["Dosa", "Idli", "Filter Coffee"]
};

function loadFood() {
  const city = document.getElementById("city").value;
  const foodList = document.getElementById("foodList");

  if (!city) {
    foodList.innerHTML = "<p>Select a location to see food</p>";
    return;
  }

  foodList.innerHTML = "";
  foodByCity[city].forEach(food => {
    foodList.innerHTML += `<div class="card">🍴 ${food}</div>`;
  });
}

function getLocation() {
  if (!navigator.geolocation) {
    alert("Geolocation not supported");
    return;
  }

  navigator.geolocation.getCurrentPosition(
    () => alert("Location detected! Select city manually for now."),
    () => alert("Location permission denied")
  );
}
