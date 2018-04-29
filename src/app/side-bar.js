angular
    .module('app')
    .component('sideBar', {
        controller: function ($scope, $http, appData) {
            this.data = appData;
            this.limit = 30;
            this.showText = "Show more...";
            this.casinos = {};

            this.changeLimit = function() {
                if (this.limit == 30) {
                    this.limit = 60;
                    this.showText = "Show less...";
                } else {
                    this.limit = 30;
                    this.showText = "Show more...";
                }
            }

            this.cloakLink = function(url) {
                window.open(url, '_blank');
            }

            this.sortList = function(array) {
                return array.sort(function(a, b) {
                    a.trustRating = parseInt(a.trustRating) || 0;
                    a.supportRating = parseInt(a.supportRating) || 0;
                    a.qualityRating = parseInt(a.qualityRating) || 0;
                    a.promoRating = parseInt(a.promoRating) || 0;

                    b.trustRating = parseInt(b.trustRating) || 0;
                    b.supportRating = parseInt(b.supportRating) || 0;
                    b.qualityRating = parseInt(b.qualityRating) || 0;
                    b.promoRating = parseInt(b.promoRating) || 0;

                    a.rating = (a.trustRating + a.supportRating + a.qualityRating + a.promoRating) / 4;
                    b.rating = (b.trustRating + b.supportRating + b.qualityRating + b.promoRating) / 4;

                    return b.rating - a.rating;
                });
            }
            this.data.load(() => {
                this.casinos = this.sortList(this.data.casinos);
            });
        },
        controllerAs: "$ctrl",
        scope: {},
        template: `               
            <div class='sidebar-container'>
                <div class="title">Top Casinos</div>
                <div class='casino' ng-repeat="casino in $ctrl.casinos | limitTo: $ctrl.limit">
                    <a ng-click="$ctrl.cloakLink('/#!/casino/' + casino.prettylink)" href=""><img src="{{casino.icon}}" class="casino-img" /></a>
                    <a ng-click="$ctrl.cloakLink('/#!/casino/' + casino.prettylink)" href=""><div class="casino-name">{{casino.name}}</div></a>
                    <a ng-click="$ctrl.cloakLink(casino.link)" href="" class="play-button">Play<div class="tip">Terms and Conditions Apply</div></a>
                </div>
                <div class="loader" ng-click="$ctrl.changeLimit();">{{ $ctrl.showText }}</div>
            </div>
            <promo></promo>
        `
    });