angular
    .module('app')
    .component('topCategories', {
        controller: function ($scope, $http, appData) {
            this.data = appData;
        },
        controllerAs: "$ctrl",
        template: ` 
            <edit style="top: 90px; left: -60px;" collection="html" name="topcategories">
                <textarea type="text" ng-model="$ctrl.form.text" placeholder="Heading <h1> || Sub-Heading <h2> || Paragraph <p> (or hit enter) || Bold Red <b> || Italicized <i> || Link <a href>"></textarea>
            </edit>                   
            <h2 class="section-title">Top Casinos <a href="#" class="link"><span>View more</span><span class="glyphicon glyphicon-chevron-right"></span></a></h2>
            <p ng-bind-html="$ctrl.data.html['topcategories'].text"></p>
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