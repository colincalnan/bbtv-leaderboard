<?php

header('Content-type: application/json');

require 'vendor/autoload.php';
require_once 'config/db.php';

Flight::route('GET /players', 'getPlayers');
Flight::start();

function getPlayers() {
  try {
    $database = getConnection();
    $players = $database
      ->select("players", "*", array("points[>]" => 0));
    echo json_encode($players);
  } catch(PDOException $e) {
    echo '{"error":{"text":'. $e->getMessage() .'}}';
  }
}
