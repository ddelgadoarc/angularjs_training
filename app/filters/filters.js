'use strict';

angular.module('angTrainingApp.filter1', [])

    .filter('upperCase', function() {

        return function(item) {

            var tlItem =  item.toLowerCase();
            var rs = tlItem;

            if (tlItem.indexOf('d') >= 0) {
                rs = tlItem.toUpperCase();
            } else {
                rs = tlItem;
            }

            return rs;
        };

    });