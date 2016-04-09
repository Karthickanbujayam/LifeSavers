 /* global setTimeout:false, document:false */
'use strict';
require.config({

  // alias libraries paths
    paths: {

        'angular': '../bower_components/angular/angular.js'
    },

    // angular does not support AMD out of the box, put it in a shim
    shim: {
        'angular': {
            exports: 'angular'
        }
    },

    // kick start application
    deps: ['./bootstrap']
}); 