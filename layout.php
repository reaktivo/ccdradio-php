<!DOCTYPE html>
<html class="no-js">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>CCD Radio</title>
    <link href="//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css" rel="stylesheet">
    <link rel="stylesheet" href="css/main.css" />
    <script src="js/modernizr.js"></script>
    <script>
      WebFontConfig = {
        google: { families: [ 'Karla:400,400italic,700,700italic:latin' ] }
      };
      (function() {
        var wf = document.createElement('script');
        wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
          '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
        wf.type = 'text/javascript';
        wf.async = 'true';
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(wf, s);
      })()
    </script>
  </head>
  <body>
    <audio id="stream"></audio>

    <script>
      window.STREAM = {"host":"fire.wavestreamer.com", "port":"7721", "path":"/Live"};
      document.getElementById('stream').src = "http://" + STREAM.host + ":" + STREAM.port + STREAM.path;
    </script>

    <div id="background">
      <div class="texture"></div>
      <div class="image one"></div>
      <div class="image two"></div>
    </div>



    <h1 class="ccdradio"><a href="#escucha">CCD Radio</a></h1>

    <div id="main">
      <div id="main-content">
        <?php include("./pages/{$page}.php") ?>
      </div>
    </div>

    <nav id="main-nav" href="#">
      <a href="?p=escucha">Escucha</a>
      <span class="spacer">|</span>
      <a href="?p=programacion">Programación</a>
      <span class="spacer">|</span>
      <a href="?p=acerca-de">Acerca de</a>
    </nav>

    <footer>
      <a href="#" class="sep">SEP</a>
      <a href="#" class="conaculta">Conaculta</a>
    </footer>

    <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/jquery.transit/0.9.9/jquery.transit.min.js"></script>
    <script src="js/jquery.shoutcast.js"></script>
    <script src="js/ccdplayer.js"></script>
    <script src="js/viewport.js"></script>
    <script src="js/main.js"></script>
  </body>
</html>