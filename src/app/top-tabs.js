angular
    .module('app')
    .component('topTabs',  {
        controller: function($scope, $interval, casinos) {
            this.selected = 0;
            this.selections = ["Top Casinos", "Top Slots", "Live Dealers", "Top Mobile"];
            this.counter = 0;
            this.tick = function(ctrl) {
                ctrl.counter += 500;
                if (ctrl.counter == 8000) {
                    ctrl.counter = 0;
                    if (ctrl.selected != 3) {
                        ctrl.selected++;
                    } else {
                        ctrl.selected = 0;
                    }
                }
            }
            var self = this;
            $interval(function() {self.tick(self)}, 500);
        },
        controllerAs: "$ctrl",
        template: `               
            <div class="top-casinos-container">
                <div id="top-casinos" class="tab-content" ng-class="{selectedContent : $ctrl.selections[$ctrl.selected] == 'Top Casinos'}">
                    <img src="/assets/top-casino-background.jpg" />
                    <div class="content">
                        <h1>THE TOP 10 CASINO SITES YOU NEED TO VISIT</h1>
                        <p>Here is a list of the top 10 online casinos for 2017. The sites are ranked on a range of different factors and qualities such as: Reliability, customer support, online casino security, games and software, variety of languages and currencies, payout time, bonuses and promotions. We turn each online casino inside out!</p>
                        <a href="#" class="play-button">Play</a><a href="#" class="review-button">Read More</a>
                    </div>
                </div>
                <div id="top-slots" class="tab-content" ng-class="{selectedContent : $ctrl.selections[$ctrl.selected] == 'Top Slots'}">
                    <img src="/assets/top-slots-casino-background.jpg" />
                    <div class="content">
                        <h1>THE TOP 10 CASINO SITES YOU NEED TO VISIT</h1>
                        <p>Here is a list of the top 10 online casinos for 2017. The sites are ranked on a range of different factors and qualities such as: Reliability, customer support, online casino security, games and software, variety of languages and currencies, payout time, bonuses and promotions. We turn each online casino inside out!</p>
                        <a href="#" class="play-button">Play</a><a href="#" class="review-button">Read More</a>
                    </div>
                </div>
                <div id="top-live-dealers" class="tab-content" ng-class="{selectedContent : $ctrl.selections[$ctrl.selected] == 'Live Dealers'}">
                    <img src="/assets/top-live-dealer-background.jpg" />
                    <div class="content">
                        <h1>THE TOP 10 CASINO SITES YOU NEED TO VISIT</h1>
                        <p>Here is a list of the top 10 online casinos for 2017. The sites are ranked on a range of different factors and qualities such as: Reliability, customer support, online casino security, games and software, variety of languages and currencies, payout time, bonuses and promotions. We turn each online casino inside out!</p>
                        <a href="#" class="play-button">Play</a><a href="#" class="review-button">Read More</a>
                    </div>
                </div>
                <div id="top-mobile" class="tab-content" ng-class="{selectedContent : $ctrl.selections[$ctrl.selected] == 'Top Mobile'}">
                    <img src="/assets/top-mobile-casino-background2.jpg" />
                    <div class="content">
                        <h1>THE TOP 10 CASINO SITES YOU NEED TO VISIT</h1>
                        <p>Here is a list of the top 10 online casinos for 2017. The sites are ranked on a range of different factors and qualities such as: Reliability, customer support, online casino security, games and software, variety of languages and currencies, payout time, bonuses and promotions. We turn each online casino inside out!</p>
                        <a href="#" class="play-button">Play</a><a href="#" class="review-button">Read More</a>
                    </div>
                </div>
                <div class="tabs-container">
                    <div class="col-sm-3 tab" ng-click="$ctrl.selected = 0; $ctrl.counter = 0;" ng-class="{selected : $ctrl.selections[$ctrl.selected] == 'Top Casinos'}">Top Casinos</div>
                    <div class="col-sm-3 tab" ng-click="$ctrl.selected = 1; $ctrl.counter = 0;" ng-class="{selected : $ctrl.selections[$ctrl.selected] == 'Top Slots'}">Top Slots</div>
                    <div class="col-sm-3 tab" ng-click="$ctrl.selected = 2; $ctrl.counter = 0;" ng-class="{selected : $ctrl.selections[$ctrl.selected] == 'Live Dealers'}">Live Dealers</div>
                    <div class="col-sm-3 tab" ng-click="$ctrl.selected = 3; $ctrl.counter = 0;" ng-class="{selected : $ctrl.selections[$ctrl.selected] == 'Top Mobile'}">Top Mobile</div>
                </div>
            </div>
        `
    });