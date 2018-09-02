// declare and define all mobile menu variables
let burgerMenu = document.getElementById('mobile-menu-button');
let mobileMenu = document.getElementById('mobile-menu');

// attach click event listener to burger menu
burgerMenu.addEventListener('click', function () {
    burgerMenu.classList.toggle('is-active');
    if (mobileMenu.style.display !== 'block') {
        mobileMenu.style.display = 'block';
        
    } else {
        mobileMenu.style.display = 'none';
    }
});