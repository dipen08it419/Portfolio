﻿/// <reference path="../lib/angular.min.js" />

var app = angular.module('portfolioApp');

app.controller('ContactController', ['$scope','$http', function ($scope, $http) {
    $scope.SendMessage = function () {
        if ($scope.emailId && $scope.message) {
            $http.post(
                '/AppCode/ContactService.asmx/SaveContact',
                    {
                        emailId: $scope.emailId,
                        message: $scope.message
                    }
            ).success(function (data, status, header, config) {
                alert('Your message sent successfully!');

                $scope.contactForm.$setPristine();
                $scope.emailId = "";
                $scope.message = "";
            })
            .error(function (data, status, header, config) {
                alert('Sorry! Unable to send message, please try again.');
            });
        } else {
            alert('Please fill up the form.');
        }
    }
}])
.controller('NavigationController', ['$scope','$location',function ($scope, $location) {
    $scope.isActive = function (path) {
        return path === $location.path();
    }
}]);