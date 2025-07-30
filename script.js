// Theme toggle script
document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("theme-toggle");
  const body = document.body;

  // Load theme from localStorage
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    body.classList.add(savedTheme);
  }

  // Toggle theme on click
  if (toggle) {
    toggle.addEventListener("click", function () {
      body.classList.toggle("dark-theme");

      // Save to localStorage
      if (body.classList.contains("dark-theme")) {
        localStorage.setItem("theme", "dark-theme");
      } else {
        localStorage.removeItem("theme");
      }
    });
  }
});
