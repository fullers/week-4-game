$(document).ready(function(){

var charA = {
	name: "Yoda",
	imgsrc: "assets/images/yoda.png",
	hp: 180,
	attackPower: 20,
	counterAttack: 10,

	show: function() {
		$('#charAName').html(charA.name);
		$('#charAImg').html('<img src="' + charA.imgsrc + '" />');
		$('#charAHP').html(charA.hp);
	}
    
}

var charB = {
	name: "Luke Skywalker",
	imgsrc: "assets/images/lukeskywalker.png",
	hp: 150,
	attackPower: 20,
	counterAttack: 10,

	show: function() {
		$('#charBName').html(charB.name);
		$('#charBImg').html('<img src="' + charB.imgsrc + '" />');
		$('#charBHP').html(charB.hp);
	}

}

var charC = {
	name: "Darth Vader",
	imgsrc: "assets/images/darthvader.png",
	hp: 180,
	attackPower: 20,
	counterAttack: 10,

	show: function() {
		$('#charCName').html(charC.name);
		$('#charCImg').html('<img src="' + charC.imgsrc + '" />');
		$('#charCHP').html(charC.hp);
	}

}

var charD = {
	name: "Darth Maul",
	imgsrc: "assets/images/darthmaul.png",
	hp: 150,
	attackPower: 20,
	counterAttack: 10,

	show: function() {
		$('#charDName').html(charD.name);
		$('#charDImg').html('<img src="' + charD.imgsrc + '" />');
		$('#charDHP').html(charD.hp);
	}

}

// Call to display the Name, Image, and HP for each character
charA.show();
charB.show();
charC.show();
charD.show();

//On click functions
$('#charA').on('click', function() {
	
$('#charA').detach().appendTo('#charMove');
$('#charB').detach().appendTo('#enemyMove').addClass('enemy');
$('#charC').detach().appendTo('#enemyMove').addClass('enemy');
$('#charD').detach().appendTo('#enemyMove').addClass('enemy');

});

$('#charB').on('click', function() {
	
$('#charB').detach().appendTo('#charMove');
$('#charA').detach().appendTo('#enemyMove').addClass('enemy');
$('#charC').detach().appendTo('#enemyMove').addClass('enemy');
$('#charD').detach().appendTo('#enemyMove').addClass('enemy');
});

$('#charC').on('click', function() {
	
$('#charC').detach().appendTo('#charMove');
$('#charA').detach().appendTo('#enemyMove').addClass('enemy');
$('#charB').detach().appendTo('#enemyMove').addClass('enemy');
$('#charD').detach().appendTo('#enemyMove').addClass('enemy');
});

$('#charD').on('click', function() {
	
$('#charD').detach().appendTo('#charMove');
$('#charA').detach().appendTo('#enemyMove').addClass('enemy');
$('#charB').detach().appendTo('#enemyMove').addClass('enemy');
$('#charC').detach().appendTo('#enemyMove').addClass('enemy');
});

// $('.enemy').on('click', function(){

// 	if ($(this).is('#charB')){
// 		$('#enemyMove').detach().appendTo('#defenderMove').addClass('defender');
// 	}

// });

});