angular
    .module('app')
    .component('bonusInfo', {
        controller: function ($scope, $http, appData, $routeParams) {
            this.extended = false;
            this.data = appData;
            this.bonus = {};
            
            /*window.addEventListener('data-loaded', function() {
                this.bonus = this.data.bonuses.filter(function(bonus) {
                    return bonus._id == $routeParams['bonusId'];
                })[0];
                $scope.$apply();
            }.bind(this));*/

            this.data.load(function() {
                this.bonus = this.data.bonuses.filter(function(bonus) {
                    return bonus._id == $routeParams['bonusId'];
                })[0];
            }.bind(this));

            this.findCasino = function(name) {
                var casino = this.data.casinos.filter(function(cas) {
                    return cas["name"] == name;
                });
                return casino[0];
            }.bind(this)

            this.findSoftware = function(name) {
                var software = this.data.software.filter(function(cas) {
                    return cas["name"] == name;
                });
                return software[0];
            }.bind(this)

            this.findCountry = function(name) {
                var country = this.data.countries.filter(function(cas) {
                    return cas["name"] == name;
                });
                return country[0];
            }.bind(this)

            this.findCurrency = function(name) {
                var currency = this.data.currency.filter(function(cas) {
                    return cas["name"] == name;
                });
                return currency[0];
            }.bind(this)
        },
        controllerAs: "$ctrl",
        template: `
            <div class="bonus-info col-sm-6">
                <h3><img src="{{ $ctrl.findCasino($ctrl.bonus.casino).icon }}" alt="{{ $ctrl.bonus.casino }} icon" /><a href="{{ $ctrl.findCasino($ctrl.bonus.casino).link }}"> {{ $ctrl.bonus.casino }} </a></h3>
                <h4><strong>Bonus Code: <span>{{ $ctrl.bonus.code }}</span></strong></h4>
                <div class="section" style="text-align: center; padding-bottom: 0;"><img class="flag" src="{{ $ctrl.findCountry(country).flag }}" alt="flag" ng-repeat="country in $ctrl.findCasino($ctrl.bonus.casino).countries" /></div>
                <div class="section"><strong>Games:</strong> <span ng-repeat="game in $ctrl.findCasino($ctrl.bonus.casino).gameTypes">{{game}}</span></div>
                <div class="section"><strong>Software:</strong> <a href="{{$ctrl.findSoftware(software).link}}" ng-repeat="software in $ctrl.findCasino($ctrl.bonus.casino).software">{{software}}</a></div>
                <div class="section"><strong>Currency:</strong> <span ng-repeat="currency in $ctrl.findCasino($ctrl.bonus.casino).currency">{{$ctrl.findCurrency(currency).acronym}}</span></div>
                <div class="section"><strong>Minimum Deposit:</strong> {{ $ctrl.findCasino($ctrl.bonus.casino).minDeposit }} </div>
                <div class="section"><strong>Minimum Withdrawal:</strong> {{ $ctrl.findCasino($ctrl.bonus.casino).minWithdrawal }} </div>
            </div>
        `
    });