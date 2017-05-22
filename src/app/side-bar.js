angular
    .module('app')
    .component('sideBar', {
        controller: function ($scope, $http, casinos) {
            var self = this;
            this.casinos = [];

            this.$onInit = function () {
                casinos.getCasinos()
                    .then(function (casinos) {
                        self.casinos = casinos;
                    });
            }
        },
        controllerAs: "$ctrl",
        template: `               
            <div class='sidebar-container'>
                <div class="title">Top Casinos</div>
                <div class='casino' ng-repeat="casino in $ctrl.casinos">
                    <img src="http://www.bestonlinecasinos.com/news/wp-content/uploads/2016/06/NetEnt-Stops-Serving-Guts-Rizk-and-Betspin-Casinos.jpg" class="casino-img" />
                    <div class="casino-name">Guts Casino</div>
                    <a href="#" class="play-button">Play</a>
                </div>
                <div class="loader">Load more...</div>
            </div>
        `
    });