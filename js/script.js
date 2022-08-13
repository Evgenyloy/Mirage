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

let toggles = document.getElementsByClassName('accordion__head');
let contentDiv = document.getElementsByClassName('accordion__content');
let accordion = document.querySelectorAll('.accordion__contentBx')


for (let i = 0; i < toggles.length; i++) {
    toggles[i].addEventListener('click', () => {
        if (parseInt(contentDiv[i].style.height) != contentDiv[i].scrollHeight) {
            contentDiv[i].style.height = contentDiv[i].scrollHeight + "px";
            accordion[i].classList.remove('active');
            accordion[i].classList.add('active');

        }
        else {
            contentDiv[i].style.height = "0px";
            accordion[i].classList.remove('active');
            /* accordion[i].classList.add('active'); */
        }
        for (let j = 0; j < contentDiv.length; j++) {
            if (j !== i) {
                contentDiv[j].style.height = "0px";
                accordion[j].classList.remove('active');
                /* accordion[j].classList.add('active'); */

            }
        }

    })
}