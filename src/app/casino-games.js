angular
    .module('app')
    .directive('casinoGames', function() {
        return {
            controller: function ($scope, $http, appData) {
                
            },
            controllerAs: "$ctrl",
            template: `               
                <div class="games-container">
                    <a href="/#!/games/VideoSlots" class="col-sm-2 game">
                        <img class="svg" src="/assets/SVG/VideoSlots.svg">
                        <div class="img-title">Video Slots</div>
                    </a>
                    <a href="/#!/games/Roulette" class="col-sm-2 game">
                        <img class="svg" src="/assets/SVG/Roulette.svg">
                        <div class="img-title">Roulette</div>
                    </a>
                    <a href="/#!/games/Blackjack" class="col-sm-2 game">
                        <img class="svg" src="/assets/SVG/Blackjack.svg">
                        <div class="img-title">Blackjack</div>
                    </a>
                    <a href="/#!/games/VideoPoker" class="col-sm-2 game">
                        <img class="svg" src="/assets/SVG/Poker.svg">
                        <div class="img-title">Video Poker</div>
                    </a>
                    <a href="/#!/games/Jackpots" class="col-sm-2 game">
                        <img class="svg" src="/assets/SVG/Jackpot.svg">
                        <div class="img-title">Jackpots</div>
                    </a>
                    <a href="/#!/games/3DSlots" class="col-sm-2 game">
                        <img class="svg" src="/assets/SVG/3DSlots.svg">
                        <div class="img-title">3D Slots</div>
                    </a>
                </div>
            `,
            link: function() {
                $(document).ready(function() {
                    $('img[src$=".svg"]').each(function() {
                        var $img = jQuery(this);
                        var imgURL = $img.attr('src');
                        var attributes = $img.prop("attributes");

                        $.get(imgURL, function(data) {
                            // Get the SVG tag, ignore the rest
                            var $svg = jQuery(data).find('svg');

                            // Remove any invalid XML tags
                            $svg = $svg.removeAttr('xmlns:a');

                            // Loop through IMG attributes and apply on SVG
                            $.each(attributes, function() {
                                $svg.attr(this.name, this.value);
                            });

                            // Replace IMG with SVG
                            $img.replaceWith($svg);
                        }, 'xml');
                    });
                });
            }
        }
    });