window.onload = function () {
    // landing page cta button 
    let ctaButton = document.querySelector('.custom-button-width');

    // remove button when clicked
    ctaButton.addEventListener('click', function () {
        ctaButton.style.display = 'none';
    });

    // Burger menu activation

    // define mobile menu variables
    let mobileMenuButton = document.getElementById('mobile-menu-button');
    let mobileMenu = document.getElementById('mobile-menu');

    // attach listener to mobile menu button (burger)
    mobileMenuButton.addEventListener('click', function () {
        // check if the menu modal is actie and burger icon is cross (x) 
        if (!mobileMenuButton.classList.contains('is-active')) {
            // if menu is not active and icon is not cross, then make them so...
            mobileMenuButton.classList.add('is-active');
            mobileMenu.style.display = 'block';
            // and make it so that the user cannot scroll off the modal...
            document.querySelector('html').style.overflow = 'hidden';
        } else if (mobileMenuButton.classList.contains('is-active')) {
            mobileMenuButton.classList.remove('is-active');
            mobileMenu.style.display = 'none';
            document.querySelector('html').style.overflow = 'visible';
        }
    });

    // Dropdown menu
    let dropdownTriggerButton = document.querySelector('.dropdown-trigger button');
    let dropdown = document.querySelector('.dropdown');


    // attach listener to dropdown menu
    dropdownTriggerButton.addEventListener('click', function () {
        if (!dropdown.classList.contains('is-active')) {
            dropdown.classList.add('is-active');
        } else {
            dropdown.classList.remove('is-active');
        }
    });
}

// TO-D0s: 
// - Fix the nuanced "bug" of width displaying with the mobile menu.