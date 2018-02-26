angular
    .module('app')
    .directive('addBonus', function addItem(messageService) {
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
                <div class="bonus">Bonus</div>
            `,
            link: function($scope, $element) {
                // To add a section set the ng-show to the new type and change form section values
                $scope.$ctrl.container = "form-section-" + $scope.$ctrl.type;
                
                $scope.submitItem = function() {
                    $scope.$ctrl.form.collection = $scope.$ctrl.type;
                    if ($scope.validateEntries()) {
                        $scope.addImages(function() {
                            $.post("/post-data", {item: $scope.$ctrl.form}, function(res) {
                                if (res.status == true) {
                                    $scope.clearFields();
                                    $scope.changeDisplay();
                                } else {
                                    messageService.message(res.message);
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
                    var images = $element[0].querySelectorAll("#" + $scope.$ctrl.container)[0].querySelectorAll("input[type=file]");
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

                $scope.validateEntries = function() {
                    var fields = $element[0].querySelectorAll("#" + $scope.$ctrl.container)[0].querySelectorAll("input");
                    var flag = true;
                    fields.forEach(function(field) {
                        if ($(field).val() == "") {
                            flag = false;
                        }
                    });
                    
                    return flag;
                }

                $scope.clearFields = function() {
                    var fields = $element[0].querySelectorAll("#" + $scope.$ctrl.container)[0].querySelectorAll("input");
                    fields.forEach(function(field) {
                        field.value = "";
                    });
                }

            }
        };
    });