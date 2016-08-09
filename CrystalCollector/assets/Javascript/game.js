// Javascript function that wraps everything
$(document).ready(function(){ 
	
	var randomNum;
	var number;
	var wins;
 	var loses;
 	var buttonNum = [];
 	var totalScore = 0;
 	var firstNumber = 0;
 	var secondNumber = 0;
 	var thirdNumber = 0;
 	var fourthNumber = 0;
 	var score;

function genNum(min, max) {

	number = Math.floor(Math.random()*(max - min + 1) + min)
}

function setRandNum () {
	genNum(9,120);
	randomNum = number;
	$('#randNum').text(randomNum)
	console.log (randomNum);
}


function setButtonNum () {

	for (var i=0; i < 4; i++) {
	genNum(1,12);
	buttonNum[i] = number;
	console.log(buttonNum[i]);
	}

	$('#button1').val(buttonNum[0]);
	$('#button2').val(buttonNum[1]);
	$('#button3').val(buttonNum[2]);
	$('#button4').val(buttonNum[3]);
}

function math(w,x,y,z) {
	score = parseInt(w) + parseInt(x) + parseInt(y) + parseInt(z);
	totalScore = score;
}

$('#button1').on('click', function(event) {

	firstNumber = buttonNum[0];
});

$('#button2').on('click', function(event) {

	secondNumber = buttonNum[1];
	// $('#total').text(totalScore);
});

$('#button3').on('click', function(event) {

	thirdNumber = buttonNum[2];
	// $('#total').text(totalScore);
});

$('#button4').on('click', function(event) {

	fourthNumber = buttonNum[3];
	// $('#total').text(totalScore);
});

$('.number').on('click', function() {
	if (firstNumber !== 0 || secondNumber !==0 || thirdNumber !=0 || fourthNumber !== 0) {

		totalscore = math(firstNumber,secondNumber,thirdNumber,fourthNumber);
	} 
	else {
		totalScore = 0;
	}
	$('#total').text(totalScore);
	console.log(firstNumber,secondNumber,thirdNumber,fourthNumber);
});






function reset(){
setRandNum();
setButtonNum();
}

reset();
})