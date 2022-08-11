let burger = document.querySelector('.burger')
let nav = document.querySelector('.nav')
let link = document.querySelectorAll('a')


burger.addEventListener('click', function () {
    burger.classList.toggle('burger__active');
    nav.classList.toggle('nav_mobile');

})

link.forEach(el => {
    el.addEventListener('click', function () {
        burger.classList.remove('burger__active');
        nav.classList.remove('nav_mobile');
    })
})