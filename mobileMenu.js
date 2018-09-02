// declare and define all mobile menu variables
let burgerMenu = document.getElementById('mobile-menu-button');
let mobileMenu = document.getElementById('mobile-menu');
let html = document.querySelector('html');

// attach click event listener to burger menu
burgerMenu.addEventListener('click', function () {
    burgerMenu.classList.toggle('is-active');
    if (mobileMenu.style.display !== 'block') {
        mobileMenu.style.display = 'block';
        html.style.overflow = 'hidden';
    } else {
        mobileMenu.style.display = 'none';
        html.style.overflow = 'unset';
    }
});