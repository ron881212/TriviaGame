// Empty variables will hold score

var guessedRight;
var guessedWrong;

// Start Button Function

$(".shotClock").on("click", function () {
    nextQuestion();
});

// change background color of answers

$(".answers").mouseover(function () {
    $(this).css("background-color", "red");
    $(this).mouseout(function () {
        $(this).css("background-color", "transparent")
    });
});

// Questions are Objects with answers and values

var questions = [{
        question: "what time is it",
        answer1: "peanut butter jelly time",
        value1: function () {
            $('#answer1').addClass('correct')
        },
        answer2: "Hammer Time",
        value2: function () {
            $('#answer2').addClass('wrong')
        },
        answer3: "time to die",
        value3: function () {
            $('#answer3').addClass('wrong')
        },
        answer4: "meal time",
        value4: function () {
            $('#answer4').addClass('wrong')
        },
        img1: "...",
        img2: "..."
    },
    {
        question: "how many stars in the flag",
        answer1: "42",
        value1: function () {
            $('#answer1').addClass('wrong')
        },
        answer2: "52",
        value2: function () {
            $('#answer2').addClass('wrong')
        },
        answer3: "50",
        value3: function () {
            $('#answer3').addClass('correct')
        },
        answer4: "47",
        value4: function () {
            $('#answer4').addClass('wrong')
        },
        img1: "...",
        img2: "..."
    }
];

var i = 0;

function nextQuestion() {
    
    var questionCounter = 16;

    $("#questionText").text(questions[i].question);
    $("#answer1").text(questions[i].answer1);
    questions[i].value1();
    $("#answer2").text(questions[i].answer2);
    questions[i].value2();
    $("#answer3").text(questions[i].answer3);
    questions[i].value3();
    $("#answer4").text(questions[i].answer4);
    questions[i].value4();
    

    $(".correct").on("click", function () {
        clearInterval(questionTimer);
        alert("correct");
        guessedRight++;
        $(".answers").removeClass("correct wrong");
        i++
        nextQuestion();
    });
    $(".wrong").on("click", function () {
        clearInterval(questionTimer);
        alert("wrong");
        guessedWrong++;
        $(".answers").removeClass("correct wrong");
        i++;
        nextQuestion();
    });

    var questionTimer = setInterval(timeLeftToAnswer, 1000);

    function timeLeftToAnswer() {
        questionCounter--;
        $(".shotClock").text("Time Remaining: " + questionCounter);
        if (questionCounter === 0) {
            clearInterval(questionTimer);
            $(".answers").removeClass("correct wrong");
            $(".shotClock").text("Times Up");
            i++;
            nextQuestion();
        }
    }
}


