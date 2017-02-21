'use strict';

angular.module('angTrainingApp.editUserProfile', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/edit-user-profile', {
            templateUrl: 'user/editUserProfile.html',
            controller: 'EditUserProfileCtrl'
        });
    }])

    .controller('EditUserProfileCtrl', [function() {

    }]);