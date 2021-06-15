const burgerBtn = document.querySelector('.burger'),
      menu = document.querySelector('.menu');

burgerBtn.addEventListener('click', function(){
  burgerBtn.classList.toggle('active');
  menu.classList.toggle('menu--visible');
});
