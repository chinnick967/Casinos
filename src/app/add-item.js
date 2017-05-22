angular
    .module('app')
    .directive('addItem', function addItem(messageService) {
        return {
            controller: function ($attrs, $scope) {
                this.type = $attrs.type;
                this.form = {};
                this.display = false;
            },
            scope: {
                type: "@?",
                form: "="
            },
            controllerAs: "$ctrl",
            restrict: "E",
            template: `               
                <div class="new-item col-sm-3">
                    <span class="plus glyphicon glyphicon-plus" ng-click="changeDisplay()"></span>
                    <div class="plus-label">{{ $ctrl.type }}</div>
                </div>

                <div class="form-overlay" ng-class="{show : $ctrl.display == true}"></div>
                <div class="add-form col-sm-4" ng-class="{show : $ctrl.display == true}">
                    <div ing-attr-id="{{ 'form-section-' + $ctrl.type }}" class="form-casinos form-section" ng-class="{show : $ctrl.type == 'casinos'}">
                        <h2>{{ $ctrl.type }}</h2>
                        <input ng-model="$ctrl.form.name" type="text" placeholder="Casino Name" maxlength="30" /><input ng-model="$ctrl.form.link" type="text" placeholder="Casino Link, www.site.com" />
                        <div class="input-container"><input data-model="thumbnail" type="file" id="casino-thumbnail" accept="image/*"><label for="casino-thumbnail">Thumbnail 170x120</label></div>
                        <div class="input-container"><input data-model="icon" type="file" id="casino-icon" accept="image/*"><label for="casino-icon">Icon 40x40</label></div>
                    </div>
                    <div ng-attr-id="{{ 'form-section-' + $ctrl.type }}" class="form-casinos form-section" ng-class="{show : $ctrl.type == 'languages'}">
                        <h2>{{ $ctrl.type }}</h2>
                        <input ng-model="$ctrl.form.name" type="text" placeholder="Language Name" maxlength="30" /><input ng-model="$ctrl.form.link" type="text" placeholder="Acronym" maxlength="3" />
                    </div>
                    <div ng-attr-id="{{ 'form-section-' + $ctrl.type }}" class="form-casinos form-section" ng-class="{show : $ctrl.type == 'countries'}">
                        <h2>{{ $ctrl.type }}</h2>  
                        <input ng-model="$ctrl.form.name" type="text" placeholder="Country Name" maxlength="30" />
                        <div class="input-container"><input data-model="icon" type="file" id="country-icon" accept="image/*"><label for="casino-thumbnail">Icon 29 x 20</label></div>
                    </div>
                    <div ng-attr-id="{{ 'form-section-' + $ctrl.type }}" class="form-casinos form-section" ng-class="{show : $ctrl.type == 'software'}">
                        <h2>{{ $ctrl.type }}</h2>  
                        <input ng-model="$ctrl.form.name" type="text" placeholder="Software Company Name" maxlength="30" />
                        <input ng-model="$ctrl.form.name" type="text" placeholder="Company Site Link" maxlength="30" />
                    </div>
                     <div ng-attr-id="{{ 'form-section-' + $ctrl.type }}" class="form-casinos form-section" ng-class="{show : $ctrl.type == 'licenses'}">
                        <h2>{{ $ctrl.type }}</h2>  
                        <input ng-model="$ctrl.form.name" type="text" placeholder="Regulator's Name" maxlength="30" />
                        <input ng-model="$ctrl.form.name" type="text" placeholder="Regulator Link" maxlength="30" />
                    </div>
                    <div ng-attr-id="{{ 'form-section-' + $ctrl.type }}" class="form-casinos form-section" ng-class="{show : $ctrl.type == 'support'}">
                        <h2>{{ $ctrl.type }}</h2>  
                        <input ng-model="$ctrl.form.name" type="text" placeholder="Support Type, ex: Email" maxlength="30" />
                    </div>
                    <div ng-attr-id="{{ 'form-section-' + $ctrl.type }}" class="form-casinos form-section" ng-class="{show : $ctrl.type == 'currency'}">
                        <h2>{{ $ctrl.type }}</h2>  
                        <input ng-model="$ctrl.form.name" type="text" placeholder="Currency Name" maxlength="30" />
                        <input ng-model="$ctrl.form.link" type="text" placeholder="Acronym" maxlength="3" />
                    </div>
                    <div ng-attr-id="{{ 'form-section-' + $ctrl.type }}" class="form-casinos form-section" ng-class="{show : $ctrl.type == 'payment'}">
                        <h2>{{ $ctrl.type }}</h2>  
                        <input ng-model="$ctrl.form.name" type="text" placeholder="Payment Type" maxlength="30" />
                    </div>
                    <div ng-click="changeDisplay()" class="form-cancel form-button">Cancel</div><div ng-click="submitItem()" class="form-save form-button">Save</div>
                </div>
            `,
            link: function($scope, $element) {
                // To add a section set the ng-show to the new type and change form section values
                $scope.$ctrl.container = "form-section-" + $scope.$ctrl.type;

                $scope.submitItem = function() {
                    $scope.$ctrl.form.collection = $scope.$ctrl.type;
                    if ($scope.validateEntries()) {
                        $scope.addImages(function() {
                            $.post("/post-data", {item: $scope.$ctrl.form}, function(res) {
                                console.log('test');
                                if (res.status == true) {
                                    console.log('true');
                                    $scope.clearFields();
                                    $scope.changeDisplay();
                                    $scope.$apply();
                                } else {
                                    messageService.message(res.message);
                                    $scope.$apply();
                                }
                            });
                        });
                    } else {
                        console.log("failed");
                    }
                }

                $scope.changeDisplay = function() {
                    $scope.$ctrl.display = $scope.$ctrl.display == true ? false : true;
                }

                $scope.addImages = function(callback) {
                    var images = document.getElementById($scope.$ctrl.container).querySelectorAll("input[type=file]");
                    console.log(document.getElementById($scope.$ctrl.container));
                    var reader = new FileReader();
                    var counter = 0;

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
        
                }

                $scope.validateEntries = function() {
                    var fields = document.getElementById($scope.$ctrl.container).querySelectorAll("input");
                    var flag = true;
                    fields.forEach(function(field) {
                        if (field.value == "") {
                            flag = false;
                        }
                    });

                    return flag;
                }

                $scope.clearFields = function() {
                    var fields = document.getElementById($scope.$ctrl.container).querySelectorAll("input");
                    fields.forEach(function(field) {
                        field.value = "";
                    });
                }

            }
        };
    });