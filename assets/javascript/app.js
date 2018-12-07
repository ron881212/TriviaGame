// Empty variables will hold score

var guessedRight = 0;
var guessedWrong = 0;
var unAnswered = 0;

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

var i = -1;

function nextQuestion() {
    i++;
    questionsList();
    rightWrong();
    var questionCounter = 16;

    function questionsList() {
        if(i === questions.length){
            $("#questionText").text("You Got " + guessedRight + " Answers Right");
            var newDiv = $("<div>");
            newDiv.text(guessedWrong + " Wrong");
            var newDiv2 = $("<div>");
            newDiv2.text("and " + unAnswered + " unanswered");
            $("#questionText").append(newDiv);
            $("#questionText").append(newDiv2);
            $(".answers").hide();
            $(".shotClock").hide();
        }
        $("#questionText").text(questions[i].question);
        $("#answer1").text(questions[i].answer1);
        $("#answer2").text(questions[i].answer2);
        $("#answer3").text(questions[i].answer3);
        $("#answer4").text(questions[i].answer4);
        $(".answers").removeClass("correct wrong");
        // debugger
    };

    function rightWrong() {
        questions[i].value1();
        questions[i].value2();
        questions[i].value3();
        questions[i].value4();
    }

    $(document).on("click", ".correct", function () {
        clearInterval(questionTimer);
        alert("correct");
        guessedRight++;
        i++;
        questionsList();
        rightWrong();
        timeLeftToAnswer();
        // nextQuestion();
    });

    $(document).on("click", ".wrong", function () {
        clearInterval(questionTimer);
        alert("wrong");
        guessedWrong++;
        i++;
        questionsList();
        rightWrong();
        timeLeftToAnswer();
        // nextQuestion();
    });

    var questionTimer = setInterval(timeLeftToAnswer, 1000);

    function timeLeftToAnswer() {
        questionCounter--;
        $(".shotClock").text("Time Remaining: " + questionCounter);
        if (questionCounter === 0) {
            clearInterval(questionTimer);
            $(".shotClock").text("Times Up");
            unAnswered++;
            nextQuestion();
        }
    }
}
