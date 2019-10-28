'use strict';

//VARIABLES
const toggleBtn = document.querySelector('.toggle-button');
const collapse = document.querySelector('.collapse-content');
const navLinks = document.querySelectorAll('.nav-link');
const fixed = document.querySelector('.fixed-content');
const serviceThumbnails = document.querySelector('.thumbnail')
const learn = document.querySelectorAll('.service-description a')
const serviceContent = document.querySelectorAll('.service-description');

//FUNCTIONS

//toggle nav 
function navToggle(){
    toggleBtn.classList.toggle('cross');
    collapse.classList.toggle('toggle');
}

//hide nav
function hideNav(){
    collapse.classList.remove('toggle');
    toggleBtn.classList.remove('cross');
}

function onScroll(){
    if (window.innerWidth < 768 && window.pageYOffset < 100) {
        fixed.style.backgroundColor = '#252429';  
        fixed.style.backgroundImage = 'linear-gradient(#252429, #252429)';
        fixed.style.background = '#252429';
    } else if (window.innerWidth > 768 && window.pageYOffset < 100) {
        fixed.style.background = 'none';
        fixed.style.backgroundImage = 'linear-gradient(#252429, rgba(0, 0, 0, 0))';
        fixed.style.transition = '400ms linear';
    } else if(window.innerWidth > 768 && window.pageYOffset > 100){
        fixed.style.backgroundColor = '#252429';
    } else {
        fixed.style.backgroundColor = '#252429';
        fixed.style.background = '#252429';
        fixed.style.backgroundImage = 'linear-gradient(#252429, #252429)';


    }
}

// function tabIn(i){
//     console.log(i)
//     console.log('start')
//     serviceContent[i].style.height = '200px';
//     serviceContent[i].style.opacity = 1;
// }
// function tabOut(i){
//     console.log(i)
//     console.log('end')
//     serviceContent[i].style.height = '0px';
//     serviceContent[i].style.opacity = 0;
// }


window.addEventListener('scroll', onScroll)


//EVENT LISTENERS
toggleBtn.addEventListener('click', navToggle);

navLinks.forEach(link => {
    link.addEventListener('click', hideNav);
});

// learn.forEach((btn, i) => {
//     btn.addEventListener('focus', tabIn(i));
//     btn.addEventListener('blur', tabOut(i))
// })

// learn.addEventListener(
// })

