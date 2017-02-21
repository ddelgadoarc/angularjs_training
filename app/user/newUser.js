'use strict';

angular.module('angTrainingApp.newUser', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/new-user', {
            templateUrl: 'user/newUser.html',
            controller: 'NewUserCtrl'
        });
    }])

    .controller('NewUserCtrl', [function() {

    }]);