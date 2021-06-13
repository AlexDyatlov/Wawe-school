const blogSlider = new Swiper('.blog__slider', {
  loop: true,
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true
  },
});
