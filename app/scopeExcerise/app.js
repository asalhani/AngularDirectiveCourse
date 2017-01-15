var app = angular.module('myApp', []);

app.controller('mainCtrl', function($scope){
    $scope.foo = '';
    $scope.updateFoo = function (newFoo) {
        $scope.foo = newFoo;
    }
});

app.directive('testDire', function (){
    return{
        restrict: 'E',
        templateUrl: 'template.html',
        scope:{
            simpleValue:'@',
            complexValue:'=',
            updateParentFoo: '&'
        },
        controller: function($scope){
            //$scope.newFoo = $scope.complexValue
        }
    };
});