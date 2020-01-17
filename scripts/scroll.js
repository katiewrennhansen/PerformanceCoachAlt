const fixed = document.querySelector('.fixed-content');


function onScroll(){
    if (window.innerWidth < 786) {
        fixed.style.backgroundColor = '#252429';  
        fixed.style.transition = 'none';        
    } else if (window.innerWidth >= 786 && window.pageYOffset < 100) {
        fixed.style.background = 'none';
        fixed.style.backgroundImage = 'linear-gradient(#252429, rgba(0, 0, 0, 0))';
    } else if (window.innerWidth >= 786 && window.pageYOffset > 100){
        fixed.style.backgroundColor = '#252429';
        fixed.style.transition = '400ms linear';
    }
}



window.addEventListener('scroll', onScroll)
window.onresize = onScroll;
