angular
    .module('app')
    .component('topTabs',  {
        controller: function($scope, $interval, appData) {
            this.data = appData;
            this.selected = 0;
            this.selections = ["Top Casinos", "Top Slots", "Live Dealers", "Top Mobile"];
            this.counter = 0;
            this.tick = function(ctrl) {
                if (!this.data.animations.stop) {
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
            }
            var self = this;
            $interval(function() {self.tick(self)}, 500);
        },
        controllerAs: "$ctrl",
        template: `               
            <div class="top-casinos-container">
                <div class="graybg"></div>
                <div id="top-casinos" class="tab-content" ng-class="{selectedContent : $ctrl.selections[$ctrl.selected] == 'Top Casinos'}">
                    <div class="tab-overlay"></div>
                    <img src="/assets/top-casino-background.jpg" />
                    <div class="content">
                        <h1>THE TOP 10 CASINO SITES YOU NEED TO VISIT</h1>
                        <p ng-bind-html="$ctrl.data.html['home1'].text"></p>
                        <a href="/#!/games/Play" class="play-button">Play</a><a href="/#!/toplists/casinos/ratings/all/any/10/1" class="review-button">More</a>
                    </div>
                    <edit style="top: 30px; left: -60px;" collection="html" name="home1">
                        <textarea type="text" ng-model="$ctrl.form.text" placeholder="Heading <h1> || Sub-Heading <h2> || Paragraph <p> (or hit enter) || Bold Red <b> || Italicized <i> || Link <a href>"></textarea>
                    </edit>
                </div>
                <div id="top-slots" class="tab-content" ng-class="{selectedContent : $ctrl.selections[$ctrl.selected] == 'Top Slots'}">
                    <div class="tab-overlay"></div>
                    <img src="/assets/top-slots-casino-background.jpg" />
                    <div class="content">
                        <h1>THE TOP 10 SLOT GAMES YOU HAVE TO TRY</h1>
                        <p ng-bind-html="$ctrl.data.html['home2'].text"></p>
                        <a href="/#!/games/3DSlots" class="play-button">Play</a><a href="/#!/games/SlotReviews" class="review-button">More</a>
                    </div>
                    <edit style="top: 30px; left: -60px;" collection="html" name="home2">
                        <textarea type="text" ng-model="$ctrl.form.text" placeholder="Heading <h1> || Sub-Heading <h2> || Paragraph <p> (or hit enter) || Bold Red <b> || Italicized <i> || Link <a href>"></textarea>
                    </edit>
                </div>
                <div id="top-live-dealers" class="tab-content" ng-class="{selectedContent : $ctrl.selections[$ctrl.selected] == 'Live Dealers'}">
                    <div class="tab-overlay"></div>
                    <img src="/assets/top-live-dealer-background.jpg" />
                    <div class="content">
                        <h1>PLAY WITH LIVE DEALERS FROM THE COMFORT OF YOUR LIVING ROOM</h1>
                        <p ng-bind-html="$ctrl.data.html['home3'].text"></p>
                        <!--<a href="#" class="play-button">Play</a><a href="#" class="review-button">More</a>-->
                    </div>
                    <edit style="top: 30px; left: -60px;" collection="html" name="home3">
                        <textarea type="text" ng-model="$ctrl.form.text" placeholder="Heading <h1> || Sub-Heading <h2> || Paragraph <p> (or hit enter) || Bold Red <b> || Italicized <i> || Link <a href>"></textarea>
                    </edit>
                </div>
                <div id="top-mobile" class="tab-content" ng-class="{selectedContent : $ctrl.selections[$ctrl.selected] == 'Top Mobile'}">
                    <div class="tab-overlay"></div>
                    <img src="/assets/top-mobile-casino-background2.jpg" />
                    <div class="content">
                        <h1>THE TOP 10 MOBILE CASINOS TO PLAY ON FROM YOUR PHONE</h1>
                        <p ng-bind-html="$ctrl.data.html['home4'].text"></p>
                        <a href="/#!/games/Mobile" class="play-button">Play</a><a href="/#!/toplists/casinos/ratings/mobile/true/10/1" class="review-button">More</a>
                    </div>
                    <edit style="top: 30px; left: -60px;" collection="html" name="home4">
                        <textarea type="text" ng-model="$ctrl.form.text" placeholder="Heading <h1> || Sub-Heading <h2> || Paragraph <p> (or hit enter) || Bold Red <b> || Italicized <i> || Link <a href>"></textarea>
                    </edit>
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