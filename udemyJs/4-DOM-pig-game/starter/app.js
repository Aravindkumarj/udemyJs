/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer;

scores = [0, 0];
roundScore = 0;
activePlayer = 1;

document.querySelector('.dice').style.display = 'none';

function btn(){
	// do something here
}

document.querySelector('.btn-roll').addEventListener('click', function(){
	
	//1. Random number
	var dice = Math.floor(Math.random() * 6) + 1;
	
	// 2. display number
	document.querySelector('.dice').style.display = 'block';

	// 3. update round score only if the rolled number is not 1












//read values of HTML elements.

var x = document.querySelector('#score-1').textContent;
console.log(x);