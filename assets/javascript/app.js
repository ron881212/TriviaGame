// Empty variables will hold score
var guessedRight = 0;
var guessedWrong = 0;
var unAnswered = 0;
var showCounter;

// Start Button Function
$(document).on("click", "#startButton", function () {
    $("#startButton").hide();
    $(".wrapper").html('<h1 id="theme">Theme Goes Here</h1>' +
        '<h3 id="theme" class="shotClock">Time Remaining: Coundown Here</h3>' +
        '<h2 id="questionText" class="theme">Question Goes Here</h2>' +
        '<img id="questionImg" src="">  ' +
        '<div id="answer1" class="answers mx-auto">Option 1</div><br>' +
        '<div id="answer2" class="answers mx-auto">Option 2</div><br>' +
        '<div id="answer3" class="answers mx-auto">Option 3</div><br>' +
        '<div id="answer4" class="answers mx-auto">Option 4</div>');

    // change background color of answers
    $(".answers").mouseover(function () {
        $(this).css("background-color", "#343a40");
        $(this).css("color", "white");
        $(this).mouseout(function () {
            $(this).css("background-color", "transparent");
            $(this).css("color", "white");
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
        question: "what is the name of the dark group that scretly controls the world",
        answer1: "The Hand",
        value1: function () {
            $('#answer1').addClass('wrong')
        },
        answer2: "The Worship",
        value2: function () {
            $('#answer2').addClass('wrong')
        },
        answer3: "The Cooperative",
        value3: function () {
            $('#answer3').addClass('correct')
        },
        answer4: "The Group",
        value4: function () {
            $('#answer4').addClass('wrong')
        },
        img1: "./assets/images/crop1.jpg",
        img2: "./assets/images/wrong.gif"
    },
    {
        question: "What is the name of the outpost led by Ms. Wilhemina Venable",
        answer1: "Outpost 1",
        value1: function () {
            $('#answer1').addClass('wrong')
        },
        answer2: "Outpost 3",
        value2: function () {
            $('#answer2').addClass('correct')
        },
        answer3: "Outpost 5",
        value3: function () {
            $('#answer3').addClass('wrong')
        },
        answer4: "Outpost 7",
        value4: function () {
            $('#answer4').addClass('wrong')
        },
        img1: "/assets/images/outpost1.png",
        img2: "/assets/images/wrong2.gif"
    },
    {
        question: "Who is the voodoo queen",
        answer1: "Cordelia",
        value1: function () {
            $('#answer1').addClass('wrong')
        },
        answer2: "Dinah Stevens",
        value2: function () {
            $('#answer2').addClass('correct')
        },
        answer3: "Madelyn",
        value3: function () {
            $('#answer3').addClass('wrong')
        },
        answer4: "Mead",
        value4: function () {
            $('#answer4').addClass('wrong')
        },
        img1: "/assets/images/VD1.jpg",
        img2: "/assets/images/wrong3.gif"
    },
    {
        question: "What actress play Moira O'Hara",
        answer1: "Frances Conroy",
        value1: function () {
            $('#answer1').addClass('correct')
        },
        answer2: "Kathy Bates",
        value2: function () {
            $('#answer2').addClass('wrong')
        },
        answer3: "Sarah Paulson",
        value3: function () {
            $('#answer3').addClass('wrong')
        },
        answer4: "Jessica Lange",
        value4: function () {
            $('#answer4').addClass('wrong')
        },
        img1: "/assets/images/VD1.jpg",
        img2: "/assets/images/wrong4.gif"
    },
    {
        question: "Where did Michael Langdon get his powers from",
        answer1: "He was the male supreme",
        value1: function () {
            $('#answer1').addClass('wrong')
        },
        answer2: "Working out",
        value2: function () {
            $('#answer2').addClass('wrong')
        },
        answer3: "He stole them",
        value3: function () {
            $('#answer3').addClass('wrong')
        },
        answer4: "The Dark Lord",
        value4: function () {
            $('#answer4').addClass('correct')
        },
        img1: "/assets/images/VD1.jpg",
        img2: "/assets/images/wrong5.gif"
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

        if (i === questions.length) {
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
            resetButton.addClass("btn btn-dark reset").text("Don't You Dare");
            $("#questionText").append(resetButton);
            clearInterval(questionTimer);
            $(".answers").removeClass("correct wrong");
        }
        if (i < questions.length) {
            $(".correct").css("background-color", "transparent");
            $("#questionImg").attr('src', "");
            $("#questionText").text(questions[i].question);
            $("#answer1").text(questions[i].answer1);
            $("#answer2").text(questions[i].answer2);
            $("#answer3").text(questions[i].answer3);
            $("#answer4").text(questions[i].answer4);
            $(".answers").removeClass("correct wrong");
        }
    };



    function rightWrong() {
        if (i < questions.length) {
            questions[i].value1();
            questions[i].value2();
            questions[i].value3();
            questions[i].value4();
            // questionCounter = 16;
            $(".wrong").show();
            $(".shotClock").show();
            $(".answers").show();
            clearInterval(questionsList);
            clearInterval(rightWrong);
        }
    }

    // function timing(){
    //     //  questionCounter = 16;
    //     $(".shotClock").show();      
    // }

    $(document).on("click", ".correct", function () {
        questionCounter = 18;
        console.log("correct");
        $("#questionImg").attr('src', questions[i].img1);
        guessedRight++;
        i++;
        $(".shotClock").hide();
        $(".answers").hide();
        setInterval(questionsList, 4000);
        setInterval(rightWrong, 4000);
        $("#questionText").text("Correct");
        // setInterval(timing, 3000);
        // rightWrong();
    });

    $(document).on("click", ".wrong", function () {
        questionCounter = 18;
        console.log("wrong");
        $("#questionImg").attr('src', questions[i].img2);
        guessedWrong++;
        i++;
        $(".shotClock").hide();
        $(".wrong").hide();
        $(".correct").css("background-color", "#343a40");
        setInterval(questionsList, 4000);
        setInterval(rightWrong, 4000);
        $("#questionText").text("Wrong, the dark lord would be disappointed");
        // setInterval(timing, 3000);
        // rightWrong();
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
        $(".answers").css("background-color", "transparent");
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
