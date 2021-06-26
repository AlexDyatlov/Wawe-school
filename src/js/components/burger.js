const burgerBtn = document.querySelector('.burger'),
      menuList = document.querySelector('.menu__list');

burgerBtn.addEventListener('click', function(){
  burgerBtn.classList.toggle('active');
  menuList.classList.toggle('menu__list--visible');
});
