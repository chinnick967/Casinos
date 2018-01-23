angular
.module('app')
.component('gameReview', {
    controller: function ($scope, $http, appData, $routeParams, $sce) {
        this.data = appData;
        this.game;
        this.casinos = [];

        this.data.load(function() {
            /*this.slot = this.data.slots.filter(function(slot) {
                return slot.name == $routeParams['slot'].replace(new RegExp('-', 'g'), " ");
            })[0];

            for (var x = 0; x < this.slot.casinos.length; x++) {
                this.casinos.push(this.data.getCasinoByName(this.slot.casinos[x]));
            }

            this.slot.iframe = $sce.trustAsResourceUrl(this.slot.iframe);*/
        }.bind(this));
    },
    controllerAs: "$ctrl",
    scope: {},
    template: `               
        <img class="game-heading-img" src="/assets/texture.jpg" />
        <div class="text col-sm-8 col-sm-offset-2">
            <div class="game-ratings"><div class="game-rating trust">23<small>/100</small></div><div class="game-rating quality">56<small>/100</small></div><div class="game-rating bonuses">98<small>/100</small></div><div class="game-rating payout">3<small>/100</small></div></div>
            <h1>Fun Blackjack Game</h1>
            <div class="game-info"><span>Game Categories: Blackjack</span><span>Mobile Friendly: Yes</span><span>Free to Play: Yes</span></div>
            <div class="inner">
                This is a text test This is a text test This is a text test This is a text test This is a text test This is a text test This is a text test This is a text test This is a text test This is a text test This is a text test This is a text test This is a text test This is a text test This is a text test
            </div>
        </div>
    `
});