﻿/// <reference path="../lib/angular.js" />
$home = "";
var app = angular.module('portfolioApp', ['ngRoute'])
            .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
                $routeProvider.when('/', {
                    templateUrl: '/partials/home.html',
                    $home:'home'
                }).when('/about', {
                    templateUrl: '/partials/about.html'
                }).when('/contact', {
                    templateUrl: '/partials/contact.html',
                    controller: 'ContactController'
                }).when('/projects', {
                    templateUrl: '/partials/projects.html'
                }).when('/services', {
                    templateUrl: '/partials/services.html'
                })
                .when('/termsOfUse', {
                    templateUrl: '/partials/terms.html'
                })
                .when('/privacyPolicy', {
                    templateUrl: '/partials/privacy.html'
                })
                .when('/sitemap', {
                    templateUrl: '/partials/sitemap.html'
                })
                .otherwise({ redirectTo: '/' });

                $locationProvider.html5Mode({ enabled: true, requireBase: false });
            }]);