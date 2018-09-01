window.onload = function () {
    // landing page cta button 
    let ctaButton = document.querySelector('.custom-button-width');

    // remove button when clicked
    ctaButton.addEventListener('click', function () {
        ctaButton.style.display = 'none';
    });
}