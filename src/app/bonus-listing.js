angular
    .module('app')
    .component('bonusListing', {
        controller: function ($scope, $http, appData) {
            this.extended = false;
            this.data = appData;

            this.findCasino = function(name) {
                var casino = this.data.casinos.filter(function(cas) {
                    return cas["name"] == name;
                });
                return casino[0];
            }

            this.findSoftware = function(name) {
                var software = this.data.software.filter(function(cas) {
                    return cas["name"] == name;
                });
                return software[0];
            }

            this.ratingsArray = function(bool) {
                var casino = this.findCasino($scope.$parent.bonus.casino);
                if (casino) {
                    var trustRating = parseInt(casino.trustRating) || 0;
                    var supportRating = parseInt(casino.supportRating) || 0;
                    var qualityRating = parseInt(casino.qualityRating) || 0;
                    var promoRating = parseInt(casino.promoRating) || 0;
                    var rating = (trustRating + supportRating + qualityRating + promoRating) / 4;

                    if (bool) {
                        return new Array(Math.round(rating / 10));
                    } else if (!bool) {
                        return new Array(10 - (Math.round(rating / 10)));
                    }
                } else {
                    return new Array(0);
                }
            }
        },
        controllerAs: "subctrl",
        scope: true,
        template: `
            <div class="listing casino-listing">
                <div class="col-sm-9" style="padding: 0;">
                    <div class="img-wrapper col-sm-4">
                        <img class="thumbnail casino-listing-thumb" src="{{ subctrl.findCasino($parent.bonus.casino).thumbnail }}" />
                    </div>
                    <div class="info col-sm-8">
                        <span class="glyphicon glyphicon-fire" ng-if="subctrl.ratingsArray(true).length >= 8"></span>
                        <span class="glyphicon glyphicon-phone" ng-if="subctrl.findCasino($parent.bonus.casino).mobile"></span>
                        <span class="glyphicon glyphicon-globe" ng-if="subctrl.findCasino($parent.bonus.casino).countries && subctrl.findCasino($parent.bonus.casino).countries.length >= 3"></span>
                        <a href="#"><h3>{{ $parent.bonus.casino }} Bonus</h3></a>
                        <div class="stars"><span ng-repeat="i in subctrl.ratingsArray(true) track by $index" class="glyphicon glyphicon-star"></span><span ng-repeat="i in subctrl.ratingsArray(false) track by $index" class="glyphicon glyphicon-star" style="color: #444; text-shadow: none;"></span></div>
                        <p class="nobold">{{ $parent.bonus.type }} &mdash; {{ $parent.bonus.amount }}</p>
                        <p class="nobold">Bonus code: <span>{{ $parent.bonus.code }}</span></p>
                    </div>
                </div>
                <div class="buttons-container col-sm-3">
                    <a href="" class="top-button button .btn-hover" ng-click="subctrl.extended = (subctrl.extended == false ? true : false)">Review</a>
                    <a href="{{$parent.bonus.link}}" class="bottom-button button .btn-hover">Get Bonus</a>
                </div>
                <div class="more-info col-sm-12" ng-class="{ extended : subctrl.extended }">
                    <div class="countries"><strong>Valid for:</strong> <span class="comma" ng-repeat="country in subctrl.findCasino($parent.bonus.casino).countries">{{ country }}</span> </div>
                    <div class="software"><strong>Software:</strong> <a class="comma" href="{{ subctrl.findSoftware(software).link }}" ng-repeat="software in $parent.bonus.software">{{ subctrl.findSoftware(software).name }} </a></div>
                    <div class="website"><strong>Casino Website:</strong> <a href="{{ subctrl.findCasino(bonus.casino).link }}">{{ subctrl.findCasino($parent.bonus.casino).anchor }}</a></div>
                    <a class="read-more col-sm-12" href="{{'/#!/bonus/' + $parent.bonus._id}}" style="margin-top: 10px;">Read More</a>
                </div>
            </div>
        `
    });


    /*

    <div class="listing col-sm-12">
        <div class="col-sm-9" style="padding: 0;">
            <img class="thumbnail col-sm-3" src="{{ subctrl.findCasino($parent.bonus.casino).thumbnail }}" style="border-right: none !important;" />
            <div class="info col-sm-9" style="margin-top: 0">
                <a href="#"><h3 style="color: #222 !important; text-shadow: none !important;">{{ $parent.bonus.casino }} Bonus</h3></a>
                <div class="countries">
                    <img class="country" src="{{ subctrl.data.searchCollection('countries', 'name', country)['flag'] }}" ng-repeat="country in subctrl.findCasino($parent.bonus.casino).countries" />
                </div>
                <p><strong>{{ $parent.bonus.type }}</strong> &mdash; {{ $parent.bonus.amount }}</p>
                <p>Bonus code: <span>{{ $parent.bonus.code }}</span></p>
            </div>
        </div>
        <div class="buttons-container col-sm-3">
            <a href="" class="top-button button .btn-hover" ng-click="subctrl.extended = (subctrl.extended == false ? true : false)">More Info</a>
            <a href="{{$parent.bonus.link}}" class="bottom-button button .btn-hover">Get Bonus</a>
        </div>
        <div class="more-info col-sm-12" ng-class="{ extended : subctrl.extended }">
            <!--<div class="countries"><strong>Valid for:</strong> <span ng-repeat="country in subctrl.findCasino($parent.bonus.casino).countries">{{ country }} </span></div>-->
            <div class="software"><strong>Software:</strong> <a href="{{ subctrl.findSoftware(software).link }}" ng-repeat="country in $parent.bonus.software">{{ subctrl.findSoftware(software).name }} </a></div>
            <div class="website"><strong>Casino Website:</strong> <a href="{{ subctrl.findCasino(bonus.casino).link }}">{{ subctrl.findCasino($parent.bonus.casino).anchor }}</a></div>
            <div class="description">
                {{ $parent.bonus.description }}
            </div>
            <!--<a class="read-more col-sm-12" href="#">Read More</a>-->
        </div>
    </div>

*/