$(document).ready(function(){
	/* When #button gets clicked, #contain gets hidden and the function transition takes place */
	$('#button').mousedown(function(){
		$('#contain').hide();
		transition();
	});

var numOfGuesses = 0; /* Sets the number of guesses to 0. This gets added to #count which displays what number question the user is currently on */
var previousQ = null;
var questions = document.getElementsByTagName('article'); /* Finds the <article> tag within the DOM */
var correct = []; /* An empty array that will be appended with the number of correct answers */

// Displays a question set and a option set according to the number of guesses // 
function newQuestion(){
		numOfGuesses += 1;
		$('#count').html(numOfGuesses);
		if (numOfGuesses == 1) {
			$('#one').delay(800).fadeIn('slow');
			$('#options-one').delay(800).fadeIn('slow');
		}
		else if (numOfGuesses == 2) {
			$('#one').hide();
			$('#options-one').hide();
			$('#two').delay(800).fadeIn('slow');
			$('#options-two').delay(800).fadeIn('slow');
		}
		else if (numOfGuesses == 3) {
			$('#two').hide();
			$('#options-two').hide();
			$('#three').delay(800).fadeIn('slow');
			$('#options-three').delay(800).fadeIn('slow');
		}
		else if (numOfGuesses == 4) {
			$('#three').hide();
			$('#options-three').hide();
			$('#four').delay(800).fadeIn('slow');
			$('#options-four').delay(800).fadeIn('slow');
		}
		else if (numOfGuesses == 5) {
			$('#four').hide();
			$('#options-four').hide();
			$('#five').delay(800).fadeIn('slow');
			$('#options-five').delay(800).fadeIn('slow');
		}
		else if (numOfGuesses >= 6){
			$('#transition').hide(); // Hides the Transition element//
			endQuiz(); //Calls the endQuiz funtion which will display the user's final result //
		};
}

// This function handles the #transition and calls the newQuestion function//
function transition(){
		$('#logo').hide();

		newQuestion();

		if (numOfGuesses >= 6){
			$('#transition').remove();
		};

		// Animates #transition after displaying the question number to the user //
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
			correct.push(1); // Appends to the array 'correct'//			console.log(correct);
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

// results() counts the length within the array 'correct' and uses that information to display to the user how many questions were answered correctly //
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

	$('li').click(function (e){
		e.preventDefault();
		$(this).addClass('selected'); // Attributes a class to the 'clicked' option//
		$('#options').hide();
		$('#transition').hide().css('opacity', '1');
		var question = $('.question')[0].parentElement.id;
		var answer = $('.selected')[0].getAttribute('name'); // Gets the name attribute from the selected option //
		transition();
		selection(question, answer);
		$('li').removeClass('selected'); // Remeoves the class that was attributed to the option to start fresh for the new question //
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
        location.reload(); // For the Replay Quiz button that reloads the entire app //
	});

});

// Plays the Applause audio clip when 100% is scored//
function playApplause(){
	$('#applause')[0].volume = 0.5;
	$('#applause')[0].load();
	$('#applause')[0].play();
}

// Plays the Laugh audio clip when score is less than 100% //
function playLaughter(){
	$('#laughter')[0].volume = 0.5;
	$('#laughter')[0].load();
	$('#laughter')[0].play();
}