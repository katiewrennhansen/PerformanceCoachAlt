const fixed = document.querySelector('.fixed-content');


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


window.addEventListener('scroll', onScroll)
