'use strict';

// Declare app level module which depends on views, and components
angular.module('angTemplate', [
    'ngRoute',
    'angTemplate.home',
    'angTemplate.about',
    'angTemplate.contact',
    'myApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('');

  $routeProvider.otherwise({redirectTo: '/home'});
}]);
