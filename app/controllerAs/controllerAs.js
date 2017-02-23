'use strict';

angular.module('angTrainingApp.controllerAs', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/controller-as', {
            templateUrl: 'controllerAs/controllerAs.html',
            controller: 'controllerAsCtrl'
        });
    }])

    .controller('controllerAsCtrl', ['$scope', '$rootScope', function($scope, $rootScope) {

        //Firing an Event Upwards (From Child to Parent)
        this.emit = function(message) {
            $rootScope.$emit('eventHandlers', message); // going down!
        };

    }]);