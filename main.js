window.onload = function () {
    // Burger menu activation

    // define mobile menu variables
    let mobileMenuButton = document.getElementById('mobile-menu-button');
    let mobileMenu = document.getElementById('mobile-menu');

    // attach listener to mobile menu button (burger)
    mobileMenuButton.addEventListener('click', function () {
        // check if the menu modal is actie and burger icon is cross (x) 
        if (!mobileMenuButton.classList.contains('is-active') && mobileMenu.style.display !== 'block') {
            // if menu is not active and icon is not cross, then make them so...
            mobileMenuButton.classList.add('is-active');
            mobileMenu.style.display = 'block';
        } else {
            // otherwise, set the classes to hide the element and change burger icon to three lines
            mobileMenuButton.classList.remove('is-active');
            mobileMenu.style.display = 'none';
        }
    });
}