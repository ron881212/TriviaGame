// current time on clock variable

var counter = 15;

// Empty variable will hold countdown

var timer;

// Displays Countdown

$(".shotClock").text("Time Remaining: " + counter);
// $("#test").text("this is a test");

// Questions are Objects with answers and values

var question1 = {
    question: "what time is it",
    answer1: "peanut butter jelly time",
    value1: $('#right').attr('value', 'correct'),
    answer2: "Hammer Time",
    value2: "wrong",
    answer3: "time to die",
    value3: "wrong",
    answer4: "meal time",
    value4: "wrong",
    img1: "...",
    img2: "..."
}

function nextQuestion(){

    $("#questionText").text(question1.question);
    $("#answer1").text(question1.answer1);
    question1.value1;
    $("#answer2").text(question1.answer2);
    // $("answer2").text(question1.answer2);
    $("#answer3").text(question1.answer3);
    // $("answer3").text(question1.answer3);
    $("#answer4").text(question1.answer4);
    // $("answer4").text(question1.answer4);
}

if($('input').checked === true){
    alert("peanut butter jelly time");
}

// Time left function

function timeLeft(){
    counter--;
    $(".shotClock").text("Time Remaining: " + counter);
    if(counter === 0){
        clearInterval(timer);
        $(".shotClock").text("Times Up");
    }
}

// Start Button Function

$(".shotClock").on("click", function(){
    timer = setInterval(timeLeft,1000);
    nextQuestion();
   
});

