angular
.module('app')
.component('gameReview', {
    controller: function ($scope, $http, appData, $routeParams, $sce) {
        this.data = appData;
        this.game;
        this.casinos = [];
        this.gameid = $routeParams['gamereview'];

        this.data.load(function() {
            for (var i = 0; i < this.data["game reviews"].length; i++) {
                if (this.data["game reviews"][i]["_id"] == this.gameid) {
                    this.game = this.data["game reviews"][i];
                    this.game.mobilefriendly = (this.game.mobile == "true" ? "Yes" : "No");
                    this.game.freetoplay = (this.game.free == "true" ? "Yes" : "No");
                }
            }
        }.bind(this));
    },
    controllerAs: "$ctrl",
    scope: {},
    template: `               
        <div style="overflow: hidden;"><img class="game-heading-img" src="{{$ctrl.game.headerimage}}" />
        <edit style="top: 2px; right: 2px;" collection="game reviews" name="{{$ctrl.game.name}}">
            <h2>Header Image</h2>
            <div class="input-container"><input data-model="headerimage" type="file" id="headerimage" accept="image/*"><label for="headerimage">Thumbnail 290 x 220</label></div>
        </edit>
        </div>
        <div class="text col-sm-8 col-sm-offset-2">
            <div class="game-ratings">
                <div class="game-rating trust">
                    {{$ctrl.game.trustRating}}<small>/100</small>
                    <edit style="top: 0px; left: -30px;" collection="game reviews" name="{{$ctrl.game.name}}">
                        <h2>Trust Rating</h2>
                        <input id="trustRatingInput" type="range" ng-model="$ctrl.form.trustRating" value="50" min="1" max="100" oninput="trustRatingOutput.value = trustRatingInput.value"></input><output id="trustRatingOutput">50</output>
                    </edit>   
                </div>
                <div class="game-rating quality">
                    {{$ctrl.game.qualityRating}}<small>/100</small>
                    <edit style="top: 0px; left: -30px;" collection="game reviews" name="{{$ctrl.game.name}}">
                        <h2>Quality Rating</h2>
                        <input id="qualityRatingInput" type="range" ng-model="$ctrl.form.qualityRating" value="50" min="1" max="100" oninput="qualityRatingOutput.value = qualityRatingInput.value"></input><output id="qualityRatingOutput">50</output>
                    </edit>  
                </div>
                <div class="game-rating bonuses">
                    {{$ctrl.game.bonusRating}}<small>/100</small>
                    <edit style="top: 0px; left: -30px;" collection="game reviews" name="{{$ctrl.game.name}}">
                        <h2>Bonus Rating</h2>
                        <input id="bonusRatingInput" type="range" ng-model="$ctrl.form.bonusRating" value="50" min="1" max="100" oninput="bonusRatingOutput.value = bonusRatingInput.value"></input><output id="bonusRatingOutput">50</output>
                    </edit>
                </div>
                <div class="game-rating payout">
                    {{$ctrl.game.payoutRating}}<small>/100</small>
                    <edit style="top: 0px; left: -30px;" collection="game reviews" name="{{$ctrl.game.name}}">
                        <h2>Payout Rating</h2>
                        <input id="payoutRatingInput" type="range" ng-model="$ctrl.form.payoutRating" value="50" min="1" max="100" oninput="payoutRatingOutput.value = payoutRatingInput.value"></input><output id="payoutRatingOutput">50</output>
                    </edit>
                </div>
            </div>
            <h1>{{ $ctrl.game.name }}</h1>
            <div class="game-info"><span style="display: block"><b>Game Categories:</b> <ul><li>Blackjack</li><li>Blackjack</li></ul> </span><span><b>Mobile Friendly:</b> {{$ctrl.game.mobilefriendly}}</span><span><b>Free to Play:</b> {{$ctrl.game.freetoplay}}</span></div>
            <div class="inner">
                {{ $ctrl.game.text }}
                <edit style="top: 0px; left: -60px;" collection="game reviews" name="{{$ctrl.game.name}}">
                    <textarea type="text" ng-model="$ctrl.form.text" placeholder="Heading <h1> || Sub-Heading <h2> || Paragraph <p> (or hit enter) || Bold Red <b> || Italicized <i> || Link <a href>"></textarea>
                </edit>   
            </div>
        </div>
    `
});