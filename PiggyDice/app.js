var scores, roundScore, activePlayer, dice;

scores = [0, 0];
roundScore = 0;
activePlayer = 0;

dice = Math.floor(Math.random() * 6) + 1;
console.log(dice);

//document.querySelector("#current-" + activePlayer).textContent = dice;

var ad = document.querySelector('#score-1').textContent;

document.querySelector('.dice').style.display = 'none';

document.getElementById('score-0').textContent = '0'
document.getElementById('score-1').textContent = '0'
document.getElementById('current-0').textContent = '0'
document.getElementById('current-1').textContent = '0'


//On click event on clicking the roll dice button and displaying the random number
document.querySelector('.btn-roll').addEventListener('click', function(){
	
	//1. Random number
	var dice = Math.floor(Math.random() * 6) + 1;
	
	//2. Display the result
	var diceDom = document.querySelector('.dice');
	diceDom.style.display = 'block';
	diceDom.src = 'dice-' + dice + '.png';
	
});

















