// ===== Menu mobile =====
const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

function closeMenu() {
  if (!navMenu || !menuBtn) return;
  navMenu.classList.remove("is-open");
  menuBtn.classList.remove("is-open");
  menuBtn.setAttribute("aria-expanded", "false");
}

if (menuBtn && navMenu) {
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
}

// ===== Header efeito ao rolar =====
const header = document.querySelector(".header");
window.addEventListener("scroll", () => {
  if (!header) return;
  if (window.scrollY > 10) header.classList.add("header--scrolled");
  else header.classList.remove("header--scrolled");
});

// ===== Progress bar =====
const progressBar = document.getElementById("progressBar");
window.addEventListener("scroll", () => {
  if (!progressBar) return;
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const p = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
  progressBar.style.width = `${p}%`;
});

// ===== Reveal animations (com fallback) =====
const items = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  items.forEach(el => io.observe(el));
} else {
  // Se o navegador não suportar, mostra tudo
  items.forEach(el => el.classList.add("is-visible"));
}

// ===== Voltar ao topo (garantido) =====
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('a[href="#top"]').forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      closeMenu();
      window.scrollTo({ top: 0, behavior: "smooth" });
      // opcional: limpar o hash pra não ficar "#top" na URL
      history.replaceState(null, "", window.location.pathname + window.location.search);
    });
  });
});
