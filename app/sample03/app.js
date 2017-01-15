var app = angular.module('myApp', []);

app.controller('mainCtrl', function ($scope) {
    $scope.handlePause = function () {
        console.log("video paused...");
    }
});

app.directive('eventPause', function () {
    return {
        restrict: 'A',
        scope: {
            eventPause: '&'
        },
        link:function(scope, el, attrs){
            el.on('pause', function(event){
                scope.$apply(function(){
                   scope.eventPause();
                });
            });
        }
    };
});

app.directive('spacebarSupport', function () {
    return {
        restrict: 'A',
        link: function (scope, el, attrs) {
            $('body').on('keypress', function (evt) {
                var vidEl = el[0];
                if (evt.keyCode === 32) {
                    if (vidEl.paused) {
                        vidEl.play();
                    } else {
                        vidEl.pause();
                    }
                }
            })
        }
    };
});

