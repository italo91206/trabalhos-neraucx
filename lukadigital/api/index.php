<?php
ini_set('error_reporting', E_ALL);
ini_set('display_errors', E_ALL);

define('DS', '/');
define('BASEPATH', dirname(__FILE__));
require_once __DIR__ . '/lib/vendor/autoload.php';
# load includes
include_once 'app/App.php';

App::run();