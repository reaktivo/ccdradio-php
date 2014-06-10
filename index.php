<?php


$page = null;

if ( isset($_GET['p']) ) {
  $page = $_GET['p'];
}

if ( !file_exists("./pages/{$page}.php") ) {
  $page = 'escucha';
}

include("./layout.php");