'use strict';

function HeroDetailController() {

}

angular.module('angTrainingApp.profilePhotoComponent', [])

    .component('profilePhoto', {
        templateUrl: 'components/sampleComponent/profilePhoto.html',
        controller: HeroDetailController,
        bindings: {
            hero: '='
        }
    });