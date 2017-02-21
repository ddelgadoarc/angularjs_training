'use strict';

angular.module('angTemplate.about', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/about', {
            templateUrl: 'angularTemplates/about/about.html',
            controller: 'AboutCtrl'
        });
    }])

    .controller('AboutCtrl', [function() {

    }]);