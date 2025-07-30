document.addEventListener("DOMContentLoaded", () => {
  const themeButton = document.getElementById("toggle-theme");

  if (themeButton) {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.body.classList.add("dark-theme");
    }

    themeButton.addEventListener("click", () => {
      document.body.classList.toggle("dark-theme");

      const currentTheme = document.body.classList.contains("dark-theme") ? "dark" : "light";
      localStorage.setItem("theme", currentTheme);
    });
  }
});
