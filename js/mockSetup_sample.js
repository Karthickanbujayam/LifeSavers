'use strict';

define(['angular',
        './mockAPI/customer.js',
        './mockAPI/customerAccount.js',
        './mockAPI/dashboard/getDashboard.js',
        './mockAPI/cim/contactSearchResult.js',
        './mockAPI/cim/srSearchResult.js',
        'angularMocks', 'app'],
    function(angular,
             customer,
             account,
             getDashboard,
             contactSearchResult,
            srSearchResult) {
        angular.module('e2e-mocks', ['ngMockE2E']).run(['$httpBackend', function($httpBackend) {

            $httpBackend.whenPOST(/^\/create_customer_mock(\?.*)*/).respond(function(method, url, data, reqHeaders) {
                return [200,customer];
            });

            $httpBackend.whenGET(/^\/get_customer_mock(\?.*)*/).respond(function(method, url, data, reqHeaders) {
                return [200,customer];
            });

            $httpBackend.whenPOST(/^\/create_customerAccount_mock(\?.*)*/).respond(function(method, url, data, reqHeaders) {
                return [200,account];
            });

            $httpBackend.whenGET(/^\/get_dashboard(\?.*)*/).respond(function(method, url, data, reqHeaders) {
                return [200,getDashboard];
            });

            $httpBackend.whenGET(/^\/get_search_contacts(\?.*)*/).respond(function(method, url, data, reqHeaders) {
                return [200,contactSearchResult];
            });

            $httpBackend.whenGET(/^\/get_sr_search(\?.*)*/).respond(function(method, url, data, reqHeaders) {
                return [200,srSearchResult];
            });
            //Don't mock these
            $httpBackend.whenGET(/^.*/).passThrough();
            $httpBackend.whenPOST(/^.*/).passThrough();
            $httpBackend.whenPUT(/^.*/).passThrough();
            $httpBackend.whenDELETE(/^.*/).passThrough();
            $httpBackend.whenPATCH(/^.*/).passThrough();
        
        }]);
    
    angular.module('ericssonApp').requires.push('e2e-mocks');
});
