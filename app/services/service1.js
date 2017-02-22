'use strict';

angular.module('angTrainingApp.service1', [])

    .factory('notify', ['$window', function(win) {

        var msgs = [];

        return function(msg) {
            msgs.push(msg);

            if (msgs.length === 3) {
                win.alert(msgs.join('\n'));
                msgs = [];
            }
        };

    }]);