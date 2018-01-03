angular
    .module('app')
    .component('loadingScreen', {
        controller: function ($scope, $http, appData) {
            this.data = appData;
            this.loaded = false;
            this.data.load(function() {
                this.loaded = true;
            }.bind(this));
        },
        controllerAs: "$ctrl",
        template: `
            <div ng-class="{ hidecover : $ctrl.loaded }" id="cover">               
                <img src="/assets/loading7.gif" />
            </div>
        `
    });