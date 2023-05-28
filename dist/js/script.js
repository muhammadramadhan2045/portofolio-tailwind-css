//navbar fixed
window.onscroll=function(){
    const heeader = document.querySelector('header');
    const fixedNav=heeader.offsetTop;
    if(window.pageYOffset > fixedNav){
        heeader.classList.add('navbar-fixed');
    }else{
        heeader.classList.remove('navbar-fixed');
    }
}

//ini untuk bagian hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');
hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});

