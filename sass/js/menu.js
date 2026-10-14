const burger = document.querySelector(".burger");
const menu = document.querySelector("#main-menu");

function setMenu(open) {
  burger.classList.toggle("is-open", open);
  menu.classList.toggle("is-open", open);
  document.body.classList.toggle("no-scroll", open);
  burger.setAttribute("aria-expanded", String(open));
  burger.setAttribute("aria-label", open ? "Close menu" : "Open menu");
}

burger.addEventListener("click", () => {
  setMenu(!menu.classList.contains("is-open"));
});

// закриваємо меню після кліку на пункт
menu.addEventListener("click", (event) => {
  if (event.target.closest("a")) setMenu(false);
});

// закриваємо меню по Escape
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") setMenu(false);
});

// якщо вікно розтягнули до десктопу — скидаємо стан меню
window.matchMedia("(min-width: 768px)").addEventListener("change", (e) => {
  if (e.matches) setMenu(false);
});

// кнопка "Our tours" у hero прокручує до турів
document.querySelectorAll("[data-scroll-to]").forEach((btn) => {
  btn.addEventListener("click", () => {
    document
      .querySelector(btn.dataset.scrollTo)
      ?.scrollIntoView({ behavior: "smooth" });
  });
});
