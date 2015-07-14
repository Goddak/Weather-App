
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="en-GB">
<head profile="http://gmpg.org/xfn/11">
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>
    Weather App - Goddak
  </title>
  <!--- Include Bootstrap files from CDN --->
  <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
  <!--- Include Font Awesome for icon use --->
  <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css">
  <!--- Include Goddak's StyleSheet --->
  <link rel="stylesheet" href="css/style.css" type="text/css" />
</head>
<body>
  <div class="container-fluid">
    <div class="row vertical-align">
    <div class="wrapper">
      <div class="input-area col-xs-10 col-md-offset-1" style="text-align: justify;">
        <h1 class="text-center">
          Open Weather Maps &amp; JavaScript Demonstration
        </h1>
        <h3>
          Where would you like a weather status for?
        </h3>
        <input type="text" name="inputLocation" class="form-control" value="Reading, Liverpool, Glasgow or even Paris.">
        <p class="help-block">
          Press ENTER to see how things are looking.
        </p>
      </div><!--- Close input-area div --->
      <div class="results-container">
        <h1 class="result-name"></h1>
        <p class="result-desc"></p>
        <h3 class="result-temp"></h3>
      </div>
    </div><!--- Close wrapper div --->
  </div><!--- Close row vertical-align div --->
</div><!--- Close container-fluid div --->

  <!--- Include jQuery files from CDN  --->
  <script src="//code.jquery.com/jquery-1.11.3.min.js"></script>
  <script src="//code.jquery.com/jquery-migrate-1.2.1.min.js"></script>
  <!--- Include Bootstrap files from CDN --->
  <script src="//maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
  <!--- Include Goddaks weather JavaScript --->
  <script src="js/weather.js"></script>
</body>
</html>
