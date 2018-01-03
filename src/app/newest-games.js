angular
    .module('app')
    .component('newestGames', {
        controller: function ($scope, $http, appData, userService) {
            this.data = appData;
            this.userService = userService;
            
            this.data.load(function() {
                for (var i = 0; i < this.data.slots.length; i++) {
                    this.data.slots[i].slug = this.data.slots[i].name.replace(/\s/g, '-');
                }
            }.bind(this));
        },
        controllerAs: "$ctrl",
        template: `
            <edit style="top: 90px; left: -60px;" collection="html" name="newestgames">
                <textarea type="text" ng-model="$ctrl.form.text" placeholder="Heading <h1> || Sub-Heading <h2> || Paragraph <p> (or hit enter) || Bold Red <b> || Italicized <i> || Link <a href>"></textarea>
            </edit>                 
            <h2 class="section-title">Newest Games <a href="/#!/games" class="link"><span>View more</span><span class="glyphicon glyphicon-chevron-right"></span></a></h2>
            <p ng-bind-html="$ctrl.data.html['newestgames'].text"></p>
            <div class="new-games-container">
                <div class="col-sm-4" ng-repeat="slot in $ctrl.data.slots | orderBy:'date' | limitTo: 6">
                    <div class="game">
                        <a href="/#!/slots/{{slot.slug}}"><img src="{{slot.thumbnail}}" /></a>
                        <h3>{{slot.name}} <span class="glyphicon glyphicon-plus-sign" ng-click="$ctrl.userService.betaFeature()"></span></h3>
                    </div>
                </div>
                
                <a href="/#!/games/Play" class="col-sm-12 free-slots-button">Play Free Slots</a>
            </div>
        `
    });