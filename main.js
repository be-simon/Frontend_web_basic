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

// navbar menu active 
navbarMenu.addEventListener('click', (event) => {
    var navbarActive = document.querySelector('.navbar__menu__item.active');
    
    if(navbarActive != event.target) {
        event.target.classList.add('active');
        navbarActive.classList.remove('active')
    }

    navbarMenu.classList.toggle('toggle');
})

// navbar toggle button
const navbarToggleBtn = document.querySelector('.navbar__toggle-btn');
navbarToggleBtn.addEventListener('click', () => {
    navbarMenu.classList.toggle('toggle');
})

// remove toggle menu
document.addEventListener('click', (event) => {
    if(navbarMenu.classList.contains('toggle')) {
        if(event.clientY > navbar.getBoundingClientRect().height) {
            navbarMenu.classList.remove('toggle');
        }
    }
});

// navbar active change by scrolling
// const sections = document.querySelectorAll('.section');
// const navbarMenuItems = document.querySelectorAll('.navbar__menu__item');
// var currentPosition;
// document.addEventListener('scroll', () => {
//     var link;

//     for(var i = 0; i < sections.length; i++) {

//         if(window.scrollY < sections[i].offsetTop + sections[i].getBoundingClientRect().height) {
//             link = sections[i].dataset.link;
//             console.log(link)
//             console.log(window.scrollY);
//             break;
//         }
//     }
    
//     if(link == currentPosition) {
//         return;
//     } else {
//         currentPosition = link;

//         var navbarActive = document.querySelector('.navbar__menu__item.active');
        
//         for(var i = 0; i < navbarMenuItems.length; i++) {
//             if (navbarMenuItems[i].dataset.link == link) {
//                 navbarMenuItems[i].classList.add('active');
                
//                 break;
//             }
//         }
//     }
//     navbarActive.classList.remove('active');
// })






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

// work menu filtering & animating & active
const workMenu = document.querySelector('.work__menu');
const projectContainer = document.querySelector('.work__projects');
const projects = document.querySelectorAll('.project');
var lastSelected;

workMenu.addEventListener('mouseover', (event) => {
    var target = event.target;
    var btnType = target.dataset.btnType ;
    var active = document.querySelector('.menu__btn.active');
    
    if(btnType == null || btnType == lastSelected || target == active) {
        return;
    } else {
        lastSelected = btnType;
        projectContainer.classList.add('animate-out');

        active.classList.remove('active');
        event.target.classList.add('active');
    }
    
    setTimeout(() => {
        projects.forEach((project) => {
            if(btnType === "*" || project.dataset.projectType == btnType ) {
                project.classList.remove('invisible');
            } else {
                project.classList.add('invisible');
            }
        })
        projectContainer.classList.remove('animate-out');
    }, 200)
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




// Custom Method
function scrollIntoViewSmooth(selector) {
    const element = document.querySelector(selector);
    element.scrollIntoView({behavior: "smooth"});
}