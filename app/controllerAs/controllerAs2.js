'use strict';

angular.module('angTrainingApp.controllerAs2', ['ngRoute'])

    .controller('controllerAsCtrl2', ['$scope', '$rootScope', function($scope, $rootScope) {

        $scope.title= 'From Controller 2';

        console.log("Controller 2");


        //Firing an Event Downwards (e.g. From Parent to Child)
        this.broadcast = function(message) {
            $rootScope.$broadcast('eventHandlers', message);
        };


    }]);