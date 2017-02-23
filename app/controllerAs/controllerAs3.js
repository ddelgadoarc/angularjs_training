'use strict';

angular.module('angTrainingApp.controllerAs3', ['ngRoute'])

    .controller('controllerAsCtrl3', ['$scope', '$rootScope', function($scope, $rootScope) {

        var that = this;
        this.title= 'From Controller 3';

        $rootScope.$on('eventHandlers', function (event, data) {

            that.title = data;
        });

    }]);