'use strict';

define(['services'], function(services) {
    services.service('authorization', ['config','$http',
        function(config,$http) {
            return {
                cwfApplication : function(token){
                    return $http({
                        method : "GET",
                        url : config.avmURL() + "/cwfApplication/",
                        headers : {
                            Authorization : "Bearer " + token
                        }
                    });
                },
                cwfPrivilege : function(token){
                    return $http({
                        method : "GET",
                        url : config.avmURL() + "/cwfPrivilege/",
                        headers : {
                            Authorization : "Bearer " + token
                        }
                    });
                },
                cwfConfigData : function(token){
                    return $http({
                        method : "GET",
                        url : config.avmURL() + "/cwfConfigData/",
                        headers : {
                            Authorization : "Bearer " + token
                        }
                    });
                },

                refreshToken : function(token){
                    return $http({
                        method : "GET",
                        url : config.avmURL() + "/avmSecurity/refreshToken",
                        headers : {
                            Authorization : "Bearer " + token
                        }
                    });
                },

            };
        }
    ]);
});
