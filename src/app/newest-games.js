angular
    .module('app')
    .component('newestGames', {
        controller: function ($scope, $http, casinos) {
            var self = this;
            this.casinos = [];

            this.$onInit = function () {
                casinos.getCasinos()
                    .then(function (casinos) {
                        self.casinos = casinos;
                    });
            }
        },
        controllerAs: "$ctrl",
        template: `               
            <h2 class="section-title">Newest Games <a href="#" class="link"><span>View more</span><span class="glyphicon glyphicon-chevron-right"></span></a></h2>
            <p>Stop by the SpinRoom and enjoy more than 250 free slot games featuring the most vivid, realistic HD graphics! We've scouted out dozens of casino games from the most popular software providers such as Microgaming, NetEnt, Novomatic and IGT among many others.</p>
            <div class="new-games-container">
                <div class="col-sm-4">
                    <div class="game">
                        <img src="http://www.slotconstructor.com/images/games/salty_dog_top.png.jpg" />
                        <h3>Salty Dog <span class="glyphicon glyphicon-plus-sign"></span></h3>
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="game">
                        <img src="http://www.slotconstructor.com/images/games/salty_dog_top.png.jpg" />
                        <h3>Salty Dog <span class="glyphicon glyphicon-plus-sign"></span></h3>
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="game">
                        <img src="http://www.slotconstructor.com/images/games/salty_dog_top.png.jpg" />
                        <h3>Salty Dog <span class="glyphicon glyphicon-plus-sign"></span></h3>
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="game">
                        <img src="http://www.slotconstructor.com/images/games/salty_dog_top.png.jpg" />
                        <h3>Salty Dog <span class="glyphicon glyphicon-plus-sign"></span></h3>
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="game">
                        <img src="http://www.slotconstructor.com/images/games/salty_dog_top.png.jpg" />
                        <h3>Salty Dog <span class="glyphicon glyphicon-plus-sign"></span></h3>
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="game">
                        <img src="http://www.slotconstructor.com/images/games/salty_dog_top.png.jpg" />
                        <h3>Salty Dog <span class="glyphicon glyphicon-plus-sign"></span></h3>
                    </div>
                </div>
                <div class="col-sm-12 free-slots-button">Play Free Slots</div>
            </div>
        `
    });