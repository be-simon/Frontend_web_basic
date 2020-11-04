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

// work menu filtering & animating
const workMenu = document.querySelector('.work__menu');
const projectContainer = document.querySelector('.work__projects');
const projects = document.querySelectorAll('.project');
var lastSelected;
// projectContainer.classList.add('.animate-in');


workMenu.addEventListener('mouseover', (event) => {
    
    var workMenuBtn = event.target.dataset.workMenuBtn ;
    // || event.target.parentNode.dataset.workMenuBtn;
    
    if(workMenuBtn == null || workMenuBtn == lastSelected) {
        return;
    } else {
        lastSelected = workMenuBtn;
        projectContainer.classList.add('animate-out');
    }
    
    setTimeout(() => {
        projects.forEach((project) => {
            if(workMenuBtn === "*" || project.dataset.projectType == workMenuBtn ) {
                project.classList.remove('invisible');
            } else {
                project.classList.add('invisible');
            }
        })
        projectContainer.classList.remove('animate-out');
    }, 200)
});



// Custom Method
function scrollIntoViewSmooth(selector) {
    const element = document.querySelector(selector);
    element.scrollIntoView({behavior: "smooth"});
}