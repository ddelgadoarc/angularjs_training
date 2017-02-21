'use strict';

angular.module('angTrainingApp.directive1', [])

    .directive('directive1', function() {
        return {
            scope: {
                status: '=status'
            },
            templateUrl: 'directives/directive1Template.html',
            link: function(scope, elem, attrs) {

                $(elem).on('click', function() {

                    console.log(attrs);
                    var listOfUsersWrapper = $('.list-of-users');
                    var thisElem = $(this);

                    listOfUsersWrapper.css({'backgroundColor': '#fff'});
                    thisElem.parent().css({'backgroundColor': '#bb121d'});
                });
            }
        }
    });