
//File: app.js
//Author: Dipen Shah
//Description: This script contains javascript code to register application module and to handle various paths of the web app.


/// <reference path="../lib/angular.js" />
$home = "";
var app = angular.module('portfolioApp', ['ngRoute'])
            .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
                $routeProvider.when('/dshah55/home', {
                    templateUrl: 'partials/home.html',
                    $home:'home'
                }).when('/dshah55/about', {
                    templateUrl: 'partials/about.html'
                }).when('/dshah55/contact', {
                    templateUrl: 'partials/contact.html',
                    controller: 'ContactController'
                }).when('/dshah55/projects', {
                    templateUrl: 'partials/projects.html'
                }).when('/dshah55/services', {
                    templateUrl: 'partials/services.html'
                })
                .when('/dshah55/termsOfUse', {
                    templateUrl: 'partials/terms.html'
                })
                .when('/dshah55/privacyPolicy', {
                    templateUrl: 'partials/privacy.html'
                })
                .when('/dshah55/sitemap', {
                    templateUrl: 'partials/sitemap.html'
                })
                .otherwise({ redirectTo: '/dshah55/home' });

                $locationProvider.html5Mode({ enabled: true, requireBase: false });
            }]);