# How to install
##Clone this repository

    git clone git@github.com:colincalnan/bbtv-leaderboard.git

##Install all the necessary dependencies

    bower install
    composer install

## Upload the Database

    mysql -u username -ppassword databasename < leaderboard.sql

## Connect to the Database

Rename the ```vendor/db-sample.php``` file.

    mv vendor/db-sample.php vendor/db.php
