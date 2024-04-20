let questionList = [];
let answerList = [];
let correctAns = 0;
let questionNumber = 0;

$(document).ready(() => {

    // Checks for a click on the button "Add" (Updates List)
    $("#add-btn").click((e) => {
        e.preventDefault();

        questionList.push($("#question-txtbox").val());
        answerList.push($("#answer-txtbox").val())
        renderList();
    });

    // Checks for a click on the "Practice button" and starts the practice session
    $("#practice-btn").click(function(e) {
        e.preventDefault();

        $("#main-div-1").fadeOut();
        $("#main-div-2").fadeIn();

        $("#question-p").text(questionList[questionNumber]);
    });


    // checks if the check button is clicked
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
        else {
            $("#main-div-1").fadeIn();
            $("#main-div-2").fadeOut();
            $("#correct-ans").text(`Percentage of correct Answers: ${(correctAns / questionList.length).toFixed(2)}`);
        }
        
    });

        
});

// Renders the list of questions and answers
const renderList = () => {
    // Clears both list elements
    $("#ul-questions").empty();
    $("#ul-answers").empty();

    // Adds list elements to the list

    questionList.forEach((val) => {
        $("#ul-questions").append(`<li class="overflow-auto" style="list-style-type: none; text-align: center;">${val}</li>`);
    });

    answerList.forEach((val) => {
        $("#ul-answers").append(`<li class="overflow-auto" style="list-style-type: none; text-align: center;">${val}</li>`);
    });
};