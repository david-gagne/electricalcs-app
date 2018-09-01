window.onload = function () {
    let chapterContainer = document.getElementById('chapterContainer');

    chapterContainer.addEventListener('click', function (event) {
        console.log(event.target);
    });
    
}