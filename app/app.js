'use strict';

// Declare app level module which depends on views, and components
angular.module('angularJsTrainingApp', [
    'ngRoute',
    'angularJsTrainingApp.login',
    'angularJsTrainingApp.items',
    'myApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
