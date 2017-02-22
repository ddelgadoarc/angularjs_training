'use strict';

angular.module('angTrainingApp.lists', [])

    .component('lists', {
        templateUrl: 'components/sampleComponent/lists.html',
        controller: function GreetUserController($http, $scope) {

            $scope.item = '';

            $http.get('https://randomuser.me/api/').then(function(response) {
                $scope.item = response.data;
            });
        }
    });