//global variables
var random_result;
var lost;
var win;
var previous = 0;


//random number between 19-120 - vocab: hoisting
random_result = Math.floor(Math.random() * 102) + 19;

//to display random number on the page
$("#result").html('The number you are aiming for is: ' + random_result);

// display 4 crystals on the page (for loop)
for (var i = 0; i < 4; i++) {

    //each crystal is assigned a random number between 1-12
    var random = Math.floor(Math.random() * 12) + 1;

    var crystal = $("<div>");
    crystal.attr({
        "class": 'crystal',
        "data-random": random
    });

    $(".crystals").append(crystal);
}

//when crystal is clicked, it will add a specific amount of points to the players total score
$(".crystal").on('click', function () {
    //vocab: THIS refers to the value of what was previously clicked ie. crystal
    var result;

    //vocab: parseInt function parses a string and returns an integer
    var num = parseInt($(this).attr('data-random'));
    // console.log(num, '+', result);

    //once clicked, update players score counter
    previous += num;
    console.log(previous);

    //WINS if total score equals random number from the beginning of the game
    //insert conditional statement
    if (previous > random_result) {
        console.log("try again");
    }
    else if (previous === random_result) {
        console.log("winner!");
    }

});



//LOSES if their score goes above the random number
//game restarts once player wins or loses
//once game restarts, new random number appears
//crystals will have all new hidden values
//game should show number of games - wins and loses


//each crystal should have a random hidden value between 1-12