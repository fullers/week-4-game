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

charA.show();
charB.show();
charC.show();
charD.show();

});