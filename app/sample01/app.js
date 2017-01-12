var app = angular.module('myApp', []);

app.controller('mainCtrl', function ($scope) {
    $scope.user = {
        name: 'adib salhani',
        address: {
            street:'PO Box 123',
            city: 'Riyadh',
            planet: 'Olay Avenue Planet'
        },
        friends:[
            'han',
            'Leia',
            'Jhon'
        ]
    };
});

app.directive('userInfoCard', function () {
    return {
        restrict: 'E',
        replace: true,
        templateUrl:'userTemplate.html'
    };
});

