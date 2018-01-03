angular
    .module('app')
    .component('casinoDescription', {
        controller: function ($scope, $http, appData) {
            this.data = appData;
            this.extended = false;
            this.showLabel = "Show more";

            this.extend = function() {
                this.extended = (this.extended) ? false : true;
                this.showLabel = (this.extended) ? "Show less" : "Show more";
            }.bind(this);
        },
        controllerAs: "$ctrl",
        template: `
            <div class="casino-desc col-md-12">               
                <div id="casino-name">{{$ctrl.data.casino.name}}</div>
                <div id="casino-summary" class="styles" ng-class="{ extended : $ctrl.extended }" ng-bind-html="$ctrl.data.casino.description";></div>
                <a id="show-btn" ng-click="$ctrl.extend()">{{ $ctrl.showLabel }}</a>
                <edit style="top: 85px; left: -40px;" collection="casinos">
                    <h2>Casino Description</h2>
                    <textarea ng-model="$ctrl.form.description" placeholder="The first three lines of the description appears as the preview text"></textarea>
                </edit>
            </div>
        `
    });