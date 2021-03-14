(function () {
    let btnMenu = document.querySelector('.btn__menu');
    let navList = document.querySelector('.nav__list');
    let menuIcon = document.querySelector('.mobile-menu-icon');
    let body = document.getElementById('body');

    function toggleMenu() {
        navList.classList.toggle('nav__list--hidden');

        if(navList.classList.contains('nav__list--hidden')) {
            menuIcon.src = "images/icon-hamburger.svg";
            btnMenu.setAttribute('aria-expanded', 'false');
            body.classList.remove('active');
            
        } else {
            menuIcon.src = "images/icon-close-menu.svg";
            btnMenu.setAttribute('aria-expanded', 'true');
            body.classList.add('active');
        }
    }

    btnMenu.addEventListener('click', toggleMenu);

})();

