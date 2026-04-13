// Toggle mobile menu
document.addEventListener('DOMContentLoaded', function () {
  const toggleButton = document.querySelector('.navbar .mobile-menu-toggle');
  const mobileMenu = document.querySelector('.navbar .mobile-menu-items');

  toggleButton.addEventListener('click', function () {
    mobileMenu.classList.toggle('active');
  });
});

// Change navbar background on scroll
window.addEventListener('scroll', function () {
  const navbar = document.querySelector('.navbar');

  if (window.scrollY > 0) {
    navbar.classList.add('navbar-scroll');
  } else {
    navbar.classList.remove('navbar-scroll');
  }
});

document.getElementById("languageSwitcher")
  ?.addEventListener("change", (e) => {
    loadLanguage(e.target.value);
});

document.addEventListener('DOMContentLoaded', () => {
  const lang = detectLanguage();
  loadLanguage(lang);
})

function detectLanguage(){
  const saved = localStorage.getItem('lang');
  if(saved) return saved;

  const browserLang = navigator.language;

  if(browserLang.startsWith("de")) return "de";

  return "en";
}

