<?php

function getConnection() {
  return new medoo([
    'database_type' => 'mysql',
    'database_name' => '',
    'server' => 'localhost',
    'username' => '',
    'password' => '',
    'port' => 3306
  ]);
}
