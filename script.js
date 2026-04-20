// REVEAL SUAVE (más fluido)
const elements = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    }
  });
}, {
  threshold: 0.2
});

elements.forEach(el => observer.observe(el));


// NAV CAMBIA AL SCROLL
window.addEventListener("scroll", () => {
  const nav = document.querySelector(".nav");

  if (window.scrollY > 60) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});


// NAV ACTIVO SEGÚN SECCIÓN (CLAVE)
const sections = document.querySelectorAll("section");
const links = document.querySelectorAll(".nav a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 200) {
      current = section.getAttribute("id");
    }
  });

  links.forEach(a => {
    a.classList.remove("active");
    if (a.getAttribute("href") === "#" + current) {
      a.classList.add("active");
    }
  });
});


// ENTRADA HERO (efecto lujo)
window.addEventListener("load", () => {
  document.querySelector(".hero-content").classList.add("show");
});
