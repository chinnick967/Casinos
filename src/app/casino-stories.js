angular
    .module('app')
    .component('casinoStories', {
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
            <h2 class="section-title">Recent Casino Stories <a href="#" class="link"><span>View more</span><span class="glyphicon glyphicon-chevron-right"></span></a></h2>
            <div class="stories-container">
                <div class="story col-sm-4">
                    <article>
                        <div class="story-content">
                            <div class="article-img"></div>
                            <h4>THE DAWN OF A DEDICATED APPS ERA IN THE ONLINE CASINO INDUSTRY</h4>
                            <div class="divider"></div>
                            <p>You may be wondering what makes online slots so much fun or what you need to know before playing for the first time? We've ... You may be wondering what makes online slots so much fun or what you need to know before playing for the first time? We've ...</p>
                        </div>
                    </article>
                </div>
                <div class="story col-sm-4">
                    <article>
                        <div class="story-content">
                            <div class="article-img"></div>
                            <h4>THE DAWN OF A DEDICATED APPS ERA IN THE ONLINE CASINO INDUSTRY</h4>
                            <div class="divider"></div>
                            <p>You may be wondering what makes online slots so much fun or what you need to know before playing for the first time? We've ... You may be wondering what makes online slots so much fun or what you need to know before playing for the first time? We've ...</p>
                        </div>
                    </article>
                </div>
                <div class="story col-sm-4">
                    <article>
                        <div class="story-content">
                            <div class="article-img"></div>
                            <h4>THE DAWN OF A DEDICATED APPS ERA IN THE ONLINE CASINO INDUSTRY</h4>
                            <div class="divider"></div>
                            <p>You may be wondering what makes online slots so much fun or what you need to know before playing for the first time? We've ... You may be wondering what makes online slots so much fun or what you need to know before playing for the first time? We've ...</p>
                        </div>
                    </article>
                </div>
                <div class="story col-sm-4">
                    <article>
                        <div class="story-content">
                            <div class="article-img"></div>
                            <h4>THE DAWN OF A DEDICATED APPS ERA IN THE ONLINE CASINO INDUSTRY</h4>
                            <div class="divider"></div>
                            <p>You may be wondering what makes online slots so much fun or what you need to know before playing for the first time? We've ... You may be wondering what makes online slots so much fun or what you need to know before playing for the first time? We've ...</p>
                        </div>
                    </article>
                </div>
                <div class="story col-sm-4">
                    <article>
                        <div class="story-content">
                            <div class="article-img"></div>
                            <h4>THE DAWN OF A DEDICATED APPS ERA IN THE ONLINE CASINO INDUSTRY</h4>
                            <div class="divider"></div>
                            <p>You may be wondering what makes online slots so much fun or what you need to know before playing for the first time? We've ... You may be wondering what makes online slots so much fun or what you need to know before playing for the first time? We've ...</p>
                        </div>
                    </article>
                </div>
                <div class="story col-sm-4">
                    <article>
                        <div class="story-content">
                            <div class="article-img"></div>
                            <h4>THE DAWN OF A DEDICATED APPS ERA IN THE ONLINE CASINO INDUSTRY</h4>
                            <div class="divider"></div>
                            <p>You may be wondering what makes online slots so much fun or what you need to know before playing for the first time? We've ... You may be wondering what makes online slots so much fun or what you need to know before playing for the first time? We've ...</p>
                        </div>
                    </article>
                </div>
            </div>
        `
    });