'use strict';

angular.module('angularJsTrainingApp.items', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/items', {
            templateUrl: 'items/itemsView.html',
            controller: 'ItemsCtrl'
        });
    }])

    .controller('ItemsCtrl', ['$scope', function($scope) {

        var that = this;
        this.latestBid = 0;

        console.log(this.latestBid);

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
                },
                {
                    "_id": "58aae738f424685d2e88a7cb",
                    "isActive": false,
                    "balance": "1514.42",
                    "picture": "http://placehold.it/32x32",
                    "eyeColor": "brown",
                    "name": "Denise Nichols",
                    "gender": "female"
                },
                {
                    "_id": "58aae738b19b4f7d9402ba53",
                    "isActive": false,
                    "balance": "3243.45",
                    "picture": "http://placehold.it/32x32",
                    "eyeColor": "green",
                    "name": "Ola Francis",
                    "gender": "female"
                }
            ];

    }]);