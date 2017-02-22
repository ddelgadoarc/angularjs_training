'use strict';

angular.module('angTrainingApp.lists', [])

    .component('lists', {
        templateUrl: 'components/sampleComponent/lists.html',
        controller: function GreetUserController($http, $scope) {

            $scope.comments = '';

            $http.get('https://jsonplaceholder.typicode.com/comments').then(function(response) {
                $scope.comments = response.data;
            });
        }
    });