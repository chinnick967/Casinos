angular
.module('app')
.component('games', {
    controller: function ($scope, appData, $routeParams) {
        this.data = appData;
        this.filter = $routeParams['filter'] || 'All';

        this.sortGames = function(array) {
            switch(this.filter) {
                case 'Random':
                var currentIndex = array.length, temporaryValue, randomIndex;
                    // While there remain elements to shuffle...
                    while (0 !== currentIndex) {
                    
                        // Pick a remaining element...
                        randomIndex = Math.floor(Math.random() * currentIndex);
                        currentIndex -= 1;
                    
                        // And swap it with the current element.
                        temporaryValue = array[currentIndex];
                        array[currentIndex] = array[randomIndex];
                        array[randomIndex] = temporaryValue;
                    }
                    break;
                default:
                    array.sort(function(a,b) {
                        return new Date(b.date) - new Date(a.date);
                    });
                    break;
            }
            return array;
        }

        this.setGames = function() {
            var oldArray = this.data["game reviews"].concat(this.data.slots);
            var newArray = [];
            
            for (var x = 0; x < oldArray.length; x++) {
                oldArray[x].linkname = oldArray[x].collection.replace(/\s/g, '');
                oldArray[x].nameWithoutSpaces = oldArray[x].name.replace(/\s/g, '-');

                switch(this.filter) {
                    case 'Mobile':
                        if (oldArray[x].mobile == "true") {
                            newArray.push(oldArray[x]);
                        }
                        break;
                    case 'Jackpots':
                        for (var j = 0; j < oldArray[x].categories.length; j++) {
                            if (oldArray[x].categories[j] == "Jackpots") {
                                newArray.push(oldArray[x]);
                            }
                        }
                        break;
                    case 'Free':
                        if (oldArray[x].free == "true") {
                            newArray.push(oldArray[x]);
                        }
                        break;
                    case 'Play':
                        if (oldArray[x].collection == "slots") {
                            newArray.push(oldArray[x]);
                        }
                        break;
                    case 'Roulette':
                        for (var j = 0; j < oldArray[x].categories.length; j++) {
                            if (oldArray[x].categories[j] == "Roulette") {
                                newArray.push(oldArray[x]);
                            }
                        }
                        break;
                    case 'Blackjack':
                        for (var j = 0; j < oldArray[x].categories.length; j++) {
                            if (oldArray[x].categories[j] == "Blackjack") {
                                newArray.push(oldArray[x]);
                            }
                        }
                        break;
                    case 'VideoPoker':
                        for (var j = 0; j < oldArray[x].categories.length; j++) {
                            if (oldArray[x].categories[j] == "Video Poker") {
                                newArray.push(oldArray[x]);
                            }
                        }
                        break;
                    case 'SlotReviews':
                        for (var j = 0; j < oldArray[x].categories.length; j++) {
                            if (oldArray[x].categories[j] == "Slots") {
                                newArray.push(oldArray[x]);
                            }
                        }
                        break;
                    case '3DSlots':
                        for (var j = 0; j < oldArray[x].categories.length; j++) {
                            if (oldArray[x].categories[j] == "3D Slots") {
                                newArray.push(oldArray[x]);
                            }
                        }
                        break;
                    case 'FruitSlots':
                        for (var j = 0; j < oldArray[x].categories.length; j++) {
                            if (oldArray[x].categories[j] == "Fruit Slots") {
                                newArray.push(oldArray[x]);
                            }
                        }
                        break;
                    case 'ClassicSlots':
                        for (var j = 0; j < oldArray[x].categories.length; j++) {
                            if (oldArray[x].categories[j] == "Classic Slots") {
                                newArray.push(oldArray[x]);
                            }
                        }
                        break;
                    case 'JackpotSlots':
                        for (var j = 0; j < oldArray[x].categories.length; j++) {
                            if (oldArray[x].categories[j] == "Jackpot Slots") {
                                newArray.push(oldArray[x]);
                            }
                        }
                        break;
                    case 'VideoSlots':
                        for (var j = 0; j < oldArray[x].categories.length; j++) {
                            if (oldArray[x].categories[j] == "Video Slots") {
                                newArray.push(oldArray[x]);
                            }
                        }
                        break;
                    case 'ThemedSlots':
                        for (var j = 0; j < oldArray[x].categories.length; j++) {
                            if (oldArray[x].categories[j] == "Themed Slots") {
                                newArray.push(oldArray[x]);
                            }
                        }
                        break;
                    case 'StackedWilds':
                        for (var j = 0; j < oldArray[x].categories.length; j++) {
                            if (oldArray[x].categories[j] == "Stacked Wilds") {
                                newArray.push(oldArray[x]);
                            }
                        }
                        break;
                    case 'HighRoller':
                        for (var j = 0; j < oldArray[x].categories.length; j++) {
                            if (oldArray[x].categories[j] == "High Roller") {
                                newArray.push(oldArray[x]);
                            }
                        }
                        break;
                    case 'LowBaller':
                        for (var j = 0; j < oldArray[x].categories.length; j++) {
                            if (oldArray[x].categories[j] == "Low Baller") {
                                newArray.push(oldArray[x]);
                            }
                        }
                        break;
                    default:
                        newArray.push(oldArray[x]);
                        break;
                }
            }

            return this.sortGames(newArray);
        }

        this.data.load(function() {
            this.games = this.setGames();
        }.bind(this));
    },
    controllerAs: "$ctrl",
    template: `
    <div class="filters col-md-2">
        <input class="search col-md-8 col-md-offset-2" type="text" placeholder="Search Games..." />
        <div class="filter-buttons col-md-12">
            <a href="/#!/games" class="filter-btn col-md-6" ng-class="{selected : $ctrl.filter == 'All'}">All</a><a href="/#!/games/Mobile" class="filter-btn col-md-6" ng-class="{selected : $ctrl.filter == 'Mobile'}">Mobile</a>
            <a href="/#!/games/Jackpots" class="filter-btn col-md-6" ng-class="{selected : $ctrl.filter == 'Jackpots'}">Jackpots</a><a href="/#!/games/Free" class="filter-btn col-md-6" ng-class="{selected : $ctrl.filter == 'Free'}">Free</a>
            <a href="/#!/games/Play" class="filter-btn col-md-6" ng-class="{selected : $ctrl.filter == 'Play'}">Play Here</a><a href="/#!/games/Random" class="filter-btn col-md-6" ng-class="{selected : $ctrl.filter == 'Random'}">Random</a>
            <a href="/#!/games/HighRating" class="filter-btn col-md-6" ng-class="{selected : $ctrl.filter == 'HighRating'}">Highly Rated</a><a href="/#!/games/LowRating" class="filter-btn col-md-6" ng-class="{selected : $ctrl.filter == 'LowRating'}">Low Rated</a>
            <a href="/#!/games/Roulette" class="filter-btn col-md-6" ng-class="{selected : $ctrl.filter == 'Roulette'}">Roulette</a><a href="/#!/games/Blackjack" class="filter-btn col-md-6" ng-class="{selected : $ctrl.filter == 'Blackjack'}">Blackjack</a>
            <a href="/#!/games/VideoPoker" class="filter-btn col-md-6" ng-class="{selected : $ctrl.filter == 'VideoPoker'}">Video Poker</a><a href="/#!/games/SlotReviews" class="filter-btn col-md-6" ng-class="{selected : $ctrl.filter == 'SlotReviews'}">Slot Reviews</a>
        </div>  
        <div class="filter-buttons col-md-12">
            <a href="/#!/games/3DSlots" class="filter-btn col-md-6" ng-class="{selected : $ctrl.filter == '3DSlots'}">3D Slots</a><a href="/#!/games/FruitSlots" class="filter-btn col-md-6" ng-class="{selected : $ctrl.filter == 'FruitSlots'}">Fruit Slots</a>
            <a href="/#!/games/JackpotSlots" class="filter-btn col-md-6" ng-class="{selected : $ctrl.filter == 'JackpotSlots'}">Jackpot Slots</a><a href="/#!/games/ClassicSlots" class="filter-btn col-md-6" ng-class="{selected : $ctrl.filter == 'ClassicSlots'}">Classic Slots</a>
            <a href="/#!/games/VideoSlots" class="filter-btn col-md-6" ng-class="{selected : $ctrl.filter == 'VideoSlots'}">Video Slots</a><a href="/#!/games/ProgressiveSlots" class="filter-btn col-md-6" ng-class="{selected : $ctrl.filter == 'ProgressiveSlots'}">Progressive Slots</a>
            <a href="/#!/games/ThemedSlots" class="filter-btn col-md-6" ng-class="{selected : $ctrl.filter == 'ThemedSlots'}">Themed Slots</a><a href="/#!/games/StackedWilds" class="filter-btn col-md-6" ng-class="{selected : $ctrl.filter == 'StackedWilds'}">Stacked Wilds</a>
            <a href="/#!/games/HighRoller" class="filter-btn col-md-6" ng-class="{selected : $ctrl.filter == 'HighRoller'}">High Roller</a><a href="/#!/games/LowBaller" class="filter-btn col-md-6" ng-class="{selected : $ctrl.filter == 'LowBaller'}">Low Baller</a>
        </div>
        <div class="providers col-md-12">
            <h3 class="col-md-12">Providers</h3>
            <div class="checkbox-cont col-md-6" ng-repeat="software in $ctrl.data.software"><input type="checkbox" checked /><span>{{software.name}}</span></div>
        </div>
    </div>
    
    <div class="games-cont col-md-10">
        <a href="/#!/{{ game.linkname }}/{{ game.nameWithoutSpaces }}" class="game col-sm-2" ng-class="game.collection == 'slots' ? 'slot' : 'review'" ng-repeat="game in $ctrl.games">
            <div class="preview" style="background-image: url( {{ game.thumbnail }} );"></div>
            <h5>{{ game.name }} <span class="glyphicon glyphicon-plus-sign"></span></h5>
        </a>
    </div>
    `
});