'use strict';

/**
* @ngdoc function
* @name myLeaderboardApp.controller:MainCtrl
* @description
* # MainCtrl
* Controller of the myLeaderboardApp
*/
angular.module('myLeaderboardApp')
.controller('PlayersCtrl', function ($scope, Restangular) {
  var url = 'players';
  var Players = Restangular.all(url);

  $scope.selected = 0;

  console.dir(Players);
  var refreshPlayers = function() {
    Players.getList().then(function(data) {
      console.log('--> rest/players called from refreshPlayers()');
      $scope.players = data;
      console.dir($scope.players);
    });
  };

  $scope.getPlayer = function () {

  };

  $scope.selectPlayer = function(player, index) {
    $scope.selected = index;
    console.dir(player);
  };

  refreshPlayers();
});
