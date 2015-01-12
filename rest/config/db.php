<?php

function getConnection() {
  return new medoo([
    'database_type' => 'mysql',
    'database_name' => 'leaderboard',
    'server' => 'localhost',
    'username' => 'root',
    'password' => 'root',
    'port' => 3306
  ]);
}
