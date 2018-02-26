angular
    .module('app')
    .component('casinoListing', {
        controller: function ($scope, $http, appData) {
            this.extended = false;
            this.data = appData;

            this.findCasino = function(name) {
                var casino = this.data.casinos.filter(function(cas) {
                    return cas["name"] == name;
                });
                return casino[0];
            }.bind(this)

            this.findSoftware = function(name) {
                var software = this.data.software.filter(function(soft) {
                    return soft["name"] == name;
                });
                return software[0];
            }.bind(this)

            this.ratingsArray = function(bool) {
                var casino = $scope.$parent.casino;
                var trustRating = parseInt($scope.$parent.casino.trustRating) || 0;
                var supportRating = parseInt($scope.$parent.casino.supportRating) || 0;
                var qualityRating = parseInt($scope.$parent.casino.qualityRating) || 0;
                var promoRating = parseInt($scope.$parent.casino.promoRating) || 0;
                var rating = (trustRating + supportRating + qualityRating + promoRating) / 4;

                if (bool) {
                    return new Array(Math.round(rating / 10));
                } else if (!bool) {
                    return new Array(10 - (Math.round(rating / 10)));
                }
            }
            console.log("PARENT");
            console.log($scope.$parent);
        },
        controllerAs: "subctrl",
        scope: true,
        template: `
            <div class="listing casino-listing">
                <div class="col-sm-9" style="padding: 0;">
                    <div class="img-wrapper col-sm-4">
                        <img class="thumbnail casino-listing-thumb" src="{{ $parent.casino.thumbnail }}" />
                        <div class="ranking" >{{$parent.$index + 1}}</div>
                    </div>
                    <div class="info col-sm-8">
                        <a href="{{'/#!/casino/' + $parent.casino.prettylink}}"><h3>{{ $parent.casino.name }}</h3></a>
                        <div class="stars"><span ng-repeat="i in subctrl.ratingsArray(true) track by $index" class="glyphicon glyphicon-star"></span><span ng-repeat="i in subctrl.ratingsArray(false) track by $index" class="glyphicon glyphicon-star" style="color: #444; text-shadow: none;"></span></div>
                        <div class="countries">
                            <img class="country" src="{{ subctrl.data.searchCollection('countries', 'name', country)['flag'] }}" ng-repeat="country in $parent.casino.countries | limitTo: 6" />
                        </div>
                        <div  class="bonus-desc">{{ $parent.casino.bonuses[0].description }}</div>
                    </div>
                </div>
                <div class="buttons-container col-sm-3">
                    <a href="" class="top-button button .btn-hover" ng-click="subctrl.extended = (subctrl.extended == false ? true : false)">Review</a>
                    <a href="{{$parent.casino.link}}" class="bottom-button button .btn-hover">Play</a>
                </div>
                <div class="more-info col-sm-12" ng-class="{ extended : subctrl.extended }">
                    <div class="countries"><strong>Valid for:</strong> <span class="comma" ng-repeat="country in $parent.casino.countries">{{ country }}</span> </div>
                    <div class="software"><strong>Software:</strong> <a class="comma" href="{{ subctrl.findSoftware(software).link }}" ng-repeat="software in $parent.casino.software">{{ subctrl.findSoftware(software).name }} </a></div>
                    <div class="website"><strong>Casino Website:</strong> <a href="{{ $parent.casino.link }}">{{ $parent.casino.anchor }}</a></div>
                    <a class="read-more col-sm-12" href="{{'/#!/casino/' + $parent.casino.prettylink}}" style="margin-top: 10px;">Read More</a>
                </div>
            </div>
                
        `
    });