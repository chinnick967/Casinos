angular
    .module('app')
    .component('homeSummary', {
        controller: function ($scope, appData) {
            this.data = appData;
        },
        controllerAs: "$ctrl",
        template: `               
            <h2 class="section-title">Gamblers Update <a href="#" class="link"><span>View more</span><span class="glyphicon glyphicon-chevron-right"></span></a></h2>
            <edit style="top: -60px; left: -60px;" collection="html" name="homesummary">
                <textarea type="text" ng-model="$ctrl.form.text" placeholder="Heading <h1> || Sub-Heading <h2> || Paragraph <p> (or hit enter) || Bold Red <b> || Italicized <i> || Link <a href>"></textarea>
            </edit>   
            <div class="testing styles" style="padding-bottom: 40px;" ng-bind-html="$ctrl.data.html['homesummary'].text">

            </div>
        `
    });