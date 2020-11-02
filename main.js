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

    var scrollTo = document.querySelector(link);
    scrollTo.scrollIntoView({behavior: "smooth", block: "center"});
});

// handle contactMe button
const contactMeBtn = document.querySelector('.home__contact');
contactMeBtn.addEventListener('click', () => {
    const contact = document.querySelector('#contact');
    contact.scrollIntoView({behavior: "smooth"});
});