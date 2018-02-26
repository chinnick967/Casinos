angular
.module('app')
.component('slotGame', {
    controller: function ($scope, $http, appData, $routeParams, $sce) {
        this.data = appData;
        this.slot;
        this.casinos = [];

        this.data.load(function() {
            this.slot = this.data.slots.filter(function(slot) {
                return slot.name == $routeParams['slot'].replace(new RegExp('-', 'g'), " ");
            })[0];

            for (var x = 0; x < this.slot.casinos.length; x++) {
                this.casinos.push(this.data.getCasinoByName(this.slot.casinos[x]));
            }

            this.slot.iframe = $sce.trustAsResourceUrl(this.slot.iframe);
        }.bind(this));
    },
    controllerAs: "$ctrl",
    scope: {},
    template: `               
        <iframe src="{{$ctrl.slot.iframe}}"></iframe><!-- https://staticpff.yggdrasilgaming.com/init/launchClient.html?lang=en¤cy=EUR&org=Demo&channel=pc&key=&gameid=7334 -->
        <a class="tri-btn col-md-4 review-btn" href="">Write a Review</a><a class="tri-btn col-md-4 favorite-btn" href="">Add to Favourites</a><a class="tri-btn col-md-4 more-btn" href="">More Games</a>
            <div class="col-md-12 info" style="padding-bottom: 0;">
                <div style="display: inline-block; width: 100%; height: auto">
                    <div class="col-md-3">
                        <div class="rating trust col-md-12">
                            <div class="wrapper">
                                <edit style="top: 10px; left: 10px;" collection="slots" name="{{$ctrl.slot.name}}">
                                    <input id="trustRatingInput" type="range" ng-model="$ctrl.form.trustRating" value="50" min="1" max="100" oninput="trustRatingOutput.value = trustRatingInput.value"></input><output id="trustRatingOutput">50</output>
                                </edit>
                                {{$ctrl.slot.trustRating}}
                            </div>
                        </div>
                        <div class="rating quality col-md-12">
                            <div class="wrapper">
                                <edit style="top: 10px; left: 10px;" collection="slots" name="{{$ctrl.slot.name}}">
                                    <input id="qualityRatingInput" type="range" ng-model="$ctrl.form.qualityRating" value="50" min="1" max="100" oninput="qualityRatingOutput.value = qualityRatingInput.value"></input><output id="qualityRatingOutput">50</output>
                                </edit>
                                {{$ctrl.slot.qualityRating}}
                            </div>
                        </div>
                        <div class="rating bonuses col-md-12">
                            <div class="wrapper">
                                <edit style="top: 10px; left: 10px;" collection="slots" name="{{$ctrl.slot.name}}">
                                    <input id="bonusRatingInput" type="range" ng-model="$ctrl.form.bonusRating" value="50" min="1" max="100" oninput="bonusRatingOutput.value = bonusRatingInput.value"></input><output id="bonusRatingOutput">50</output>
                                </edit>
                                {{$ctrl.slot.bonusRating}}
                            </div>
                        </div>
                        <div class="rating payout col-md-12">
                            <div class="wrapper">
                                <edit style="top: 10px; left: 10px;;" collection="slots" name="{{$ctrl.slot.name}}">
                                    <input id="payoutRatingInput" type="range" ng-model="$ctrl.form.payoutRating" value="50" min="1" max="100" oninput="payoutRatingOutput.value = payoutRatingInput.value"></input><output id="payoutRatingOutput">50</output>
                                </edit>
                                {{$ctrl.slot.payoutRating}}
                            </div>
                        </div>
                    </div>
                    <div class="description col-md-9">
                        <div class="wrapper styles"><h2>{{$ctrl.slot.name}}</h2>{{$ctrl.slot.description}}
                        <edit style="top: 5px; right: 20px;" collection="slots" name="{{$ctrl.slot.name}}">
                            <textarea ng-model="$ctrl.form.description" type="text" ng-model="$ctrl.form.text" placeholder="Heading <h1> || Sub-Heading <h2> || Paragraph <p> (or hit enter) || Bold Red <b> || Italicized <i> || Link <a href>"></textarea>
                        </edit>   
                        </div>
                    </div>
                </div>
            <h2 style="color: white; font-weight: bold; text-transform: uppercase;" ng-if="$ctrl.slot.casinos.length > 0">Casinos That Offer This Game</h2>
            <casino-listing class="col-sm-12" style="color: white; margin-left: auto; margin-right: auto; position: relative; display: block; float: none; padding-left: 0;" ng-repeat="casino in $ctrl.casinos"></casino-listing>  
            <admin-controls>
                <edit style="" collection="slots" name="{{$ctrl.slot.name}}">
                    <h2>{{ $ctrl.slot.name }}</h2>
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
                </edit>              
            </admin-controls>
        </div>
    `
});