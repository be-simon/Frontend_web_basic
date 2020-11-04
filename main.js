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

// home transparent
const homeContainer = document.querySelector('#home .section__container');
const homeElementSize = homeContainer.getBoundingClientRect();

document.addEventListener('scroll', () => {    
    homeContainer.style.opacity = 1 - ((window.scrollY / homeElementSize.height));
});

// arrow btn 
const arrowBtn = document.querySelector('.arrow-btn');
arrowBtn.addEventListener('click', () => {
    window.scrollTo({top: 0, behavior: "smooth"});
});

document.addEventListener('scroll', () => {
    if(window.scrollY > homeElementSize.bottom / 2) {
        arrowBtn.classList.add('visible');
    } else {
        arrowBtn.classList.remove('visible');
    }
});

// work menu filtering
const workMenu = document.querySelector('.work__menu');
const projects = document.querySelectorAll('.project');
var lastSelected;
workMenu.addEventListener('mouseover', (event) => {
    var workMenuBtn = event.target.dataset.workMenuBtn ;
        // || event.target.parentNode.dataset.workMenuBtn;
    
    if(workMenuBtn == null) {
        workMenuBtn = lastSelected;
    } else {
        lastSelected = workMenuBtn;
    }
    
    projects.forEach((project) => {
        if(workMenuBtn === "*" || project.dataset.projectType == workMenuBtn ) {
            project.classList.remove('invisible');
        } else {
            project.classList.add('invisible');
        }
    })
})


// Custom Method
function scrollIntoViewSmooth(selector) {
    const element = document.querySelector(selector);
    element.scrollIntoView({behavior: "smooth"});
}