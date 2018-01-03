angular
.module('app')
.directive('adminControls', function(messageService) {
    return {
        controller: function ($scope, $http, $routeParams, $element, appData, loginService, $location) {
            this.url = $location.url();
            $scope.url = this.url;
            this.data = appData;
            this.login = loginService;
            this.title = "";
            this.name = "";
            this.user = this.login.user.username;

            this.panelState = function() {
                var element = $element[0];
                element.querySelector('.wrap').classList.toggle("open");
            }

            this.globalCss = function() {
                var element = $element[0];
                if (this.name == "") {
                    this.name = "Global CSS";
                    this.title = "Global CSS";
                } else {
                    this.name = "";
                    this.title = "";
                }
                element.querySelector('#css-textarea').value = this.data["Global CSS"][0].styles;
                this.panelState();
                $scope.$apply();
            }

            this.localCss = function() {
                var element = $element[0];
                if (this.name == "") {
                    this.name = this.url;
                    this.title = "Page CSS";
                } else {
                    this.name = "";
                    this.title = "";
                }
                element.querySelector('#css-textarea').value = this.getLocalCss();
                this.panelState();
                $scope.$apply();
            }

            this.header = function() {
                var element = $element[0];
                if (this.name == "") {
                    this.name = this.url;
                    this.title = "Header";
                } else {
                    this.name = "";
                    this.title = "";
                }
                element.querySelector('#css-textarea').value = this.getHeader();
                this.panelState();
                $scope.$apply();
            }

            this.getHeader = function() {
                var array = this.data["Header"];
                for (var i = 0; i < array.length; i++) {
                    if (array[i].name == this.url) {
                        return array[i].styles;
                    }
                }
                return "";
            }

            this.getLocalCss = function() {
                var array = this.data["Page CSS"];
                for (var i = 0; i < array.length; i++) {
                    if (array[i].name == this.url) {
                        return array[i].styles;
                    }
                }
                return "";
            }
        },
        transclude: true,
        controllerAs: "$ctrl",
        scope: {},
        restrict: 'E',
        template: `
            <div class="wrap" ng-if="$ctrl.user == 'admin'">
                <edit ng-if="$ctrl.title == ''" style="position: relative; display: inline-block; vertical-align: top; margin-right: 40px;" collection="Header" name="{{$ctrl.url}}">
                    <h2>Page Head Info</h2>
                    <input ng-model="$ctrl.form.title" type="text" placeholder="Page Title" style="width: 60%" />
                    <input ng-model="$ctrl.form.keywords" type="text" placeholder="Meta Keywords" style="width: 80%" />
                    <input ng-model="$ctrl.form.description" type="text" placeholder="Meta Description" style="width: 80%" />
                    <select ng-model="$ctrl.form.indexing">
                        <option VALUE="">NONE</option>
                        <option VALUE="NOINDEX, FOLLOW">NOINDEX, FOLLOW</option>
                        <option VALUE="INDEX, NOFOLLOW">INDEX, NOFOLLOW</option>
                        <option VALUE="NOINDEX, NOFOLLOW">NOINDEX, NOFOLLOW</option>
                    </select>
                </edit>
                <button ng-if="$ctrl.title == 'Global CSS' || $ctrl.title == ''" class="globalcss" ng-click="$ctrl.globalCss()"><span class="glyphicon glyphicon-tags"></span></button>
                <button ng-if="$ctrl.title == 'Page CSS' || $ctrl.title == ''" class="localcss" ng-click="$ctrl.localCss()"><span class="glyphicon glyphicon-tag"></span></button>
                <ng-transclude ng-if="$ctrl.title == ''"></ng-transclude>

                <div class="control-form">
                    <h2>{{$ctrl.title}}</h2>
                    <textarea id="css-textarea"></textarea>
                    <div class="save-btn" ng-click="save()">Save</div>
                </div>
            </div>
            <style>
                {{ $ctrl.getLocalCss(); }}
            </style>
        `,
        link: function($scope, $element, $attr, $ctrl, $location) {
            $scope.save = function() {
                var element = $element[0];
                var item = {
                    styles: element.querySelector('#css-textarea').value
                }  
                $.post("/update-data", {item: item, collection: $scope.$ctrl.title, name: $scope.$ctrl.name}, function(res) {
                    if (res.status == true) {
                        messageService.message("Updated");
                        $scope.$ctrl.name = "";
                        $scope.$ctrl.title = "";
                        $scope.$ctrl.panelState();
                    } else {
                        messageService.message(res.message);
                        //$scope.$apply();
                    }
                });
            }
        }
    }
});