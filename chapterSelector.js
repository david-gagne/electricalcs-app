window.onload = function () {
    let chapterContainer = document.getElementById('chapterContainer');

    chapterContainer.addEventListener('click', function (event) {
        switch (event.target) {
            // Toggle display CHAPTER ONE (1) Quizlet embed
            case chapterContainer.children[0].children[0]:
                document.getElementById('chapterOneQuiz').classList.toggle('hide-quiz');
                break;

            case chapterContainer.children[1].children[0]:
                document.getElementById('chapterTwoQuiz').classList.toggle('hide-quiz');
                break;

            default:
                console.log('nada clicked');
                break;
        }
    });

}