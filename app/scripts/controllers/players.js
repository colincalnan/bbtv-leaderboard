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

  var client = new Pusher('1b1a04b01fb849b1a5ad');
  var pusher = $pusher(client);
  var channel = pusher.subscribe('test_channel');
  channel.bind('my_event',
    function(data) {
    refreshPlayers();
    }
  );

  var refreshPlayers = function() {
    Players.all('players').getList().then(function(data) {
      console.log('--> rest/players called from refreshPlayers()');
      $scope.players = data;
      console.dir($scope.players);
    });
  };

  $scope.selectPlayer = function(player, index) {
    $scope.selected = index;
    $scope.player = player;
  };

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

  refreshPlayers();
});
