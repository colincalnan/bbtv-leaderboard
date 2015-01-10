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

## Developer's notes
I started off wanting to use Laravel to do this but I couldn't wait for Composer to run, it was taking over 45 minutes, and Googling this suggested some fixes, but I decided not to go down that rabbit hole. So I decided to simplify and used Flight with Medoo, to help simplify the REST side of things.

I'm using Angular on the front end. I also realize now that I'm running the REST request and using MySQL to increase the count, which results in a bit of lag when you click. It would be better if the value was incremented on the front end and passed to the backend.

I was also hoping to use something like Yeoman Angular Generator to build the app, and integrate Grunt for the PHP server and livereload etc., but I ran into many problems with Grunt not finding the correct version of PHP and it being generally frustrating. If I'm honest I think I spent far too much time trying to be clever and use the fanciest tools that I could find, rather than solving the problem in the simplest way possible, which I eventually resorted to.

This was an interesting task, and there are probably a number of ways to improve it, but I wanted to be agile and get a proof of concept up and running as quickly as possible. This took me about 5 hours that was peppered with interruptions (probably about 3.5 hours in total)!

Thank you for the challenge and I look forward to getting some feedback about this.
