angular
    .module('app')
    .component('subscription', {
        controller: function ($scope, $http, userService) {
            this.userService = userService;
        },
        controllerAs: "$ctrl",
        template: `               
            <div class="container-fluid subscription-container">
                <div class="container">
                    <div class="subscription-header col-sm-12"><h2>Sign up for free news, spins, casinos, and bonuses!</h2></div>
                    <div class="mail-icon col-sm-2"><span class="glyphicon glyphicon-gift"></span></div>
                    <div class="subscription col-sm-8">
                        <div class="column col-sm-10"><input type="text" placeholder="Enter your email address"></input></div>
                        <div class="column col-sm-2 subscribe-button" ng-click="$ctrl.userService.betaFeature()">Subscribe</div>
                    </div>
                    <div class="col-sm-2"></div>
                </div>
            </div>
        `
    });