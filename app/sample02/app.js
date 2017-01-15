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


});

app.directive('userInfoCard', function () {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'userTemplate.html',
        //scope: false,  // --> create shared scope (default)
        //scope: true,   // --> create inherited scope.
        scope: {         // --> create isolated scope.
            user: '=', // --> tells directive that (user) (object) should be passed from html
            initilaCollapsed: '@collapsed', // angular will deal with this value as string. So we have to convert
            // the value to a boolean on (collapsedState)
        },

        controller: function ($scope) {

            $scope.collapsed = ($scope.initilaCollapsed === 'true');

            $scope.knightMe = function (user) {
                user.rank = "knight";
            };

            $scope.collapse = function () {
                $scope.collapsed = !$scope.collapsed;
            };

            $scope.removeFriend = function (friend) {
                var idx = $scope.user.friends.indexOf(friend);
                if (idx > -1) {
                    $scope.user.friends.splice(idx, 1);
                }
            };
        }
    };
});

app.directive('removeFriend', function () {
    return {
        restrict: 'E',
        templateUrl: 'removeFriend.html',
        scope:{
              notifyParent: '&method'
        },
        controller: function ($scope) {
            $scope.removing = false;

            $scope.startRemove = function () {
                $scope.removing = true;
            };

            $scope.cancelRemove = function () {
                $scope.removing = false;
            };

            $scope.confirmRemove = function(){
                $scope.notifyParent();
            }
        }
    }
});

app.directive('address', function () {
    return {
        restrict: 'E',
        templateUrl: 'address.html',
        scope: true,
        controller: function ($scope) {
            $scope.collapsed = false;
            $scope.expandAddress = function () {
                $scope.collapsed = false;
            };

            $scope.collapseAddress = function () {
                $scope.collapsed = true;
            };
        }
    };
});

