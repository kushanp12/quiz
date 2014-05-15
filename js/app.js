$(document).ready(function(){
	$('#button').mousedown(function(){
		$('#contain').hide();
		transition();
	});

var numOfGuesses = 0;
var previousQ = null;
var questions = document.getElementsByTagName('article');
var correct = [];

//PUT QUESTIONS INTO AN ARRAY//

function newQuestion(){
		numOfGuesses += 1;
		$('#count').html(numOfGuesses);
		if (numOfGuesses == 1) {
			$('#one').fadeIn(3900);
		}
		else if (numOfGuesses == 2) {
			$('#one').hide();
			$('#two').fadeIn(3900);
		}
		else if (numOfGuesses == 3) {
			$('#two').hide();
			$('#three').fadeIn(3900);
		}
		else if (numOfGuesses == 4) {
			$('#three').hide();
			$('#four').fadeIn(3900);
		}
		else if (numOfGuesses == 5) {
			$('#four').hide();
			$('#five').fadeIn(3900);
		}
		else if (numOfGuesses >= 6){
			$('#transition').hide();
			endQuiz();
		};
}

function transition(){
		$('#logo').hide();

		newQuestion();

		if (numOfGuesses >= 6){
			$('#transition').remove();
		};

		$('#transition').slideToggle('slow')
		.animate(
			{opacity: 0}
		);
		
		$('#logo').delay(800).show();
		$('#options').slideToggle(2000);
}

function selection(q, a){

	if (q == 'one' && a == 'friends') {
			console.log('Right');
			correct.push(1);
			console.log(correct);
			$('#q1').remove();
		}
	else if (q == 'one' && a != 'friends') {
			console.log('Wrong');
			$('#q1').remove();
		}
	else if (q == 'two' && a == 'seven') {
		console.log('Right2');
		correct.push(2);
		console.log(correct);
		$('#q2').remove();
		}
	else if (q == 'two' && a != 'seven') {
		console.log('Wrong2');
		$('#q2').remove();
		}
	else if (q == 'three' && a == 'to') {
		console.log('Right3');
		correct.push(3);
		console.log(correct);
		$('#q3').remove();
		}
	else if (q == 'three' && a != 'to') {
		console.log('..');	
		$('#q3').remove();
	}
	else if (q == 'four' && a == 'tbbt') {
		console.log('Right4');
		correct.push(4);
		console.log(correct);
		$('#q4').remove();
	}
	else if (q == 'four' && a != 'tbbt') {
		console.log('...');
		$('#q4').remove();
	}
	else if (q == 'five' && a == 'elr') {
		console.log('Right5');
		correct.push(5);
		console.log(correct);
		results();
		$('#q5').remove();
	}
	else if (q == 'five' && a != 'elr') {
		console.log(correct);
		results();
		playLaughter();
		$('#q5').remove();
	}
}

function results(){
	for (var x in correct){
			if (correct.length == 1){
			console.log('You have answered ' + correct.length + ' out of 5 right!');
			$('.count').html('Sigh. You only answered: <br>' + correct.length + ' out of 5 right.</br>');
			playLaughter();
			}
			else if (correct.length == 2){
			console.log('You have answered ' + correct.length + ' out of 5 right!');
			$('.count').html('Sigh. You only answered: <br>' + correct.length + ' out of 5 right.</br>');
			playLaughter();
			}
			else if (correct.length == 3){
			console.log('You have answered ' + correct.length + ' out of 5 right!');
			$('.count').html('Sigh. You only answered: <br>' + correct.length + ' out of 5 right.</br>');
			playLaughter();
			}
			else if (correct.length == 4){
			console.log('You have answered ' + correct.length + ' out of 5 right!');
			$('.count').html('Sigh. You only answered: <br>' + correct.length + ' out of 5 right.</br>');
			playLaughter();
			}
			else if (correct.length == 5){
			console.log('You have answered ' + correct.length + ' out of 5 right!');
			$('.count').html('Congrats! You have answered: <br>' + correct.length + ' out of 5 right!</br>');
			playApplause();
			}
		}

}




	$('li').click(function(){
		$(this).addClass('selected');
		$('#options').hide();
		$('#transition').hide().css('opacity', '1');
		var question = $('.question')[0].parentElement.id;
		var answer = $('.selected')[0].getAttribute('name');
		transition();
		selection(question, answer);
		$('li').removeClass('selected');
	});	

function endQuiz(){
	$('#five').hide();
	$('#logo').hide();
	$('#options').hide();
	$('li').hide();
	$('#end').show();
	$('#new').delay(800).fadeIn('slow');
	$('#arrow').delay(800).fadeIn('slow');
}

$('#new').click(function (e) {
        e.preventDefault();
        location.reload();
	});

});

function playApplause(){
	$('#applause')[0].volume = 0.5;
	$('#applause')[0].load();
	$('#applause')[0].play();
}

function playLaughter(){
	$('#laughter')[0].volume = 0.5;
	$('#laughter')[0].load();
	$('#laughter')[0].play();
}