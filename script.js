function explore() {
  alert("Welcome to the future of gaming.");
}

// Toggle Dark/Light Theme
document.getElementById("toggleTheme").addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
  const btn = document.getElementById("toggleTheme");
  btn.textContent = document.body.classList.contains("light-mode") ? "Light Mode" : "Dark Mode";
});

// Show Current Date
document.getElementById("dateDisplay").textContent =
  "Today's date is: " + new Date().toLocaleDateString();

// Footer Year Auto Update
document.getElementById("year").textContent = new Date().getFullYear();
