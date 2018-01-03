angular
    .module('app')
    .component('bonusIntro', {
        controller: function ($scope, $http, appData, $routeParams) {
            this.extended = false;
            this.data = appData;

            this.data.load(function() {
                this.bonus = this.data.bonuses.filter(function(bonus) {
                    return bonus._id == $routeParams['bonusId'];
                })[0];
            }.bind(this));
            
            /*window.addEventListener('data-loaded', function() {
                this.bonus = this.data.bonuses.filter(function(bonus) {
                    return bonus._id == $routeParams['bonusId'];
                })[0];
            }.bind(this));*/
        },
        controllerAs: "$ctrl",
        template: `
            <div class="intro-container col-sm-6">
                <h1>BONUS</h1>
                <h2><strong>{{ $ctrl.bonus.type }}</strong></h2>
                <h2> {{ $ctrl.bonus.amount }}</h2>
                <div class="text">
                    {{ $ctrl.bonus.description }}
                </div>
                <a href="{{$ctrl.bonus.link}}" class="get-bonus">GET BONUS!</a>
            </div>
        `
    });