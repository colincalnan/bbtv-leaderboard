'use strict';

/**
* @ngdoc overview
* @name myLeaderboardApp
* @description
* # myLeaderboardApp
*
* Main module of the application.
*/
angular
.module('myLeaderboardApp', [
  'ngRoute',
  'restangular'
])
.config(function ($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'views/players.html',
    controller: 'PlayersCtrl'
  })
  .otherwise({
    redirectTo: '/'
  });
})
.config(function (RestangularProvider) {
  RestangularProvider.setBaseUrl('/rest/');
});
