//global variables
var randomNumber; //undefined

//with numerical value
var lose = 0;
var win = 0;
var previousNumber = 0;

//function to start game
var startReset = function () {

    //clear crystals values
    $(".gems").empty();

    var image = ['https://vignette.wikia.nocookie.net/marvel-contestofchampions/images/1/10/Arena_Crystal.png/revision/latest?cb=20150825214845'
    ];

    //generate random number between 19-120
    randomNumber = Math.floor(Math.random() * 102) + 19;

    //to display random number on the page
    $("#result").html('The number you are aiming for is: ' + randomNumber);

    // display 4 crystals on the page (for loop)
    for (var i = 0; i < 4; i++) {

        //each crystal is assigned a random number between 1-12
        var random = Math.floor(Math.random() * 12) + 1;
        
        //create div for random number within each crystal
        var crystal = $("<div>");
        crystal.attr({
            "class": 'crystal',
            "data-random": random,
        });

        crystal.css({
            "background-image": "url('" + image + "')",
            "background-size": "cover"
        });

        $(".gems").append(crystal);
    }
    //allows player to see addition on the page
    $("#previous").html("Counter: " + previousNumber);
}


//start game
startReset();

//when a crystal is clicked, it will add a specific amount of points to the players total score and reset to zero once number is reached 
//vocab: event delegation allows us to attach a single event listener, to a parent element that will fire for all descendants matching a selector, whether those descendants exist now or will be added in the future.
$(document).on('click', ".crystal", function () {

    //vocab: THIS refers to the value of what was previously clicked ie. crystal
    //vocab: parseInt function parses a string and returns an integer
    var num = parseInt($(this).attr('data-random'));

    //once clicked, update players score counter
    previousNumber += num;
    console.log(previousNumber);

    $("#previous").html("Counter: " + previousNumber);


    //insert conditional statement
    //LOSES if their score goes above the random number
    if (previousNumber > randomNumber) {
        //add to score
        lose++;

        $("#lose").html("Total Losses: " + lose);

        //when lose again, set previous variable to zero
        previousNumber = 0;

        //lose and start again
        startReset();
    }

    //WINS if total score equals random number from the beginning of the game
    else if (previousNumber === randomNumber) {
        //add to score
        win++;

        $("#win").html("Total Wins: " + win);

        //when win again, set previous variable to zero
        previousNumber = 0;

        //win and start again 
        startReset();
    }
});