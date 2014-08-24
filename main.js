
jQuery(document).ready(function() {

	//GET DATA FROM PROMPTS AND INPUTS INTO JS VARIABLES
	var question = ( prompt("How much was the bill?") / 1 ).toFixed(2) ;
	document.getElementById('bill').innerHTML = question;

	var tip = ( prompt("What percentile do you want to tip?") / 1 );
	document.getElementById('percent').innerHTML = tip;

	var people = ( prompt("How many people are splitting the bill?") / 1 ) ;
	document.getElementById('people').innerHTML = people;

	if (question != NaN) {

		//MATH REQUIRED OF VARIABLES FROM PROMPTS
		var tipAll = (question * (tip * .01) );
		var tipPerson = tipAll / people;
		var total = (question /1) + (tipAll);

		//PLACING MATH ANSWERS INTO HTML. ALSO ADD TWO DECIMAL PLACES 

		document.getElementById('percent').innerHTML = tip;
		document.getElementById('tipTotal').innerHTML = tipAll.toFixed(2);
		document.getElementById('tipPerson').innerHTML = tipPerson.toFixed(2);
		document.getElementById('total').innerHTML = total.toFixed(2);

	} else {
		prompt("Only type a number. Try again.")
	};
	
});




