angular
    .module('app')
    .component('welcomeBonus',  {
        controller: function($scope, $interval, appData) {
            this.data = appData;

            /*window.addEventListener('data-loaded', function() {
                var bonuses = this.data.bonuses.filter(function(bonus) {
                    //return bonus.casino == this.data.casino.name;
                }.bind(this));
            }.bind(this));*/

            this.data.load(function() {
                var bonuses = this.data.bonuses.filter(function(bonus) {
                    //return bonus.casino == this.data.casino.name;
                }.bind(this));
            }.bind(this));
        },
        controllerAs: "$ctrl",
        template: `               
            <div class="welcome-bonus">
                <h2>{{ $ctrl.data.casino.name }} </h2>
                <h3>Free Bonus</h3>
                <h4>100% Matching</h4>
                <a href="">Get Bonus</a>
            </div>
        `
    });