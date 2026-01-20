// ===== Menu mobile =====
const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

function closeMenu() {
  navMenu.classList.remove("is-open");
  menuBtn.classList.remove("is-open");
  menuBtn.setAttribute("aria-expanded", "false");
}

menuBtn.addEventListener("click", () => {
  const open = navMenu.classList.toggle("is-open");
  menuBtn.classList.toggle("is-open", open);
  menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
});

// Fecha menu ao clicar em um link
navMenu.querySelectorAll("a").forEach(a => {
  a.addEventListener("click", () => closeMenu());
});

// Fecha menu clicando fora
document.addEventListener("click", (e) => {
  const clickedInside = navMenu.contains(e.target) || menuBtn.contains(e.target);
  if (!clickedInside) closeMenu();
});

// ===== Header efeito ao rolar =====
const header = document.querySelector(".header");
window.addEventListener("scroll", () => {
  if (window.scrollY > 10) header.classList.add("header--scrolled");
  else header.classList.remove("header--scrolled");
});

// ===== Progress bar =====
const progressBar = document.getElementById("progressBar");
window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const p = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
  progressBar.style.width = `${p}%`;
});

// ===== Reveal animations (IntersectionObserver) =====
const items = document.querySelectorAll(".reveal");
const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

items.forEach(el => io.observe(el));
// ===== Voltar ao topo (forçado) =====
document.querySelectorAll('a[href="#top"]').forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});
