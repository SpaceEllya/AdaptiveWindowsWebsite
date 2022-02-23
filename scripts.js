let headerBurger = document.querySelector('.header-burger');
let headerNav = document.querySelector('.header-nav');
let back = document.querySelector('body');
let headerNavList = document.querySelector('.header-nav-list');

headerBurger.onclick = function(){
    headerBurger.classList.toggle('active');
    headerNav.classList.toggle('active');
    back.classList.toggle('lock');
}

headerNavList.onclick = function () {
    headerNavList.classList.remove('active');
    back.classList.toggle('lock');
}