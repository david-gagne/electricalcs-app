window.onload = function () {
    let chapterContainer = document.getElementById('chapterContainer');

    chapterContainer.addEventListener('click', function (event) {
        switch (event.target) {
            // Toggle display CHAPTER ONE (1) Quizlet embed
            case chapterContainer.children[0]: // indexes are counted by twos (2s).
                document.getElementById('chapterOneQuiz').classList.toggle('hide-quiz');
                break;

            case chapterContainer.children[2]:
                document.getElementById('chapterTwoQuiz').classList.toggle('hide-quiz');
                break;

            default:
                console.log('nada clicked');
                break;
        }
    });

}