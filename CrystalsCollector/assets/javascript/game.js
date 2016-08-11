// Javascript function that wraps everything
$(document).ready(function(){ 
	
	// Declaring global variables

	var randomNum;
	var number;
	var wins = 0;
 	var loses = 0;
 	var buttonNum = [];
 	var totalScore = 0;
 	var firstNumber = 0;
 	var secondNumber = 0;
 	var thirdNumber = 0;
 	var fourthNumber = 0;
 	var score;

// Function to create a random number by passing parameter

function genNum(min, max) {

	number = Math.floor(Math.random()*(max - min + 1) + min)
}

// Function to the Random Number for the user to match, also sets the html to display the number 
function setRandNum () {
	genNum(9,120);
	randomNum = number;
	$('#randNum').text(randomNum)
	console.log (randomNum);
}

// Function to the Random Number to an array for the user based on the button clicked, also sets the html to display the number 
function setButtonNum () {

	for (var i=0; i < 4; i++) {
	genNum(1,12);
	buttonNum[i] = number;
	//console.log(buttonNum[i]);
	}

	$('#button1').val(buttonNum[0]);
	$('#button2').val(buttonNum[1]);
	$('#button3').val(buttonNum[2]);
	$('#button4').val(buttonNum[3]);
}

//Functions to set default Wins and Loses
function setDWL () {
	$('#wins').text(wins);
	$('#loses').text(loses);
}

function clear() {
	$('#randomNum').empty();
	$('#totalScore').empty();
	buttonNum = [];
}

//Resets the Random Number and numbers for the buttons
function reset() {
	clear();
	setRandNum();
	setButtonNum();
}

$('#wins').text("Wins: " + wins);
$('#loses').text("Loses: " + loses);

//On Click Functions
//Setting variables firstNumber, secondNumber, thirdNumber, fourthNumber to the array values so I can track each number indvidually for the total score.

$('#button1').on('click', function(event) {

	firstNumber = buttonNum[0];
});

$('#button2').on('click', function(event) {

	secondNumber = buttonNum[1];
	
});

$('#button3').on('click', function(event) {

	thirdNumber = buttonNum[2];
	
});

$('#button4').on('click', function(event) {

	fourthNumber = buttonNum[3];
	
});

$('.number').on('click', function() {
	
	totalScore += parseInt($(this).val());
		
	$('#total').text(totalScore);

	console.log("-----")
	console.log($(this).val());
	console.log(firstNumber,secondNumber,thirdNumber,fourthNumber);

// If statements to keep track of the wins and loses
if (totalScore === randomNum) {
	wins++;
	$('#wltxt').text("You Win!");
	$('#wins').text("Wins: " + wins);
	$('#total').text(0);
	console.log("Wins: " + wins);
	reset();
} 

if (totalScore > randomNum) {
	loses++;
	$('#wltxt').text("You Lost!");
	$('#loses').text("Loses: " + loses);
	$('#total').text(0);
	console.log("Lost: " + loses);
	reset();
	
	// console.log("Total Score:" + totalScore);
	// console.log("Randum Number:" + randNum);
}

});

//Run Game
reset();
});