// Theme toggle
const toggleBtn = document.getElementById("mode-toggle");
const root = document.documentElement;

toggleBtn.addEventListener("click", () => {
  const current = root.getAttribute("data-theme");
  root.setAttribute("data-theme", current === "dark" ? "light" : "dark");
  toggleBtn.textContent = current === "dark" ? "🌙" : "☀️";
});

// Loader remove
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  loader.style.display = "none";
});