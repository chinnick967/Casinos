angular
    .module('app')
    .directive('tooltips', function() {
        return {
            controller: function ($scope, $element) {
                this.message = "";
                this.show = false;
                this.mouse = {};

                this.hover = function() {
                    this.show = true;
                }.bind(this);

                this.hoverOut = function() {

                }
            },
            transclude: true,
            scope: {},
            controllerAs: "$ctrl",
            template: `
                <div class="info" ng-mouseover="$ctrl.show = true" ng-mouseout="$ctrl.show = false">
                    ?
                    <div class="tooltip-message" ng-show="$ctrl.show"><ng-transclude></ng-transclude></div>
                </div>     
            `,
            link: function($scope, $element) {

                /*$(document).mousemove(function(event){
                    $scope.$ctrl.mouse.x = event.pageX;
                    $scope.$ctrl.mouse.y = event.pagey;
                    //console.log($element[0].childNodes[1]);
                });*/

            }
        };
    });