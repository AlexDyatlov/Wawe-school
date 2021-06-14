let ul = document.querySelector('.menu__list');
let li = document.querySelectorAll('.menu__item');

li.forEach(el => {
  el.addEventListener('click', function(){
    ul.querySelector('.menu__item--active').classList.
        remove('menu__item--active');

        el.classList.add('menu__item--active');
  });
});
