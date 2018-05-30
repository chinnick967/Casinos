angular
    .module('app')
    .directive('addItem', function addItem(messageService) {
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
                <div class="new-item">
                    <span class="plus glyphicon glyphicon-plus" ng-click="changeDisplay()"></span>
                    <div class="plus-label">{{ $ctrl.type }}</div>
                </div>

                <div class="form-overlay" ng-class="{show : $ctrl.display == true}"></div>
                <div class="add-form col-sm-4" ng-class="{show : $ctrl.display == true}">
                    <div id="form-section-casinos" class="form-casinos form-section" ng-class="{show : $ctrl.type == 'casinos'}">
                        <h2>{{ $ctrl.type }}</h2>
                        <input ng-model="$ctrl.form.name" type="text" placeholder="Casino Name" maxlength="30" /><input ng-model="$ctrl.form.link" type="text" placeholder="Casino Link, use http link not www" />
                        <div class="input-container"><input data-model="thumbnail" type="file" id="casino-thumbnail" accept="image/*"><label for="casino-thumbnail">Thumbnail 170x120</label></div>
                        <div class="input-container"><input data-model="icon" type="file" id="casino-icon" accept="image/*"><label for="casino-icon">Icon 40x40</label></div>
                        <label class="switch">
                            <div class="switch-text">Mobile</div>
                            <input ng-model="$ctrl.form.mobile" type="checkbox">
                            <div class="slider"></div>
                        </label>
                    </div>
                    <div id="form-section-languages" class="form-casinos form-section" ng-class="{show : $ctrl.type == 'languages'}">
                        <h2>{{ $ctrl.type }}</h2>
                        <input ng-model="$ctrl.form.name" type="text" placeholder="Language Name" maxlength="30" /><input ng-model="$ctrl.form.acronym" type="text" placeholder="Acronym" maxlength="3" />
                    </div>
                    <div id="form-section-countries" class="form-casinos form-section" ng-class="{show : $ctrl.type == 'countries'}">
                        <h2>{{ $ctrl.type }}</h2>  
                        <input ng-model="$ctrl.form.name" type="text" placeholder="Country Name" maxlength="30" />
                        <div class="input-container"><input data-model="icon" type="file" id="country-icon" accept="image/*"><label for="casino-thumbnail">Icon 29 x 20</label></div>
                    </div>
                    <div id="form-section-software" class="form-casinos form-section" ng-class="{show : $ctrl.type == 'software'}">
                        <h2>{{ $ctrl.type }}</h2>  
                        <input ng-model="$ctrl.form.name" type="text" placeholder="Software Company Name" maxlength="30" />
                        <input ng-model="$ctrl.form.link" type="text" placeholder="Company Site Link" maxlength="30" placeholder="Use http link not www" />
                    </div>
                     <div id="form-section-licenses" class="form-casinos form-section" ng-class="{show : $ctrl.type == 'licenses'}">
                        <h2>{{ $ctrl.type }}</h2>  
                        <input ng-model="$ctrl.form.name" type="text" placeholder="Regulator's Name" maxlength="30" />
                        <input ng-model="$ctrl.form.link" type="text" placeholder="Regulator Link" maxlength="30" placeholder="Use http link not www" />
                    </div>
                    <div id="form-section-support" class="form-casinos form-section" ng-class="{show : $ctrl.type == 'support'}">
                        <h2>{{ $ctrl.type }}</h2>  
                        <input ng-model="$ctrl.form.name" type="text" placeholder="Support Type, ex: Email" maxlength="30" />
                    </div>
                    <div id="form-section-currency" class="form-casinos form-section" ng-class="{show : $ctrl.type == 'currency'}">
                        <h2>{{ $ctrl.type }}</h2>  
                        <input ng-model="$ctrl.form.name" type="text" placeholder="Currency Name" maxlength="30" />
                        <input ng-model="$ctrl.form.acronym" type="text" placeholder="Acronym" maxlength="3" />
                    </div>
                    <div id="form-section-payment" class="form-casinos form-section" ng-class="{show : $ctrl.type == 'payment'}">
                        <h2>{{ $ctrl.type }}</h2>  
                        <input ng-model="$ctrl.form.name" type="text" placeholder="Payment Type" maxlength="30" />
                    </div>
                    <div id="form-section-games" class="form-casinos form-section" ng-class="{show : $ctrl.type == 'games'}">
                        <h2>{{ $ctrl.type }}</h2>
                        <input ng-model="$ctrl.form.name" type="text" placeholder="Game Type Name" maxlength="30" />
                        <div class="input-container"><input data-model="icon" type="file" id="country-icon" accept="image/*"><label for="casino-thumbnail">Icon 50 x 50</label></div>
                    </div>
                    <div id="form-section-bonuses" class="form-casinos form-section" ng-class="{show : $ctrl.type == 'bonuses'}">
                        <h2>{{ $ctrl.type }}</h2>
                        <select name="casino" ng-model="$ctrl.form.casino">
                            <option ng-repeat="casino in $ctrl.data.casinos" value="{{casino.name}}">{{casino.name}}</option>
                        </select>
                        <select ng-model="$ctrl.form.type">
                            <option value="Welcome Bonus">Welcome Bonus</option>
                            <option value="Promotion Bonus">Promotion Bonus</option>
                            <option value="Sign-Up Bonus">Sign-Up Bonus</option>
                            <option value="Deposit Bonus">Deposit Bonus</option>
                            <option value="Free Spins">Free Spins</option>
                            <option value="Loyalty Bonus">Loyalty Bonus</option>
                            <option value="Referral Bonus">Referral Bonus</option>
                        </select>
                        <input ng-model="$ctrl.form.amount" type="text" placeholder="Amount From Bonus" maxlength="30" />
                        <input ng-model="$ctrl.form.code" type="text" placeholder="Bonus Code" maxlength="30" />
                        <input ng-model="$ctrl.form.description" type="text" placeholder="Short Description" style="width: 100%; left: 0px;" />
                        <input ng-model="$ctrl.form.link" type="text" placeholder="Web Link" maxlength="30" />
                    </div>
                    <div id="form-section-slots" class="form-casinos form-section" ng-class="{show : $ctrl.type == 'slots'}">
                        <h2>{{ $ctrl.type }}</h2>
                        <input ng-model="$ctrl.form.name" type="text" placeholder="Slot Game Name" maxlength="60" />
                        <input ng-model="$ctrl.form.iframe" type="text" placeholder="iFrame Link" />
                        <div class="input-container"><input data-model="thumbnail" type="file" id="country-icon" accept="image/*"><label for="casino-thumbnail">Thumbnail 240 x 160</label></div>
                        <span>Slot categories (hold ctrl to select multiple)</span>
                        <select ng-model="$ctrl.form.categories" style="margin-bottom: 35px;" multiple>
                            <option value="3D Slots">3D Slots</option>
                            <option value="Fruit Slots">Fruit Slots</option>
                            <option value="Jackpot Slots">Jackpot Slots</option>
                            <option value="Classic Slots">Classic Slots</option>
                            <option value="Video Slots">Video Slots</option>
                            <option value="Progressive Slots">Progressive Slots</option>
                            <option value="Themed Slots">Themed Slots</option>
                            <option value="Stacked Wilds">Stacked Wilds</option>
                            <option value="High Roller">High Roller</option>
                            <option value="Low Baller">Low Baller</option>
                        </select>
                        <label class="switch">
                            <div class="switch-text">Mobile</div>
                            <input ng-model="$ctrl.form.mobile" type="checkbox">
                            <div class="slider"></div>
                        </label>
                        <label class="switch" style="margin-top: 30px;">
                            <div class="switch-text">Free</div>
                            <input ng-model="$ctrl.form.free" type="checkbox">
                            <div class="slider"></div>
                        </label>
                        <span style="margin-top: 35px;">Hosting Casinos (hold ctrl to select multiple)</span>
                        <select ng-model="$ctrl.form.casinos" style="margin-bottom: 35px; height: 200px;" multiple>
                            <option ng-repeat="casino in $ctrl.data.casinos" value="{{ casino.name }}">{{ casino.name }}</option>
                        </select>
                    </div>
                    <div id="form-section-gamereviews" class="form-casinos form-section" ng-class="{show : $ctrl.type == 'game reviews'}">
                        <h2>{{ $ctrl.type }}</h2>
                        <input ng-model="$ctrl.form.name" type="text" placeholder="Game Name" maxlength="60" />
                        <div class="input-container"><input data-model="thumbnail" type="file" id="country-icon" accept="image/*"><label for="casino-thumbnail">Thumbnail 240 x 160</label></div>
                        <span>Game categories (hold ctrl to select multiple)</span>
                        <select ng-model="$ctrl.form.categories" style="margin-bottom: 35px;" multiple>
                            <option ng-repeat="game in $ctrl.data.games" value="{{ game.name }}">{{ game.name }}</option>
                        </select>
                        <label class="switch">
                            <div class="switch-text">Mobile</div>
                            <input ng-model="$ctrl.form.mobile" type="checkbox">
                            <div class="slider"></div>
                        </label>
                        <label class="switch" style="margin-top: 30px;">
                            <div class="switch-text">Free</div>
                            <input ng-model="$ctrl.form.free" type="checkbox">
                            <div class="slider"></div>
                        </label>
                        <span style="margin-top: 35px;">Hosting Casinos (hold ctrl to select multiple)</span>
                        <select ng-model="$ctrl.form.casinos" style="margin-bottom: 35px; height: 200px;" multiple>
                            <option ng-repeat="casino in $ctrl.data.casinos" value="{{ casino.name }}">{{ casino.name }}</option>
                        </select>
                    </div>
                    <div id="form-section-articles" class="form-casinos form-section" ng-class="{show : $ctrl.type == 'articles'}">
                        <h2>{{ $ctrl.type }}</h2>
                        <input ng-model="$ctrl.form.name" type="text" placeholder="Article Title" maxlength="60" />
                        <div class="input-container"><input data-model="thumbnail" type="file" id="casino-thumbnail" accept="image/*"><label for="casino-thumbnail">Thumbnail</label></div>
                    </div>
                    <div ng-click="changeDisplay()" class="form-cancel form-button">Cancel</div><div ng-click="submitItem()" class="form-save form-button">Save</div>
                </div>
            `,
            link: function($scope, $element) {
                // To add a section set the ng-show to the new type and change form section values
                $scope.$ctrl.container = "form-section-" + $scope.$ctrl.type.replace(/\s/g, '');
                
                $scope.submitItem = function() {
                    $scope.$ctrl.form.collection = $scope.$ctrl.type;
                    if ($scope.validateEntries()) {
                        $scope.addImages(function() {
                            $.post("/post-data", {item: $scope.$ctrl.form, collection: $scope.$ctrl.type}, function(res) {
                                if (res.status == true) {
                                    if ($scope.$ctrl.type == "casinos") {
                                        var baseUrl = location.href.split('/')[0];
                                        window.open(baseUrl + "/#!/casino/" + $scope.$ctrl.form.name,'_blank'); // New tab opened to new casino page
                                    }
                                    if ($scope.$ctrl.type == "articles") {
                                        var baseUrl = location.href.split('/')[0];
                                        window.open(baseUrl + "/#!/article/" + res.id,'_blank'); // New tab opened to new casino page
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