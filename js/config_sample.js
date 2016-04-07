'use strict';

require(['angular'], function(angular) {
    var configModule = angular.module('ericssonApp.config', []);
    configModule.config(['$locationProvider', function($locationProvider) {
        //$locationProvider.html5Mode(true);
        }]);
    
    configModule.config(['$resourceProvider', function($resourceProvider) {
           // $resourceProvider.defaults.stripTrailingSlashes = false;
        }]);
    
    configModule.config(['$translateProvider', function($translateProvider) {
           /* $translateProvider.useStaticFilesLoader({
                prefix: 'i18n/locale-',
                suffix: '.json'
            });
			*/
            $translateProvider.preferredLanguage('en');
        //$translateProvider.uses(window.navigator.userLanguage || window.navigator.language);
        }]);
 
});
