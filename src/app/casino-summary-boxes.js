angular
    .module('app')
    .component('casinoSummaryBoxes', {
        controller: function ($scope, appData, userService) {
            this.data = appData;
            this.userService = userService;
            
            /*window.addEventListener('data-loaded', function() {
                bar.animate((parseInt(this.data.casino.trustRating) + parseInt(this.data.casino.qualityRating) + parseInt(this.data.casino.promoRating) + parseInt(this.data.casino.supportRating)) / 400);  // Number from 0.0 to 1.0
            }.bind(this));*/

            this.data.load(function() {
                this.data.refreshCurrentCasino();
                var trustRating = parseInt(this.data.casino.trustRating) || 0;
                var qualityRating = parseInt(this.data.casino.qualityRating) || 0;
                var promoRating = parseInt(this.data.casino.promoRating) || 0;
                var supportRating = parseInt(this.data.casino.supportRating) || 0;

                setTimeout(function(){ 
                    var bar = new ProgressBar.Circle('#rankingProgress', {
                        color: '#ED6A5A',
                        // This has to be the same size as the maximum width to
                        // prevent clipping
                        strokeWidth: 8,
                        trailWidth: 1,
                        easing: 'bounce',
                        duration: 1400,
                        text: {
                            autoStyleContainer: false
                        },
                        from: { color: '#FFEA82', width: 1 },
                        to: { color: '#ED6A5A', width: 8 },
                        // Set default step function for all animate calls
                        step: function(state, circle) {
                            circle.path.setAttribute('stroke', state.color);
                            circle.path.setAttribute('stroke-width', state.width);
        
                            var value = Math.round(circle.value() * 100);
                            if (value === 0) {
                                circle.setText('');
                            } else {
                                circle.setText(value);
                            }
        
                        }
                    });
                    bar.animate((trustRating + qualityRating + promoRating + supportRating) / 400);
                }.bind(this), 1000);
            }.bind(this));

        },
        controllerAs: "$ctrl",
        template: `
            <div id="casino-ratings" class="col-md-4 casino-summ-box">
                <h3>Ratings</h3>
                <div class="rating">
                    <div class="rating-box">{{ $ctrl.data.casino.trustRating }}</div>
                    <span>Trust and Fairness</span>
                    <tooltips>This rating is based off the level of trust that consumers have with the casino. Payout rate, security, game fairness, etc</tooltips>
                    <edit style="top: -8px; left: -60px;" collection="casinos">
                        <h2>Trust Rating</h2>
                        <input id="trustRatingInput" type="range" ng-model="$ctrl.form.trustRating" value="50" min="1" max="100" oninput="trustRatingOutput.value = trustRatingInput.value"></input><output id="trustRatingOutput">50</output>
                    </edit>
                </div>
                <div class="rating">
                    <div class="rating-box">{{ $ctrl.data.casino.qualityRating }}</div>
                    <span>Game Quality</span>
                    <tooltips>This rating is based off the game quality provided by the casino. Game variety, game payout, software support, etc</tooltips>
                    <edit style="top: -8px; left: -60px;" collection="casinos">
                        <h2>Trust Rating</h2>
                        <input id="qualityRatingInput" type="range" ng-model="$ctrl.form.qualityRating" value="50" min="1" max="100" oninput="qualityRatingOutput.value = qualityRatingInput.value"></input><output id="qualityRatingOutput">50</output>
                    </edit>
                </div>
                <div class="rating">
                    <div class="rating-box">{{ $ctrl.data.casino.promoRating }}</div>
                    <span>Bonuses & Promos</span>
                    <tooltips>This rating is based off the bonuses and promotions provided by the casino. Extras, welcome bonuses, rebates, etc</tooltips>
                    <edit style="top: -8px; left: -60px;" collection="casinos">
                        <h2>Promo/Bonus Rating</h2>
                        <input id="promoRatingInput" type="range" ng-model="$ctrl.form.promoRating" value="50" min="1" max="100" oninput="promoRatingOutput.value = promoRatingInput.value"></input><output id="promoRatingOutput">50</output>
                    </edit>
                </div>
                <div class="rating">
                    <div class="rating-box">{{ $ctrl.data.casino.supportRating }}</div>
                    <span>Customer Support</span>
                    <tooltips>This rating is based off the quality of customer support provided by the casino. Responsiveness, contact methods, helpfulness, etc</tooltips>
                    <edit style="top: -8px; left: -60px;" collection="casinos">
                        <h2>Support Rating</h2>
                        <input id="supportRatingInput" type="range" ng-model="$ctrl.form.supportRating" value="50" min="1" max="100" oninput="supportRatingOutput.value = supportRatingInput.value"></input><output id="supportRatingOutput">50</output>
                    </edit>
                </div>
            </div>
            <div id="casino-preview" class="col-md-4 casino-summ-box" style="background-image: url( {{ $ctrl.data.casino.preview }} )">
                <edit style="top: 2px; right: 2px;" collection="casinos">
                    <h2>Preview Image</h2>
                    <div class="input-container"><input data-model="preview" type="file" id="casino-preview" accept="image/*"><label for="casino-preview">Thumbnail 290 x 220</label></div>
                </edit>
            </div>
            <div id="casino-ranking" class="col-md-4 casino-summ-box">
                <div class="countries">
                    <img class="country" ng-repeat="country in $ctrl.data.casino.countries | limitTo:5" src="{{ $ctrl.data.searchCollection('countries', 'name', country)['flag'] }}" data-test="{{ country }}" />
                </div>
                <div class="ranking">
                    <div id="rankingProgress"></div>
                </div>
                <edit style="top: 0px; right: 10px;" collection="casinos">
                    <h2>Countries</h2>
                    <select ng-model="$ctrl.form.countries" multiple>
                        <option ng-repeat="country in $ctrl.data.countries" value="{{ country.name }}">{{ country.name }}</option>
                    </select>
                    <span>Hold ctrl to select multiple values</span>
                </edit>
            </div>
            <div id="casino-review-btn" class="col-md-4 casino-btn" ng-click="$ctrl.userService.betaFeature()">
                Write a Review
            </div>
            <div id="casino-favorite-btn" class="col-md-4 casino-btn" ng-click="$ctrl.userService.betaFeature()">
                Add to Favourites
            </div>
            <a target="_blank" href="{{$ctrl.data.casino.link}}"><div id="casino-play-btn" class="col-md-4 casino-btn">Play Now</div></a>
        `
    });