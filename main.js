'use strict'

// navbar scrolling
const navbar = document.querySelector('#navbar');
var navbarHeight = navbar.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
    if(window.scrollY > navbarHeight) {
        navbar.classList.add('navbar--dark');
    } else {
        navbar.classList.remove('navbar--dark')
    }
})

// handle navbar button
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event) => {
    var target = event.target;
    var link = target.dataset.link;

    if(link == undefined) {
        return;
    }

    scrollIntoViewSmooth(link);
});

// handle contactMe button
const contactMeBtn = document.querySelector('.home__contact');
contactMeBtn.addEventListener('click', () => {
    scrollIntoViewSmooth('#contact');
});

function scrollIntoViewSmooth(selector) {
    const element = document.querySelector(selector);
    element.scrollIntoView({behavior: "smooth"});
}