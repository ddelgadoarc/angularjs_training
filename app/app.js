'use strict';

// Declare app level module which depends on views, and components
angular.module('angTrainingApp', [
    'ngRoute',
    'angTrainingApp.newUser',
    'angTrainingApp.listOfUsers',
    'angTrainingApp.editUserProfile',
    'angTrainingApp.profilePhotoComponent',
    'angTrainingApp.userStaticItems',
    'angTrainingApp.directive1',
    'angTrainingApp.service1',
    'angTrainingApp.filter1',
    'angTrainingApp.service2',
    'angTrainingApp.lists',
    'myApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {

    $locationProvider.hashPrefix('');

    $routeProvider.otherwise({redirectTo: '/list-of-users'});
}]);
