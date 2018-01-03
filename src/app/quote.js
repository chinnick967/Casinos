angular
    .module('app')
    .component('quote', {
        controller: function ($scope, $http, appData, $sce) {
            this.data = appData;
            this.$sce = $sce;
            
        },
        controllerAs: "$ctrl",
        template: `               
            <blockquote>
                <h1>What's <span>Hot?</span></h1>
                <div ng-bind-html='$ctrl.$sce.trustAsHtml($ctrl.data.casino.hot)'></div>
                <edit style="top: 5px; right: 5px;" collection="casinos">
                    <h2>What's Hot?</h2>
                    <textarea ng-model="$ctrl.form.hot" placeholder="A small promo area to incentivize users to try out this casino"></textarea>
                </edit>
            </blockquote>
        `
    });