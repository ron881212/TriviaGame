// Empty variables will hold score
var guessedRight = 0;
var guessedWrong = 0;
var unAnswered = 0;

// Start Button Function
$(document).on("click", "#startButton", function () {
    $("#startButton").hide();
    $(".wrapper").html('<h1>Theme Goes Here</h1>' 
         + '<h3 class="shotClock">Time Remaining: Coundown Here</h3>'
         + '<h2 id="questionText">Question Goes Here</h2>'
         + '<div class="questionImg"></div>'
         + '<div id="answer1" class="answers mx-auto">Option 1</div><br>'
         + '<div id="answer2" class="answers mx-auto">Option 2</div><br>'
         + '<div id="answer3" class="answers mx-auto">Option 3</div><br>'
         + '<div id="answer4" class="answers mx-auto">Option 4</div>');

    // change background color of answers
    $(".answers").mouseover(function () {
        $(this).css("background-color", "#db3545");
        $(this).mouseout(function () {
            $(this).css("background-color", "transparent")
        });
    });

        // reset
        i = -1;
        guessedRight = 0;
        guessedWrong = 0;
        unAnswered = 0;
        nextQuestion();
        $(".answers").show();
        $(".shotClock").show();     
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
    },
    {
        question: "how many strips in the flag",
        answer1: "42",
        value1: function () {
            $('#answer1').addClass('wrong')
        },
        answer2: "13",
        value2: function () {
            $('#answer2').addClass('correct')
        },
        answer3: "50",
        value3: function () {
            $('#answer3').addClass('wrong')
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
// nextQuestion();
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
            newDiv2.text("And " + unAnswered + " Unanswered");
            $("#questionText").append(newDiv);
            $("#questionText").append(newDiv2);
            $(".answers").hide();
            $(".shotClock").hide();
            var resetButton = $("<button>");
            resetButton.addClass("btn btn-danger reset").text("Don't You Dare");
            $("#questionText").append(resetButton);
            clearInterval(questionTimer);
            $(".answers").removeClass("correct wrong");
        }
        if(i < questions.length){
            $("#questionText").text(questions[i].question);
            $("#answer1").text(questions[i].answer1);
            $("#answer2").text(questions[i].answer2);
            $("#answer3").text(questions[i].answer3);
            $("#answer4").text(questions[i].answer4);
            $(".answers").removeClass("correct wrong");
        }
    };
        
   

    function rightWrong() {
        if(i < questions.length){
            questions[i].value1();
            questions[i].value2();
            questions[i].value3();
            questions[i].value4();
        }
    }

    $(document).on("click", ".correct", function () {
        questionCounter = 16;
        console.log("correct");
        // $(".questionImg").attr('src', questions[i].img1);
        guessedRight++;
        i++;
        questionsList();
        rightWrong();
        timeLeftToAnswer();
        // nextQuestion();
    });

    $(document).on("click", ".wrong", function () {
        questionCounter = 16;
        console.log("wrong");
        // $(".questionImg").attr('src', questions[i].img2);
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

    $(document).on("click", ".reset", function () {
        i = 0;
        questionCounter = 16;
        guessedRight = 0;
        guessedWrong = 0;
        unAnswered = 0;
        $(".answers").show();
        $(".shotClock").show();
        $(".answers").removeClass("correct wrong");
        questionsList();
        rightWrong();
        clearInterval(questionTimer);
        questionTimer = setInterval(timeLeftToAnswer, 1000);
        function timeLeftToAnswer() {
            questionCounter--;
            $(".shotClock").text("Time Remaining: " + questionCounter);
            if (questionCounter === 0) {
                clearInterval(questionTimer);
                $(".shotClock").text("Times Up");
                unAnswered++;
                
            }
        }
    });
};

