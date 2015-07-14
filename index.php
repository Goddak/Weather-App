
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="en-GB">
<head profile="http://gmpg.org/xfn/11">
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>
    Weather Status by Goddak
  </title>
  <!--- Include Bootstrap files from CDN --->
  <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
  <!--- Include Font Awesome for icon use --->
  <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css">
  <!--- Include Goddak's StyleSheet --->
  <link rel="stylesheet" href="css/style.css" type="text/css" />
</head>
<body>
  <div class="container-fluid" container>
    <div class="row vertical-align">
    <div class="wrapper">
      <div class="input-area col-xs-10 col-md-offset-1" inputArea>
        <img src="img/logo.png" alt="Company Logo" class="img-responsive col-xs-12 col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2 col-lg-6 col-lg-offset-3">
        <h3 class="margin name">
          Where would you like a weather status for?
        </h3>
        <input type="text" inputLocation class="form-control" placeholder="Reading, Liverpool, Glasgow or even Paris.">
        <p class="help-block margin">
          Press ENTER to see how things are looking.
        </p>
      </div><!--- Close input-area div --->
      <div class="results-container col-xs-12 col-sm-8 col-md-5 col-lg-3" resultContainer>
        <h1 class="result-name" resultName></h1>
        <p class="result-desc" resultDesc></p>
        <h3 class="result-temp" resultTemp></h3>
        <p class="result-error bg-danger" resultError></p>
      </div>
      <div class="back-button col-xs-12 col-sm-8 col-md-5 col-lg-3" backButton>
        <p class="result-help help-block" resultHelp></p>
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
