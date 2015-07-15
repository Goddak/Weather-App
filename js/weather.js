(function($) {

	/**
	 * Auto Focus on page load on the input box
	 */
	$('[inputLocation]').focus();

	/**
	 * Clicking on the back button will reset the form and re-focus the input button
	 */
	$('[backButton]').click(function() {
		formReset();
	});

	/**
	 * On enter click lets trigger the formResults function
	 */
	$(document).keypress(function(event) {
		if(event.which == 13) {
			formResults();
		}
	});

	/**
	 * When ESC is pressed lets reset the form and re-focus on the input box
	 */
	$(document).keyup(function(event) {
		if(event.which == 27) {
			formReset();
			focusOnInput();
		}
	});

	/**
	 * Focus on the main input box
	 */
	function focusOnInput() {
		$('[inputLocation]').focus();
	}

	/**
	 * Reset the form
	 */
	function formReset() {
		$('[resultContainer]').fadeOut(800);
		$('[inputArea]').delay(1000).fadeIn(800);
		$('[inputLocation]').val('');
		$('[container]').removeClass();
		$('[container]').addClass('container-fluid weather');
		$('[resultName]').empty();
		$('[resultDesc]').empty();
		$('[resultTemp]').empty();
		$('[resultError]').empty();
		setTimeout(function() { focusOnInput(); }, 1800);
	};

	/**
	 * Fire off the API request and pass results to the results function
	 */
	function formResults() {

		// Get the value
		var formLocation = $('[inputLocation]').val();

		// If the user did not enter anything in the input box lets not bother sending to the API
		if(formLocation === '') {
			$('[resultError]').text('Please enter something');
			return; // return will exit this function
		}

		// Make the correct API
		var openWeatherMapURL = "http://api.openweathermap.org/data/2.5/weather?q=" + formLocation + "&units=metric";

		// Fire off the request and pass to results
		$.getJSON(openWeatherMapURL, function(weatherResults) {
			//console.log(weatherResults); //uncomment for console log of results
			results(weatherResults);
		});

	}

	/**
	 * Once we have the results lets handle them
	 */
	function results(weatherResults) {

		// Detect if the API returns a 404 error
		if(weatherResults.cod !== '404') {
			// Round the temperature to show just one decimal place
			var tempExact = weatherResults.main.temp.toPrecision(3);
			$('[inputArea]').fadeOut(800);
			$('[resultContainer]').delay(1000).fadeIn(800);
			setTimeout(function() { $('[container]').addClass("weather weather-" + weatherResults.weather[0].main.toLowerCase()); }, 1800);
			$('[container]').delay(900).fadeIn(800);
			$('[resultName]').text(weatherResults.name);
			$('[resultDesc]').text(weatherResults.weather[0].description);
			$('[resultTemp]').html(tempExact + '&deg;C');
			$('[resultHelp]').text('Press ESC or click here to go back');
			$('[resultError]').text(''); // clear off any errors we may have once we have some real results
		} else {
			$('[resultError]').text('The town/city you entered was not recognised! Please try again.');
		}

	}

})(jQuery);
