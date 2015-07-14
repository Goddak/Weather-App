$('input[name="inputLocation"]').focusin(function(){
  if ($('input[name="inputLocation"]').val() == 'Reading, Liverpool, Glasgow or even Paris.') {
    $('input[name="inputLocation"]').val('');
  }
});

$('input[name="inputLocation"]').focusout(function(){
    if ($('input[name="inputLocation"]').val() == '') {
      $('input[name="inputLocation"]').val('Reading, Liverpool, Glasgow or even Paris.')
    }
});

$(document).keypress(function (event) {
    if (event.which == 13) {
      formResults();
    }
});

function formResults() {
  var formLocation = $('input[name="inputLocation"]').val();
  var openWeatherMapURL = "http://api.openweathermap.org/data/2.5/weather?q=" + formLocation + "&units=metric";
  $.getJSON(openWeatherMapURL, function (weatherResults) {
      console.log(weatherResults);
      results(weatherResults);
  })

  function results(weatherResults) {
    if (weatherResults !== 'undefined') {
      var tempExact = weatherResults.main.temp.toPrecision(3);
      $('.input-area').hide();
      $('.container-fluid').addClass("weather-" + weatherResults.weather[0].main.toLowerCase());
      $('.result-name').append(weatherResults.name)
      $('.result-desc').append(weatherResults.weather[0].description)
      $('.result-temp').append(tempExact + '&deg;C')
    } else {
      $('.result-error').append('somethings gone wrong !!')
    }
  }
}
