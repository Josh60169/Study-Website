let questionList = [];
let answerList = [];
let correctAns = 0;
let questionNumber = 0;

$(document).ready(() => {
    $("#add-btn").click((e) => {
        e.preventDefault();

        questionList.push($("#question-txtbox").val());
        answerList.push($("#answer-txtbox").val())
        renderList();
    });

    $("#practice-btn").click(function(e) {
        e.preventDefault();

        $("#main-div-1").fadeOut();
        $("#main-div-2").fadeIn();

        $("#question-p").text(questionList[questionNumber]);
    });


    $("#check-btn").click(function(e) {
        e.preventDefault();

        let userAns = $("#userAnswer-txtbox").val();

        if (userAns == answerList[questionNumber]) {
            correctAns++;
            $("#answer-p").text("Correct!");
        } else
            $("#answer-p").text(`Incorrect. The right answer was ${answerList[questionNumber]}`);
        
        questionNumber++;

        if (questionNumber !== questionList.length)
            $("#question-p").text(questionList[questionNumber]);
        
    });

        
});

const renderList = () => {
    $("#ul-questions").empty();
    $("#ul-answers").empty();

    questionList.forEach((val) => {
        $("#ul-questions").append(`<li class="overflow-auto" style="list-style-type: none; text-align: center;">${val}</li>`);
    });

    answerList.forEach((val) => {
        $("#ul-answers").append(`<li class="overflow-auto" style="list-style-type: none; text-align: center;">${val}</li>`);
    });
};