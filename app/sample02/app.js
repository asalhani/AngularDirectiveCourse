var app = angular.module('myApp', []);

app.controller('mainCtrl', function ($scope) {
    $scope.user1 = {
        name: 'adib salhani',
        address: {
            street: 'PO Box 123',
            city: 'Riyadh',
            planet: 'Olay Avenue Planet'
        },
        friends: [
            'han',
            'Leia',
            'Jhon'
        ]
    };
    $scope.user2 = {
        name: 'Han solo',
        address: {
            street: 'PO Box 123',
            city: 'Jeddah',
            planet: 'Tattonie'
        },
        friends: [
            'han',
            'Leia',
            'Chewbacca'
        ]
    };
    // console.log('Controller scope: ');
    // console.log($scope)

});

app.directive('userInfoCard', function () {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'userTemplate.html',
        //scope: false,  // --> create shared scope (default)
        //scope: true,   // --> create inherited scope.
        scope: {
            user: '=' // --> tells directive that (user) (object) should be passed from html
        },       // --> create isolated scope.
        controller: function ($scope) {
            $scope.knightMe = function (user) {
                user.rank = "knight";
            }
            // console.log('Directive scope:');
            // console.log($scope)
        }
    };
});

