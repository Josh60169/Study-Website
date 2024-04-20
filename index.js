$(document).ready(() => {
    let runTimer = false;
    let pause = false;
    let studyVal;
    let breakVal;
    let pomodoros = 0;

    $("#submit-btn").click((e) => {
        e.preventDefault();
        studyVal = $("#study-txtbox").val();
        breakVal = $("#shortbr-txtbox").val();

        if (!(/\D/.test(studyVal)) && /\d/.test(studyVal)) {
            $("#timer").text(studyVal + ":00");
            $("#timer-header").text("STUDY!");
            runTimer = true;
        } else
            alert("Please enter a numeric value with no spaces");
    });

    $("#start-btn").click(() => {
        if (/\d/.test($("#timer").text())) {
            runTimer = true;
            pause = false;
        }

        if (runTimer && !timerFinished()) {
            setTimeout(subtractSec, 1000);
        }
    });

    $("#stop-btn").click(() => {
        runTimer = false;
        pause = true;
    });

    const subtractSec = () => {
        if (pause)
            return;

        let time = $("#timer").text();
        let seconds = parseInt(time.substring(time.indexOf(":") + 1));
        let minutes = parseInt(time.substring(0, time.indexOf(":")));

        if (seconds === 0) {
            minutes--;
            seconds = 59;
        } else
            seconds--;
        
        if (seconds < 10)
            $("#timer").text(`${minutes}:0${seconds}`);
        else
            $("#timer").text(`${minutes}:${seconds}`);

        if (runTimer && !timerFinished() && !pause) 
            setTimeout(subtractSec, 1000);
        else if (!pause){
            if (timerFinished)
                document.getElementById("notification").play();
            
            if ($("#timer-header").text() === "STUDY!") {
                $("#timer-header").text("SHORT BREAK");
                $("#timer").text(`${breakVal}:00`);

            } else {
                $("#timer-header").text("STUDY!");
                $("#timer").text(`${studyVal}:00`);
            }

            runTimer = false;
        }
    }

    const timerFinished = () => {
        let time = $("#timer").text();
        let seconds = parseInt(time.substring(time.indexOf(":") + 1));
        let minutes = parseInt(time.substring(0, time.indexOf(":")));

        if (seconds === 0 && minutes === 0) {
            return true;
            pomodoros++;
        } else
            return false;
    }
});