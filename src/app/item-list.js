angular
    .module('app')
    .directive('itemList', function itemList() {
        return {
            /*controller: function ($scope, $http, appData, $routeParams, $element) {
               this.data = appdata;
            },*/
            controllerAs: "$ctrl",
            scope: {
                filter: "="  ,
                value: "=",
                limit: "=",
                collection: "=",
                sort: "=",
                pagestart: "=" 
            },
            bindToController: true,
            transclude: true,
            template: `
                <ng-transclude></ng-transclude>
                <div class="bonuses-container">
                    <casino-listing ng-if="$ctrl.collection == 'casinos'" class="col-sm-12" ng-class="{ranking : $ctrl.sort == 'rating'}" ng-repeat="casino in $ctrl.casinos | limitTo: $ctrl.limit track by $index" casino="{{ casino }}"></casino-listing>
                    <bonus-listing ng-if="$ctrl.collection == 'bonuses'" class="col-sm-12" ng-class="{ranking : $ctrl.sort == 'rating'}" ng-repeat="bonus in $ctrl.bonuses | limitTo: $ctrl.limit track by $index" casino="{{ casino }}"></bonus-listing>
                </div>
            `,
            restrict: 'E',
            controller: function($scope, appData, $routeParams) {
                this.data = appData;
                this.casinos = [];
                /*if (this.data.casinos != undefined) {
                    this.data.casinos.forEach(function(casino) {
                        bonuses = this.addBonuses(casino.name);
                        casino.bonuses = this.filterItems(bonuses);
                        this.casinos.push(casino);
                    }.bind(this));
                    this.casinos = this.sortList(this.casinos);
                    this.casinos = this.filterItems(this.casinos);
                }

                window.addEventListener('data-loaded', function() {
                    this.data.casinos.forEach(function(casino) {
                        bonuses = this.addBonuses(casino.name);
                        casino.bonuses = this.filterItems(bonuses);
                        this.casinos.push(casino);
                    }.bind(this));
                    this.casinos = this.sortList(this.casinos);
                    this.casinos = this.filterItems(this.casinos);
                    console.log(this);
                    $scope.$apply();
                }.bind(this));*/

                this.filterItems = function(array) {
                    if (this.filter != "all") {
                        return array.filter(function(casino) {
                            var item = casino[this.filter];
                            if (Array.isArray(item)) {
                                for (var x = 0; x < item.length; x++) {
                                    if (item[x] == this.value) {
                                        return true;
                                    }
                                }
                                return false;
                            } else {
                                return item == this.value;
                            }
                        }.bind(this));
                    } else {
                        return array;
                    }
                }

                this.addBonuses = function(casino) {
                    return this.data.bonuses.filter(function(bonus) {
                        return bonus.casino == casino;
                    });
                }

                this.sortList = function(array) {
                    if (this.sort == "ratings") {
                        return array.sort(function(a, b) {
                            a.trustRating = parseInt(a.trustRating) || 0;
                            a.supportRating = parseInt(a.supportRating) || 0;
                            a.qualityRating = parseInt(a.qualityRating) || 0;
                            a.promoRating = parseInt(a.promoRating) || 0;

                            b.trustRating = parseInt(b.trustRating) || 0;
                            b.supportRating = parseInt(b.supportRating) || 0;
                            b.qualityRating = parseInt(b.qualityRating) || 0;
                            b.promoRating = parseInt(b.promoRating) || 0;

                            a.rating = (a.trustRating + a.supportRating + a.qualityRating + a.promoRating) / 4;
                            b.rating = (b.trustRating + b.supportRating + b.qualityRating + b.promoRating) / 4;

                            return b.rating - a.rating;
                        });
                    } else {
                        return array;
                    }
                }

                this.getParams = function() {
                    if (this.collection == undefined) {
                        this.collection = $routeParams["collection"];
                    }
                    if (this.sort == undefined) {
                        this.sort = $routeParams["sort"];
                    }
                    if (this.filter == undefined) {
                        this.filter = $routeParams["filter"];
                    }
                    if (this.value == undefined) {
                        this.value = $routeParams["value"];
                    }
                    if (this.limit == undefined) {
                        this.limit = $routeParams["limit"];
                    }
                    if (this.pagestart == undefined) {
                        this.pagestart = $routeParams["pagestart"];
                    }
                }

                this.filterBonuses = function(array) {
                    if (this.filter != "all") {
                        return array.filter(function(bonus) {
                            if (this.filter == "mobile") {
                                return this.findCasino(bonus.casino).mobile;
                            } else {
                                var item = bonus[this.filter];
                                if (Array.isArray(item)) {
                                    for (var x = 0; x < item.length; x++) {
                                        if (item[x] == this.value) {
                                            return true;
                                        }
                                    }
                                    return false;
                                } else {
                                    return item == this.value;
                                }
                            }
                        }.bind(this));
                    } else {
                        return array;
                    }
                }

                this.filterNoCasinos = function(array) {
                    var newarray = [];
                    for (var x = 0; x < array.length; x++) {
                        if (this.findCasino(array[x].name) != false) {
                            newarray.push(array[x]);
                        }
                    }
                    return newarray;
                }

                this.sortBonuses = function(array) {
                    if (this.sort == "ratings") {
                        return x = array.sort(function(a, b) {
                            a.trustRating = parseInt(this.findCasino(a.casino).trustRating) || 0;
                            a.supportRating = parseInt(this.findCasino(a.casino).supportRating) || 0;
                            a.qualityRating = parseInt(this.findCasino(a.casino).qualityRating) || 0;
                            a.promoRating = parseInt(this.findCasino(a.casino).promoRating) || 0;

                            b.trustRating = parseInt(this.findCasino(b.casino).trustRating) || 0;
                            b.supportRating = parseInt(this.findCasino(b.casino).supportRating) || 0;
                            b.qualityRating = parseInt(this.findCasino(b.casino).qualityRating) || 0;
                            b.promoRating = parseInt(this.findCasino(b.casino).promoRating) || 0;

                            a.rating = (a.trustRating + a.supportRating + a.qualityRating + a.promoRating) / 4;
                            b.rating = (b.trustRating + b.supportRating + b.qualityRating + b.promoRating) / 4;

                            return b.rating - a.rating;
                        }.bind(this));
                    } else {
                        return array;
                    }
                }

                this.findCasino = function(name) {
                    for (var x = 0; x < this.data.casinos.length; x++) {
                        if (this.data.casinos[x].name == name) {
                            return this.data.casinos[x];
                        }
                    }
                    return false;
                }

                this.loadList = function() {
                    this.getParams();
                    if (this.collection == "casinos") {
                        this.data.casinos.forEach(function(casino) {
                            var bonuses = this.addBonuses(casino.name);
                            casino.bonuses = this.filterItems(bonuses);
                            this.casinos.push(casino);
                        }.bind(this));
                        console.log("TEST");
                        console.log(this.casinos);
                        this.casinos = this.sortList(this.casinos);
                        this.casinos = this.filterItems(this.casinos);

                    } else if (this.collection == "bonuses") {
                        this.bonuses = [];
                        this.data.bonuses.forEach(function(bonus) {
                            this.bonuses.push(bonus);
                        }.bind(this));
                        this.bonuses = this.filterBonuses(this.bonuses);
                        this.bonuses = this.sortBonuses(this.bonuses);
                    }
                }

                this.data.load(function() {
                    this.loadList();
                }.bind(this));

            }
        };
    });
