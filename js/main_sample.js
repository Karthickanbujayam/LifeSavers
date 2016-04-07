 /* global setTimeout:false, document:false */
'use strict';

require.config({
    paths: {
        angular: '../lib/angularjs/angular',
        angularResource: '../lib/angular-resource/angular-resource',
        angularUiRouter: '../lib/angular-ui-router/release/angular-ui-router',
        angularTranslate: '../lib/angular-translate/angular-translate',
        angularTranslateLoader: '../lib/angular-translate-loader-static-files/angular-translate-loader-static-files',
        angularMocks: '../lib/angular-mocks/angular-mocks',
        angularBootstrap: '../lib/angular-bootstrap/ui-bootstrap-tpls',
        angularBase64:'../lib/angular-base64/angular-base64',
        ngStorage:'../lib/ngstorage/ngStorage',
        jquery: '../lib/jquery/jquery',
        jqueryMousewheel: '../lib/jquery-mousewheel/jquery.mousewheel',
        lodash: '../lib/lodash/dist/lodash',
        angularBreadcrumb: '../lib/angular-breadcrumb/dist/angular-breadcrumb',
        jqueryActual: '../lib/jquery.actual/jquery.actual',
        moment: '../lib/moment/moment',
        angularAnimate : '../lib/angular-animate/angular-animate',
        toaster:'../lib/angularjs-toaster/toaster',
        KeyboardShortcut:'../module/KeyboardShortcut',
        jqueryUi:'../lib/jquery-ui/jquery-ui',
        ngDragDrop: '../lib/angular-dragdrop/src/angular-dragdrop',
        d3:"../lib/d3/d3"
    },
    shim: {
        angular: {
            'exports': 'angular',
            'deps': ['jquery','jqueryUi']
        },
        angularResource: ['angular'],
        angularUiRouter: ['angular'],
        angularTranslate: ['angular'],
        angularTranslateLoader: ['angular', 'angularTranslate'],
        angularMocks: ['angular'],
        angularBreadcrumb: ['angular'],
        angularBootstrap: ['angular'],
        angularBase64: ['angular'],
        ngStorage:['angular'],
        jqueryMousewheel: ['jquery'],
        jqueryActual: ['jquery'],
        moment: ['jquery'],
        angularAnimate:['angular'],
        toaster:['angular'],
        KeyboardShortcut:['angular'],
        jqueryUi:['jquery'],
        ngDragDrop: ['angular']
    },
    map: {
        "*": {
            "lodash": "lodashNoConflict"
        },
        "jqueryNoConflict": {
            "jquery": "jquery"
        },
        "lodashNoConflict": {
            "lodash": "lodash"
        }
    },
    priority: [
        "angular"
    ]
});

define('jqueryNoConflict', ["jquery"], function($) {
    return $.noConflict(true);
});
define('lodashNoConflict', ["lodash"], function(_) {
    return _.noConflict(true);
});


require([
    'angular',
    'jquery',
    'jqueryUi',
    'app',
    'mockSetup'
], function(angular, app) {
    angular.element().ready(function() {
        angular.bootstrap(document, ['ericssonApp'], {strictDi: true});
    });
});
