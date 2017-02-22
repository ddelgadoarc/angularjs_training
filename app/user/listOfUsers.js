'use strict';

angular.module('angTrainingApp.listOfUsers', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/list-of-users', {
            templateUrl: 'user/listOfUsers.html',
            controller: 'ListOfUsersCtrl'
        });
        $routeProvider.when('/list-of-users', {
            templateUrl: 'user/listOfUsers.html',
            controller: 'ListOfUsersCtrl'
        });
    }])

    .controller('ListOfUsersCtrl', ['$scope', 'notify', 'upperCaseFilter', 'getlist', function($scope , notify, upperCaseFilter, getlist) {

        this.imgLink = 'From Controller';

        this.hero = "Hero";

        $scope.s = "From Controller";

        $scope.users = [
            {
                "_id": "58aae73831f128016b433115",
                "isActive": false,
                "balance": "1205.84",
                "picture": "http://placehold.it/32x32",
                "eyeColor": "blue",
                "name": "Antoinette Olsen",
                "gender": "female"
            },
            {
                "_id": "58aae7383600ba3693ab0948",
                "isActive": false,
                "balance": "3951.70",
                "picture": "http://placehold.it/32x32",
                "eyeColor": "blue",
                "name": "Brock Diaz",
                "gender": "male"
            },
            {
                "_id": "58aae73818d5cd1460d0cff8",
                "isActive": true,
                "balance": "3544.18",
                "picture": "http://placehold.it/32x32",
                "eyeColor": "blue",
                "name": "Kennedy Richmond",
                "gender": "male"
            },
            {
                "_id": "58aae73807871482e693467f",
                "isActive": true,
                "balance": "1475.61",
                "picture": "http://placehold.it/32x32",
                "eyeColor": "green",
                "name": "Rivas Moreno",
                "gender": "male"
            },
            {
                "_id": "58aae738d6317eb00ae3d7f9",
                "isActive": false,
                "balance": "2707.82",
                "picture": "http://placehold.it/32x32",
                "eyeColor": "green",
                "name": "Dillon Flores",
                "gender": "male"
            }
        ];

        $scope.actions = [
            {
                "name": "Move Left",
            },
            {
                "name": "Move Right",
            }
        ];

        //using service
        $scope.onClickUsingService = function(name) {

            notify(name);
        }

        $scope.getList = function() {

            return getlist(1);
        }

    }]);