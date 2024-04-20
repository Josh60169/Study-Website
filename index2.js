let questionList = [];

$(document).ready(() => {
    $("#add-btn").click((e) => {
        e.preventDefault();

        questionList.push($("#question-txtbox").val());
        renderList();
    });
});

const renderList = () => {
    $("#ul-questions").empty();

    questionList.forEach((val) => {
        $("#ul-questions").append(`<li>${val}</li>`);
    });
};