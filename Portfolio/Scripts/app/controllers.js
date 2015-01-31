/// <reference path="../lib/angular.min.js" />

var app = angular.module('portfolioApp');

app.controller('ContactController', ['$scope','$http', function ($scope, $http) {
    $scope.SendMessage = $http.post(
        '/Server_Code/ContactService.asmx/SaveContact', 
            {
            emailId: $scope.emailId,
            message: $scope.message
            }
    ).success(function (data, status, header, config) {
        alert(data);
        alert('Your message sent successfully!');
    })
    .error(function (data, status, header, config) {
        alert('Sorry! Unable to send message, please try again.');
    });

}]);