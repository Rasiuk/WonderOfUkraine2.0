new Swiper(".swiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
  breakpoints: { 768: { slidesPerView: 2 } },
});
