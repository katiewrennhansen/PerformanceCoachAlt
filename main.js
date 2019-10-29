'use strict';

//VARIABLES
const toggleBtn = document.querySelector('.toggle-button');
const collapse = document.querySelector('.collapse-content');
const navLinks = document.querySelectorAll('.nav-link');
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


//EVENT LISTENERS
toggleBtn.addEventListener('click', navToggle);

navLinks.forEach(link => {
    link.addEventListener('click', hideNav);
});


