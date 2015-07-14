$('[inputLocation]').focus();

$('[backButton]').click(function(){
  formReset();
  $('[inputLocation]').focus();
});

$(document).keypress(function (event) {
    if (event.which == 13) {
      console.log('enter pressed');
      formResults();
    }
});

$(document).keyup(function (event) {
    if (event.which == 27) {
      console.log('esc pressed');
      formReset();
      $('[inputLocation]').focus();
    }
});

function formReset() {
  $('[resultContainer]').hide();
  $('[backButton]').hide();
  $('[inputArea]').show();
  $('[inputLocation]').val('');
  $('[container]').removeClass();
  $('[container]').addClass('container-fluid');
  $('[resultName]').empty();
  $('[resultDesc]').empty();
  $('[resultTemp]').empty();
  $('[resultError]').empty();
};

function formResults() {
  var formLocation = $('[inputLocation]').val();
  var openWeatherMapURL = "http://api.openweathermap.org/data/2.5/weather?q=" + formLocation + "&units=metric";
  $.getJSON(openWeatherMapURL, function (weatherResults) {
      console.log(weatherResults);
      console.log(weatherResults.main.temp.toPrecision(3));
      results(weatherResults);
  })

  function results(weatherResults) {
    if (weatherResults !== 'undefined') {
      var tempExact = weatherResults.main.temp.toPrecision(3);
      $('[inputArea]').hide();
      $('[resultContainer]').show();
      $('[backButton]').show();
      $('[container]').addClass("weather-" + weatherResults.weather[0].main.toLowerCase());
      $('[resultName]').text(weatherResults.name)
      $('[resultDesc]').text(weatherResults.weather[0].description)
      $('[resultTemp]').html(tempExact + '&deg;C')
      $('[resultHelp]').text('Press ESC or click here to go back')
    } else {
      $('[resultError]').text('somethings gone wrong !!')
    }
  }
}
