'use strict';

angular.module('angTemplate.contact', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/contact', {
            templateUrl: 'angularTemplates/contact/contact.html',
            controller: 'ContactCtrl'
        });
    }])

    .controller('ContactCtrl', [function() {

    }]);