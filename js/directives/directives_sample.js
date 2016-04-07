'use strict';

define(['directives'], function(directives) {
    directives.directive('directivesName', function() {
        return {
            restrict: 'E',
            templateUrl: 'directive_templates/directivestemplate.html',
            scope: {
                model : '='
            }
        };
    });
});