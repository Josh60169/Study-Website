let questionList = [];
let answerList = [];

$(document).ready(() => {
    $("#add-btn").click((e) => {
        e.preventDefault();

        questionList.push($("#question-txtbox").val());
        answerList.push($("#answer-txtbox").val())
        renderList();
    });
});

const renderList = () => {
    $("#ul-questions").empty();
    $("#ul-answers").empty();

    questionList.forEach((val) => {
        $("#ul-questions").append(`<li>${val}</li>`);
    });

    answerList.forEach((val) => {
        $("#ul-answers").append(`<li>${val}</li>`);
    });
};