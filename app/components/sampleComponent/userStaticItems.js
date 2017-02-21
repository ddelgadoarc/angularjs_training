'use strict';

angular.module('angTrainingApp.userStaticItems', [])

    .component('userStaticItems', {
        template: '<div>' +
            '<h5>Sample Component</h5>' +
            '<ul>' +
                 '<li  ng-repeat="user in $ctrl.users">  {{ user.name }}  </li>' +
            '</ul>' +
        '</div>',
        controller: function GreetUserController() {

            this.users = [
                {
                    "name": "Antoinette Olsen",
                    "gender": "female"
                },
                {
                    "name": "Brock Diaz",
                    "gender": "male"
                },
                {
                    "name": "Kennedy Richmond",
                    "gender": "male"
                }
            ];


            console.log(this);
        },
        bindings: {
            hero: '='
        }
    });