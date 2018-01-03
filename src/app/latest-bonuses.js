angular
    .module('app')
    .component('latestBonuses', {
        controller: function ($scope, $http, appData, userService) {
            this.data = appData;
            this.bonuses = undefined;
            this.userService = userService;

            this.data.load(function() {
                var bonuses = this.data.bonuses;
                if (this.data.casino != undefined) {
                    this.bonuses = bonuses.filter(function(bonus) {
                        return bonus.casino == this.data.casino;
                    }.bind(this));
                } else {
                    this.bonuses = bonuses;
                }
                this.bonuses.reverse();
            }.bind(this));

            /*window.addEventListener('data-loaded', function() {
                var bonuses = this.data.bonuses;
                if (this.data.casino != undefined) {
                    this.bonuses = bonuses.filter(function(bonus) {
                        return bonus.casino == this.data.casino;
                    }.bind(this));
                } else {
                    this.bonuses = bonuses;
                }
                this.bonuses.reverse();
            }.bind(this));*/

            this.findCasino = function(name) {
                var casino = this.data.casinos.filter(function(cas) {
                    return cas["name"] = name;
                });
                return casino[0];
            }

            this.findSoftware = function(name) {
                var software = this.data.software.filter(function(cas) {
                    return cas["name"] = name;
                });
                return software[0];
            }
        },
        controllerAs: "$ctrl",
        template: `
            <div style="position: relative;" ng-if="$ctrl.bonuses.length > 0">
                 <edit style="top: 90px; left: -60px;" collection="html" name="latestbonuses">
                    <textarea type="text" ng-model="$ctrl.form.text" placeholder="Heading <h1> || Sub-Heading <h2> || Paragraph <p> (or hit enter) || Bold Red <b> || Italicized <i> || Link <a href>"></textarea>
                </edit>             
                <h2 class="section-title">Latest Bonuses <a class="link" ng-click="$ctrl.userService.betaFeature()"><span>View more</span><span class="glyphicon glyphicon-chevron-right"></span></a></h2>
                <p ng-bind-html="$ctrl.data.html['latestbonuses'].text"></p>
                <div class="bonuses-container">
                        <bonus-listing class="col-sm-12" ng-repeat="bonus in $ctrl.bonuses | limitTo:6" bonus="{{ bonus }}"></bonus-listing>
                </div>
            </div>
        `
    });