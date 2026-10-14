const form = document.querySelector(".questions__form");

form.addEventListener("submit", (event) => {
  event.preventDefault(); // сторінка не перезавантажується

  const data = Object.fromEntries(new FormData(form));
  console.log("Заявка:", data); // тут можна відправити дані через fetch

  form.reset(); // очищаємо поля
});
