let pronounCell = $("td#pronounCell");
let verbCell = $("td#verbCell");
let timeCell = $("td#timeCell");
let senTypeCell = $("td#senTypeCell");
let answerCell = $("td#answerCell");

//при нажатии создаются русское и английское предложение
$('button#startExercise').click(function(){
    start1Ex();
});

//при нажатии щелкается вперед смена за сменой
$('button#nextExercise').click(function(){
    pressToNext();
});

//заполняем ячейки словами
function start1Ex() {
    showHideAnswer(true);
    //глобальная переменная
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
        answerCell.html("<button><i class='fa fa-volume-up fa-1x' aria-hidden='true'></i></button>     " + window.senConstracted['correctEngSen']);
    }
}

//скрывает\показывает ячейку с ответом
$('button#showHideAnswer').click(function(){
    showHideAnswer(false);
});

//озвучка текста на английском языке
$('td#answerCell').click(function(){
    responsiveVoice.speak(window.senConstracted['correctEngSen']);
});

//для пульта
window.state = 0;
$( "html" ).keydown(function(e) {
    if (e.which == 190) {
        pressToNext();
    }
});

//функция безостановочного переключения
function pressToNext() {
    if (window.state === 0) {
        window.state = 1;
        start1Ex();
    } else {
        window.state = 0;
        showHideAnswer(false);
    }
}