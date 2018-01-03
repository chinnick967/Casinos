angular
    .module('app')
    .directive('edit', function(messageService) {
        return {
            controller: function ($scope, $http, $routeParams, appData, loginService) {
                this.data = appData;
                this.login = loginService;
                // Current page casino is this.data.casino;
                //setTimeout(function(){console.log(this.data)}.bind(this), 3000);
                this.form = {};
            },
            transclude: true,
            controllerAs: "$ctrl",
            scope: {},
            restrict: 'E',
            template: `
                <div class="edit-wrapper" ng-show="$ctrl.login.user.username == 'admin'">
                    <span class="glyphicon glyphicon-pencil edit" ng-click="changeDisplay()"></span>
                    <div class="form-overlay" ng-class="{show : $ctrl.display == true}"></div>
                    <div class="add-form col-sm-4" ng-class="{show : $ctrl.display == true}">
                        <div class="transclude-container"></div>
                        <div class="form-cancel form-button" ng-click="changeDisplay()">Cancel</div><div class="form-save form-button" ng-click="updateItem()">Save</div>
                    </div>
                </div>
            `,
            link: function($scope, $element, $attr, $ctrl, $transclude) {
                $scope.$ctrl.container = $element[0].getElementsByClassName('transclude-container')[0];
                $scope.$ctrl.collection = $element[0].attributes['collection'].value;

                $transclude($scope, function(clone, $scope) {
                    for (var i = 0; i < clone.length; i++) {
                        $element[0].getElementsByClassName("transclude-container")[0].append(clone[i]);
                    }
                });

                $scope.updateItem = function() {    
                    var fields = $scope.$ctrl.container.querySelectorAll("input[type=text], textarea");
                    var name = ($element[0].attributes.name === undefined) ? $scope.$ctrl.data.casino.name : $element[0].attributes.name.value;
                    if ($scope.validateEntries()) {
                        $scope.addImages(function() {
                            var item = $scope.removeEmptyValues($scope.$ctrl.form);
                            $.post("/update-data", {item: item, collection: $scope.$ctrl.collection, name: name}, function(res) {
                                if (res.status == true) {
                                    $scope.clearFields();
                                    $scope.changeDisplay();
                                    messageService.message("Updated");
                                    $scope.$ctrl.data.getData($scope.$ctrl.collection, function() {
                                        //$scope.$apply();
                                    });
                                } else {
                                    messageService.message(res.message);
                                    //$scope.$apply();
                                }
                            });
                        });
                    } else {
                        
                    }
                }

                $scope.changeDisplay = function() {
                    $scope.$ctrl.display = $scope.$ctrl.display == true ? false : true;
                    $scope.$ctrl.data.animations.stop = $scope.$ctrl.data.animations.stop == true ? false : true;
                }

                $scope.addImages = function(callback) {
                    var images = $scope.$ctrl.container.querySelectorAll("input[type=file]");
                    images = $scope.removeBlankImages(images);
                    var reader = new FileReader();
                    var counter = 0;

                    if (images.length > 0) {

                        reader.onload = function() {
                            $scope.$ctrl.form[images[counter].getAttribute("data-model")] = reader.result;

                            counter++;

                            if (counter < images.length) {
                                reader.readAsDataURL(images[counter].files[0]);
                            } else {
                                callback();
                            }
                        };

                        reader.readAsDataURL(images[counter].files[0]);
                        
                    } else {
                        callback();
                    }
        
                }

                $scope.removeBlankImages = function(array) {
                    var newarray = [];
                    array.forEach(function(element) {
                        if (element.value != "") {
                            newarray.push(element);
                        }
                    });
                    return newarray;
                }

                $scope.removeEmptyValues = function(form) {
                    var newobject = {};
                    for (var key in form) {
                        if (form.hasOwnProperty(key)) {
                            if (form[key] != "") {
                                newobject[key] = form[key];
                            }
                        }
                    }
                    return newobject;
                }

                $scope.validateEntries = function() {
                    var fields = $scope.$ctrl.container.querySelectorAll("input, textarea");
                    var flag = true;
                    fields.forEach(function(field) {
                        if (field.value == "") {
                            flag = false;
                        }
                    });

                    return true; // return flag if you want this to work, set to always return true
                }

                $scope.clearFields = function() {
                    var fields = $scope.$ctrl.container.querySelectorAll("input, textarea");
                    fields.forEach(function(field) {
                        field.value = "";
                    });
                }
            }
        }
    });