'use strict'

const navbar = document.querySelector('#navbar');

// navbar transparent by scrolling
document.addEventListener('scroll', () => {
    let navbarHeight = navbar.getBoundingClientRect().height
    if(window.scrollY <= navbarHeight) {
        navbar.classList.add('navbar--transparent')
    } else {
        navbar.classList.remove('navbar--transparent')
    }
})

// scroll to section
function scrollIntoViewSmooth(selector) {
    const element = document.querySelector(selector)
    element.scrollIntoView({behavior: "smooth"})
}

// ----------
//
// navbar menu & button
//
// ----------

const navbarMenu = document.querySelector('.navbar__menu');

// handle navbar button
navbarMenu.addEventListener('click', (e) => {
    let link = e.target.dataset.link

    if(link == undefined) {
        console.log('data-link is undefined')
        return
    }

    scrollIntoViewSmooth(link)
});

// navbar menu active 
navbarMenu.addEventListener('click', (e) => {
    let navbarActive = document.querySelector('.navbar__menu__item.active')
    
    if(navbarActive != e.target) {
        e.target.classList.add('active')
        navbarActive.classList.remove('active')
    }

    navbarMenu.classList.toggle('toggle')
})

// ----------
//
// navbar toggle button ( 768px screen )
//
// ----------

const navbarToggleBtn = document.querySelector('.navbar__toggle-btn')
navbarToggleBtn.addEventListener('click', () => {
    navbarMenu.classList.toggle('toggle')
})

// remove toggle menu
// when click anywhere not a toggle menu
document.addEventListener('click', (e) => {
    if(navbarMenu.classList.contains('toggle')) {
        if(e.clientY > navbar.getBoundingClientRect().height) {
            navbarMenu.classList.remove('toggle')
        }
    }
});

// navbar active change by scrolling
const sections = document.querySelectorAll('.section')
const navbarMenuItems = document.querySelectorAll('.navbar__menu__item')
let curPos = 0
let curSectIdx = 0
let sectNum = sections.length
let sectPos = Object.values(sections).map((s) => s.getBoundingClientRect().top)

document.addEventListener('scroll', () => {
    navbarMenuItems[curSectIdx].classList.remove('active')

    curPos = window.scrollY + navbar.getBoundingClientRect().height + window.innerHeight / 4
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) { // bottom of page
        curSectIdx = sectNum - 1
    } else {
        for (let i = sectNum - 1; i >= 0; i--) {
            if (curPos >= sectPos[i]) {
                curSectIdx = i
                break
            }
        }
    }
    navbarMenuItems[curSectIdx].classList.add('active')
})