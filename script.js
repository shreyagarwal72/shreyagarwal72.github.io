// ===== DARK MODE TOGGLE =====
const toggleSwitch = document.getElementById('toggle');

if (toggleSwitch) {
  toggleSwitch.addEventListener('change', function () {
    if (this.checked) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  });
}

// ===== SMOOTH SCROLL (for nav links) =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// ===== OPTIONAL: PAGE LOADER (if added later) =====
window.addEventListener("load", function () {
  const loader = document.querySelector(".loader");
  if (loader) {
    loader.style.display = "none";
  }
});
