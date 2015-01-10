'use strict';

/**
* @ngdoc function
* @name myLeaderboardApp.controller:PlayersCtrl
* @description
* # PlayersCtrl
* Controller of the myLeaderboardApp
*/
angular.module('myLeaderboardApp')
.controller('PlayersCtrl', function ($scope, Restangular, $pusher) {

  var Players = Restangular;

  // Pusher
  var client = new Pusher('1b1a04b01fb849b1a5ad');
  var pusher = $pusher(client);
  var channel = pusher.subscribe('test_channel');
  channel.bind('my_event',
    function(data) {
    refreshPlayers();
    }
  );

  /**
   * Function to refresh players list after actions
   */
  var refreshPlayers = function() {
    Players.all('players').getList().then(function(data) {
      $scope.players = data;
      angular.forEach($scope.players, function (player) {
        player.points = parseFloat(player.points);
      });
    });
  };

  /**
   * Function to highlight a player
   */
  $scope.selectPlayer = function(player, index) {
    $scope.selected = player.id;
    $scope.player = player;
  };

  /**
   * Function to update a player - call the REST service
   */
  $scope.updatePlayer = function() {
    Players.all('players').getList().then(function(data){
      var player = data.one($scope.player.id);
        player.put().then(function(response) {
        refreshPlayers();
      }, function(response) {
        console.log('An error occurred');
      });
    });
  }

  // Refresh on load
  refreshPlayers();
});
