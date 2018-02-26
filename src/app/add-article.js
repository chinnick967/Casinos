angular
.module('app')
.directive('addArticle', function addItem(messageService) {
    return {
        controller: function ($attrs, $scope, appData) {
            this.type = $attrs.type;
            this.form = {};
            this.display = false;
            this.data = appData;
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
                <div class="plus-label">Articles</div>
            </div>
        `,
        link: function($scope, $element) {
            // To add a section set the ng-show to the new type and change form section values
            $scope.$ctrl.container = "form-section-" + $scope.$ctrl.type.replace(/\s/g, '');
            
            $scope.submitItem = function() {
                $scope.$ctrl.form.collection = $scope.$ctrl.type;
                if ($scope.validateEntries()) {
                    $scope.addImages(function() {
                        $.post("/post-data", {item: $scope.$ctrl.form}, function(res) {
                            if (res.status == true) {
                                if ($scope.$ctrl.type == "casinos") {
                                    var baseUrl = location.href.split('/')[0];
                                    window.open(baseUrl + "/#!/casino/" + $scope.$ctrl.form.name,'_blank'); // New tab opened to new casino page
                                }
                                messageService.message(res.message);
                                $scope.clearFields();
                                $scope.changeDisplay();
                            } else {
                                messageService.message(res.message);
                            }
                        });
                    });
                } else {
                    messageService.message("Please fill in each field");
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