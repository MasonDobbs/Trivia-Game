
window.onload = function(){

var questionArr = [
"Alexander the great was taught by which Greek philosopher?", 
"The leaning tower of Pisa is located in which city?", 
"How many gifts would you receive if you received all of the gifts in the song, The Twelve Days of Christmas?",
"Which is the only Disney Princess that has a child?",
"What are the first four digits of Pi?",
"Which bird has eyes that are larger than its brain?",
"Spinach is high in which mineral?",
"What is a Geiger Counter used to detect?",
"What is the total number of dots on a pair of dice?",
"Mount Everest is found in which mountain range?"
]

var answerArr = [
"Socratise",
"Pisa, Italy",
"364",
"Ariel",
"3.141",
"Ostrich",
"Iron",
"Radiation",
"42",
"The Himalayas"
]

var correct = 0;

var incorrect = 0;

var time = 180;

var clockRunning = false;

var intervalId;

function startTimer(){

    if (!clockRunning) {
        intervalId = setInterval(count, 1000);
        clockRunning = true;
    }
}

function count() {
    time--;
    var converted = timeConverter(time);
    $("#timer").html("time: " + converted);
    
}

function timeConverter(t) {

    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);
  
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
  
    if (minutes === 0) {
      minutes = "00";
    }
    else if (minutes < 10) {
      minutes = "0" + minutes;
    }
  
    return minutes + ":" + seconds;
  }

for(i=0; i<questionArr.length; i++){

}



$("#gameStart").on("click", function(){

    $("#gameStart").empty();
    $("#instructions").empty();

    $("#question1").html(questionArr[0]);
        $("#answer1").html(answerArr[0]);
        $("#wrong1").html("Promethius");
        $("#wrong2").html("Aristotle");

    $("#question2").html(questionArr[1]);
        $("#answer2").html(answerArr[1]);
        $("#wrong3").html("Belgium, Germany")

    $("#question3").html(questionArr[2]);

    $("#question4").html(questionArr[3]);

    $("#question5").html(questionArr[4]);

    $("#question6").html(questionArr[5]);

    $("#question7").html(questionArr[6]);

    $("#question8").html(questionArr[7]);

    $("#question9").html(questionArr[8]);

    $("#question10").html(questionArr[9]);
        $("#answer10").html(answerArr[9]);
        $("#wrong19").html("Rocky Mountains");
        $("#wrong20").html("Appalachian");

    timeConverter();
    count();
    startTimer();
   $("#submit").html("Submit");

    
//    ("#answer1").on("click", function(){
//     correct++;
//     ("#answer1").empty();
//     ("#wrong1").empty();
//     ("#wrong2").empty();
//     console.log(this)
// });

// ("#wrong1").on("click", function(){
//     incorrect++;
//     ("#answer1").empty();
//     ("#wrong1").empty();
//     ("#wrong2").empty();
// });

// ("#wrong2").on("click", function(){
//     incorrect++;
//     ("#answer1").empty();
//     ("#wrong1").empty();
//     ("#wrong2").empty();
// })

})

$("#submit").on("click", function(){
clearInterval(intervalId);
clockRunning = false;

$("#timer").empty();

$(".questions").empty();

var score  = Math.floor(correct/10);

$("#score").html("Score: " + score);

$("#correct").html("Correct: " + correct);

$("#incorrect").html("Incorrect: " + incorrect);

$("#submit").empty();

$("#playAgain").html("Play Again");

});

$("#playAgain").on("click", function(){
   
    $("#gameStart").empty();
    $("#instructions").empty();

    $("#question1").html(questionArr[0]);

    $("#question2").html(questionArr[1]);

    $("#question3").html(questionArr[2]);

    $("#question4").html(questionArr[3]);

    $("#question5").html(questionArr[4]);

    $("#question6").html(questionArr[5]);

    $("#question7").html(questionArr[6]);

    $("#question8").html(questionArr[7]);

    $("#question9").html(questionArr[8]);

    $("#question10").html(questionArr[9]);
       
        

    timeConverter();
    count();
    startTimer();
   $("#submit").html("Submit");

   $("#score").empty();
   $("#correct").empty();
   $("#incorrect").empty();

    $("#playAgain").empty();


});

}
