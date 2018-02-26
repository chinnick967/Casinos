angular
    .module('app')
    .component('topCategories', {
        controller: function ($scope, $http, appData) {
            this.data = appData;

            this.highestRatingByCountry = function(country) {
                var casinos = [];
                var highestRated = false;
                this.data.casinos.forEach(function(casino) {
                    if (casino.countries) {
                        casino.countries.forEach(function(name) {
                            if (name == country) {
                                casinos.push(casino);
                            }
                        });
                    }
                });
                casinos.forEach(function(casino) {
                    if (!highestRated) {
                        highestRated = casino;
                    } else {
                        if (casino.rating) {
                            if (highestRated.rating < casino.rating) {
                                highestRated = casino;
                            }
                        }
                    }
                });
                console.log("HIGHEST RATED");
                console.log("Country: " + country);
                console.log(highestRated);
                return highestRated;
            }

            this.data.load(() => {
                this.usa = [this.highestRatingByCountry("United States")];
                this.uk = [this.highestRatingByCountry("United Kingdom")];
                this.sweden = [this.highestRatingByCountry("Sweden")];
                this.germany = [this.highestRatingByCountry("Germany")];
                this.japan = [this.highestRatingByCountry("Japan")];
                this.finland = [this.highestRatingByCountry("Finland")];
            });
        },
        scope: {},
        controllerAs: "$ctrl",
        template: ` 
            <edit style="top: 90px; left: -60px;" collection="html" name="topcategories">
                <textarea type="text" ng-model="$ctrl.form.text" placeholder="Heading <h1> || Sub-Heading <h2> || Paragraph <p> (or hit enter) || Bold Red <b> || Italicized <i> || Link <a href>"></textarea>
            </edit>                   
            <h2 class="section-title">Top Casinos By Country <a href="/toplists/casinos/ratings/countries/United_States/100/1" class="link"><span>View more</span><span class="glyphicon glyphicon-chevron-right"></span></a></h2>
            <p ng-bind-html="$ctrl.data.html['topcategories'].text" style="margin-bottom: 0;"></p>
            <div class="bonuses-container">
            <div ng-if="$ctrl.usa[0]" style="display: inline-block;">
                <h3><img style="width: 27px; height: 19px; margin-right: 10px; margin-top: -3px;" src="/assets/flags/us.svg" />United States</h3>
                <casino-listing != false" class="col-sm-12" ng-repeat="casino in $ctrl.usa"></casino-listing>
            </div>
            <div ng-if="$ctrl.uk[0]" style="display: inline-block;">
                <h3><img style="width: 27px; height: 19px; margin-right: 10px; margin-top: -3px;" src="/assets/flags/gb.svg" />United Kingdom</h3>
                <casino-listing class="col-sm-12" ng-repeat="casino in $ctrl.uk"></casino-listing>
            </div>
            <div ng-if="$ctrl.sweden[0]" style="display: inline-block;">
                <h3><img style="width: 27px; height: 19px; margin-right: 10px; margin-top: -3px;" src="/assets/flags/se.svg" />Sweden</h3>
                <casino-listing class="col-sm-12" ng-repeat="casino in $ctrl.sweden"></casino-listing>
            </div>
            <div ng-if="$ctrl.germany[0]" style="display: inline-block;">
                <h3><img style="width: 27px; height: 19px; margin-right: 10px; margin-top: -3px;" src="/assets/flags/de.svg" />Germany</h3>
                <casino-listing class="col-sm-12" ng-repeat="casino in $ctrl.germany"></casino-listing>
            </div>
            <div ng-if="$ctrl.japan[0]" style="display: inline-block;">
                <h3><img style="width: 27px; height: 19px; margin-right: 10px; margin-top: -3px;" src="/assets/flags/jp.svg" />Japan</h3>
                <casino-listing class="col-sm-12" ng-repeat="casino in $ctrl.japan"></casino-listing>
            </div>
            <div ng-if="$ctrl.finland[0]" style="display: inline-block;">
                <h3><img style="width: 27px; height: 19px; margin-right: 10px; margin-top: -3px;" src="/assets/flags/fi.svg" />Finland</h3>
                <casino-listing class="col-sm-12" ng-repeat="casino in $ctrl.finland"></casino-listing>
            </div>
            </div>
        `
    });