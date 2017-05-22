angular
    .module('app')
    .component('topCategories', {
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
            <h2 class="section-title">Top Casinos <a href="#" class="link"><span>View more</span><span class="glyphicon glyphicon-chevron-right"></span></a></h2>
            <p>Don’t miss out on the very best freebies and bonuses at your favourite online casinos! A wide choice of casino bonuses can be found at CasinoTopsOnline.com, including latest exclusive offers, slots bonus codes, free spins, mobile casino no deposit bonuses and many more.</p>
            <div class="bonuses-container">
                <div class="listing">
                    <h3>United States</h3>
                    <div class="col-sm-9"><img class="thumbnail" src="https://www.casinotopsonline.com/img/objects/file_278340_1491130117.png" />
                        <div class="info">
                            <a href="#"><h3>Guts Casino Bonus</h3></a>
                            <div class="countries">
                                <img class="country" src="https://www.casinotopsonline.com/img/objects/file_843636_1445956432.png" />
                                <img class="country" src="https://www.casinotopsonline.com/img/objects/file_843636_1445956432.png" />
                                <img class="country" src="https://www.casinotopsonline.com/img/objects/file_843636_1445956432.png" />
                            </div>
                            <div class="stars">
                                <span class="glyphicon glyphicon-star"></span>
                                <span class="glyphicon glyphicon-star"></span>
                                <span class="glyphicon glyphicon-star"></span>
                                <span class="glyphicon glyphicon-star"></span>
                                <span class="glyphicon glyphicon-star"></span>
                            </div>
                        </div>
                    </div>
                    <div class="buttons-container col-sm-3">
                        <a href="#" class="top-button button btn-hover">More Info</a>
                        <a href="#" class="bottom-button button btn-hover">Play Now</a>
                    </div>
                </div>
                <div class="listing">
                    <h3>United States</h3>
                    <div class="col-sm-9"><img class="thumbnail" src="https://www.casinotopsonline.com/img/objects/file_278340_1491130117.png" />
                        <div class="info">
                            <a href="#"><h3>Guts Casino Bonus</h3></a>
                            <div class="countries">
                                <img class="country" src="https://www.casinotopsonline.com/img/objects/file_843636_1445956432.png" />
                                <img class="country" src="https://www.casinotopsonline.com/img/objects/file_843636_1445956432.png" />
                                <img class="country" src="https://www.casinotopsonline.com/img/objects/file_843636_1445956432.png" />
                            </div>
                            <div class="stars">
                                <span class="glyphicon glyphicon-star"></span>
                                <span class="glyphicon glyphicon-star"></span>
                                <span class="glyphicon glyphicon-star"></span>
                                <span class="glyphicon glyphicon-star"></span>
                                <span class="glyphicon glyphicon-star"></span>
                            </div>
                        </div>
                    </div>
                    <div class="buttons-container col-sm-3">
                        <a href="#" class="top-button button btn-hover">More Info</a>
                        <a href="#" class="bottom-button button btn-hover">Play Now</a>
                    </div>
                </div>
                <div class="listing">
                    <h3>United States</h3>
                    <div class="col-sm-9"><img class="thumbnail" src="https://www.casinotopsonline.com/img/objects/file_278340_1491130117.png" />
                        <div class="info">
                            <a href="#"><h3>Guts Casino Bonus</h3></a>
                            <div class="countries">
                                <img class="country" src="https://www.casinotopsonline.com/img/objects/file_843636_1445956432.png" />
                                <img class="country" src="https://www.casinotopsonline.com/img/objects/file_843636_1445956432.png" />
                                <img class="country" src="https://www.casinotopsonline.com/img/objects/file_843636_1445956432.png" />
                            </div>
                            <div class="stars">
                                <span class="glyphicon glyphicon-star"></span>
                                <span class="glyphicon glyphicon-star"></span>
                                <span class="glyphicon glyphicon-star"></span>
                                <span class="glyphicon glyphicon-star"></span>
                                <span class="glyphicon glyphicon-star"></span>
                            </div>
                        </div>
                    </div>
                    <div class="buttons-container col-sm-3">
                        <a href="#" class="top-button button btn-hover">More Info</a>
                        <a href="#" class="bottom-button button btn-hover">Play Now</a>
                    </div>
                </div>
                <div class="listing">
                    <h3>United States</h3>
                    <div class="col-sm-9"><img class="thumbnail" src="https://www.casinotopsonline.com/img/objects/file_278340_1491130117.png" />
                        <div class="info">
                            <a href="#"><h3>Guts Casino Bonus</h3></a>
                            <div class="countries">
                                <img class="country" src="https://www.casinotopsonline.com/img/objects/file_843636_1445956432.png" />
                                <img class="country" src="https://www.casinotopsonline.com/img/objects/file_843636_1445956432.png" />
                                <img class="country" src="https://www.casinotopsonline.com/img/objects/file_843636_1445956432.png" />
                            </div>
                            <div class="stars">
                                <span class="glyphicon glyphicon-star"></span>
                                <span class="glyphicon glyphicon-star"></span>
                                <span class="glyphicon glyphicon-star"></span>
                                <span class="glyphicon glyphicon-star"></span>
                                <span class="glyphicon glyphicon-star"></span>
                            </div>
                        </div>
                    </div>
                    <div class="buttons-container col-sm-3">
                        <a href="#" class="top-button button btn-hover">More Info</a>
                        <a href="#" class="bottom-button button btn-hover">Play Now</a>
                    </div>
                </div>
                <div class="listing">
                    <h3>United States</h3>
                    <div class="col-sm-9"><img class="thumbnail" src="https://www.casinotopsonline.com/img/objects/file_278340_1491130117.png" />
                        <div class="info">
                            <a href="#"><h3>Guts Casino Bonus</h3></a>
                            <div class="countries">
                                <img class="country" src="https://www.casinotopsonline.com/img/objects/file_843636_1445956432.png" />
                                <img class="country" src="https://www.casinotopsonline.com/img/objects/file_843636_1445956432.png" />
                                <img class="country" src="https://www.casinotopsonline.com/img/objects/file_843636_1445956432.png" />
                            </div>
                            <div class="stars">
                                <span class="glyphicon glyphicon-star"></span>
                                <span class="glyphicon glyphicon-star"></span>
                                <span class="glyphicon glyphicon-star"></span>
                                <span class="glyphicon glyphicon-star"></span>
                                <span class="glyphicon glyphicon-star"></span>
                            </div>
                        </div>
                    </div>
                    <div class="buttons-container col-sm-3">
                        <a href="#" class="top-button button btn-hover">More Info</a>
                        <a href="#" class="bottom-button button btn-hover">Play Now</a>
                    </div>
                </div>
                <div class="listing">
                    <h3>United States</h3>
                    <div class="col-sm-9"><img class="thumbnail" src="https://www.casinotopsonline.com/img/objects/file_278340_1491130117.png" />
                        <div class="info">
                            <a href="#"><h3>Guts Casino Bonus</h3></a>
                            <div class="countries">
                                <img class="country" src="https://www.casinotopsonline.com/img/objects/file_843636_1445956432.png" />
                                <img class="country" src="https://www.casinotopsonline.com/img/objects/file_843636_1445956432.png" />
                                <img class="country" src="https://www.casinotopsonline.com/img/objects/file_843636_1445956432.png" />
                            </div>
                            <div class="stars">
                                <span class="glyphicon glyphicon-star"></span>
                                <span class="glyphicon glyphicon-star"></span>
                                <span class="glyphicon glyphicon-star"></span>
                                <span class="glyphicon glyphicon-star"></span>
                                <span class="glyphicon glyphicon-star"></span>
                            </div>
                        </div>
                    </div>
                    <div class="buttons-container col-sm-3">
                        <a href="#" class="top-button button btn-hover">More Info</a>
                        <a href="#" class="bottom-button button btn-hover">Play Now</a>
                    </div>
                </div>
                <div class="listing">
                    <h3>United States</h3>
                    <div class="col-sm-9"><img class="thumbnail" src="https://www.casinotopsonline.com/img/objects/file_278340_1491130117.png" />
                        <div class="info">
                            <a href="#"><h3>Guts Casino Bonus</h3></a>
                            <div class="countries">
                                <img class="country" src="https://www.casinotopsonline.com/img/objects/file_843636_1445956432.png" />
                                <img class="country" src="https://www.casinotopsonline.com/img/objects/file_843636_1445956432.png" />
                                <img class="country" src="https://www.casinotopsonline.com/img/objects/file_843636_1445956432.png" />
                            </div>
                            <div class="stars">
                                <span class="glyphicon glyphicon-star"></span>
                                <span class="glyphicon glyphicon-star"></span>
                                <span class="glyphicon glyphicon-star"></span>
                                <span class="glyphicon glyphicon-star"></span>
                                <span class="glyphicon glyphicon-star"></span>
                            </div>
                        </div>
                    </div>
                    <div class="buttons-container col-sm-3">
                        <a href="#" class="top-button button btn-hover">More Info</a>
                        <a href="#" class="bottom-button button btn-hover">Play Now</a>
                    </div>
                </div>
                <div class="listing">
                    <h3>United States</h3>
                    <div class="col-sm-9"><img class="thumbnail" src="https://www.casinotopsonline.com/img/objects/file_278340_1491130117.png" />
                        <div class="info">
                            <a href="#"><h3>Guts Casino Bonus</h3></a>
                            <div class="countries">
                                <img class="country" src="https://www.casinotopsonline.com/img/objects/file_843636_1445956432.png" />
                                <img class="country" src="https://www.casinotopsonline.com/img/objects/file_843636_1445956432.png" />
                                <img class="country" src="https://www.casinotopsonline.com/img/objects/file_843636_1445956432.png" />
                            </div>
                            <div class="stars">
                                <span class="glyphicon glyphicon-star"></span>
                                <span class="glyphicon glyphicon-star"></span>
                                <span class="glyphicon glyphicon-star"></span>
                                <span class="glyphicon glyphicon-star"></span>
                                <span class="glyphicon glyphicon-star"></span>
                            </div>
                        </div>
                    </div>
                    <div class="buttons-container col-sm-3">
                        <a href="#" class="top-button button btn-hover">More Info</a>
                        <a href="#" class="bottom-button button btn-hover">Play Now</a>
                    </div>
                </div>
                <div class="listing">
                    <h3>United States</h3>
                    <div class="col-sm-9"><img class="thumbnail" src="https://www.casinotopsonline.com/img/objects/file_278340_1491130117.png" />
                        <div class="info">
                            <a href="#"><h3>Guts Casino Bonus</h3></a>
                            <div class="countries">
                                <img class="country" src="https://www.casinotopsonline.com/img/objects/file_843636_1445956432.png" />
                                <img class="country" src="https://www.casinotopsonline.com/img/objects/file_843636_1445956432.png" />
                                <img class="country" src="https://www.casinotopsonline.com/img/objects/file_843636_1445956432.png" />
                            </div>
                            <div class="stars">
                                <span class="glyphicon glyphicon-star"></span>
                                <span class="glyphicon glyphicon-star"></span>
                                <span class="glyphicon glyphicon-star"></span>
                                <span class="glyphicon glyphicon-star"></span>
                                <span class="glyphicon glyphicon-star"></span>
                            </div>
                        </div>
                    </div>
                    <div class="buttons-container col-sm-3">
                        <a href="#" class="top-button button btn-hover">More Info</a>
                        <a href="#" class="bottom-button button btn-hover">Play Now</a>
                    </div>
                </div>
                <div class="listing">
                    <h3>United States</h3>
                    <div class="col-sm-9"><img class="thumbnail" src="https://www.casinotopsonline.com/img/objects/file_278340_1491130117.png" />
                        <div class="info">
                            <a href="#"><h3>Guts Casino Bonus</h3></a>
                            <div class="countries">
                                <img class="country" src="https://www.casinotopsonline.com/img/objects/file_843636_1445956432.png" />
                                <img class="country" src="https://www.casinotopsonline.com/img/objects/file_843636_1445956432.png" />
                                <img class="country" src="https://www.casinotopsonline.com/img/objects/file_843636_1445956432.png" />
                            </div>
                            <div class="stars">
                                <span class="glyphicon glyphicon-star"></span>
                                <span class="glyphicon glyphicon-star"></span>
                                <span class="glyphicon glyphicon-star"></span>
                                <span class="glyphicon glyphicon-star"></span>
                                <span class="glyphicon glyphicon-star"></span>
                            </div>
                        </div>
                    </div>
                    <div class="buttons-container col-sm-3">
                        <a href="#" class="top-button button btn-hover">More Info</a>
                        <a href="#" class="bottom-button button btn-hover">Play Now</a>
                    </div>
                </div>
            </div>
        `
    });