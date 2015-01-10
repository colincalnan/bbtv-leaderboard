<?php

header('Content-type: application/json');

require '../vendor/autoload.php';
require_once 'config/db.php';

Flight::route('GET /players', 'getPlayers');
Flight::route('GET /players/@id', 'getPlayer');
Flight::route('PUT /players/@id', 'updatePlayer');
Flight::set('flight.log_errors', true);
Flight::start();

function getPlayers() {
  try {
    $database = getConnection();
    $players = $database
      ->select("players", "*", ["points[>]" => 0]);
    Flight::json($players);
  } catch(Exception $e) {
    echo '{"error":{"text":'. $e->getMessage() .'}}';
  }
}

function getPlayer($id) {
  try {
    $database = getConnection();
    $player = $database
      ->select("players", "*", ["id[=]" => $id]);
    Flight::json($player);
  } catch(Exception $e) {
    echo '{"error":{"text":'. $e->getMessage() .'}}';
  }
}

function updatePlayer($id) {
  try {
    $database = getConnection();
    $player = $database
      ->update("players", ["points[+]" => 5], ["id[=]" => $id]);
  } catch(Exception $e) {
    echo '{"error":{"text":'. $e->getMessage() .'}}';
  }
}
?>
