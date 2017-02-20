'use strict';

angular.module('angularJsTrainingApp.login', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/login', {
            templateUrl: 'login/loginView.html',
            controller: 'LoginCtrl'
        });
    }])

    .controller('LoginCtrl', [function() {


    }]);