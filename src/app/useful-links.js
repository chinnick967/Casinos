angular
    .module('app')
    .component('usefulLinks', {
        controller: function (appData) {
            
        },
        controllerAs: "$ctrl",
        template: `      
            <ul aria-label="Top Lists">
                <a href="/#!/toplists/casinos/ratings/all/any/10/1"><li><span class='glyphicon glyphicon-chevron-right'></span>Top 10 Casinos</li></a>
                <a href="/#!/toplists/casinos/ratings/mobile/true/10/1"><li><span class='glyphicon glyphicon-chevron-right'></span>Top 10 Mobile Casinos</li></a>
                <a href="/#!/toplists/casinos/latest/all/any/100/1"><li><span class='glyphicon glyphicon-chevron-right'></span>Latest Casinos</li></a>
                <a href="/#!/toplists/casinos/ratings/games/Jackpot/10/1"><li><span class='glyphicon glyphicon-chevron-right'></span>Best Jackpot Casinos</li></a>
                <a href="/#!/games/SlotReviews"><li><span class='glyphicon glyphicon-chevron-right'></span>Slot Reviews</li></a>
                <a href="/#!/toplists/casinos/latest/all/any/100/1"><li><span class='glyphicon glyphicon-chevron-right'></span>Newest Casinos</li></a>
                <a href="/#!/toplists/casinos/latest/mobile/true/100/1"><li><span class='glyphicon glyphicon-chevron-right'></span>Newest Mobile Casinos</li></a>
            </ul>

            <ul aria-label="Ratings by Country">
                <a href=""><li><span class='glyphicon glyphicon-chevron-right'></span>United Kingdom</li></a>
                <a href=""><li><span class='glyphicon glyphicon-chevron-right'></span>United States</li></a>
                <a href=""><li><span class='glyphicon glyphicon-chevron-right'></span>Sweden</li></a>
                <a href=""><li><span class='glyphicon glyphicon-chevron-right'></span>Germany</li></a>
                <a href=""><li><span class='glyphicon glyphicon-chevron-right'></span>Japan</li></a>
                <a href=""><li><span class='glyphicon glyphicon-chevron-right'></span>Finland</li></a>
                <a href=""><li><span class='glyphicon glyphicon-chevron-right'></span>International</li></a>
            </ul>

            <ul aria-label="Games">
                <a href="/#!/games"><li><span class='glyphicon glyphicon-chevron-right'></span>View All Games</li></a>
                <a href="/#!/games/Mobile"><li><span class='glyphicon glyphicon-chevron-right'></span>Mobile Games</li></a>
                <a href="/#!/games/Play"><li><span class='glyphicon glyphicon-chevron-right'></span>Play Here</li></a>
                <a href="/#!/games/Free"><li><span class='glyphicon glyphicon-chevron-right'></span>Free Games</li></a>
                <a href="/#!/games/Roulette"><li><span class='glyphicon glyphicon-chevron-right'></span>Roulette</li></a>
                <a href="/#!/games/Blackjack"><li><span class='glyphicon glyphicon-chevron-right'></span>Blackjack</li></a>
                <a href="/#!/games/VideoPoker"><li><span class='glyphicon glyphicon-chevron-right'></span>Video Poker</li></a>
            </ul>
        `
    });