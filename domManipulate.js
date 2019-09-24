let pronounCell = $("td#pronounCell");
let verbCell = $("td#verbCell");
let timeCell = $("td#timeCell");
let senTypeCell = $("td#senTypeCell");
let answerCell = $("td#answerCell");

//при нажатии создаются русское и английское предложение
$('button#startExercise').click(function(){
    start1Ex();
});

function start1Ex() {
    showHideAnswer(true);
    //гдлбальная переменная
    window.senConstracted = checkConstrustor();
    pronounCell.html(senConstracted['pronounRus']);
    verbCell.html(senConstracted['verbRus']+ " (" +senConstracted["verbEng"] + ")");
    timeCell.html(senConstracted['timeRus']);
    senTypeCell.html(senConstracted['senTypeRus']);
}
//если в ячейке есть ответ, она скрывается, если нет - появляется с новым ответом
function showHideAnswer(state) {
    if (state === true) {
        answerCell.hide();
    } else {
        answerCell.show();
        answerCell.html(window.senConstracted['correctEngSen']);
    }
}

//скрывает\показывает ячейку с ответом
$('button#showHideAnswer').click(function(){
    showHideAnswer(false);
});

//для пульта
window.state = 0;
$( "html" ).keydown(function(e) {
    if (e.which == 190) {
            if (window.state === 0) {
        window.state = 1;
        start1Ex();
    } else {
        window.state = 0;
        showHideAnswer(false);
    }
    }
});

