 /* global setTimeout:false, document:false */
'use strict';

require.config({
    paths: { 
    	 		jquery:'../bower_components/jquery/jquery',
    	 		jqueryUI:'../bower_components/jquery-ui/jquery-ui',
    			angular:'../bower_components/angular/angular',
    			angularResource:'../bower_components/angular-resource/angular-resource',
    			angularUiRouter:'../bower_components/angular-ui-router/angular-ui-router',
    			angularTranslate:'../bower_components/angular-translate/angular-translate',
    			angularTranslateloader:'../bower_components/angular-translate-loader-url/angular-translate-loader-url',
    			angularBase64:'../bower_components/angular-base64/angular-base64',
    			angularMocks:'../bower_components/angularMocks/angularMocks',
    			ngStorage:'../bower_components/ngStorage/ngStorage',
    			Modernizr:'../bower_components/modernizr/src/Modernizr',
    			lodash:'../bower_components/lodash/lodash',
    			angularAnimate:'../bower_components/angular-animate/angular-animate',
    			toaster:'../bower_components/toastr/toastr',
    			bootstrap:'../bower_components/angular-bootstrap/ui-bootstrap',
    			socketIO:'../bower_components/socket.io/socket',
    			
           },

	 shim: { 


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