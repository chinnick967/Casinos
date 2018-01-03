angular
    .module('app')
    .component('latestArticles', {
        controller: function (appData) {
            this.data = appData;
            this.articles = [];

            this.checkDate = function(published) {
                if (new Date(published) <= new Date()) {
                    return true;
                }
                return false;
            }

            this.data.load(function() {
                var articles = [];
                // get rid of any unpublished articles
                for (var i = 0; i < this.data.articles.length; i++) {
                    if (this.data.articles[i].published) {
                        articles.push(this.data.articles[i]);
                    }
                }
                // sort the articles by publish date/time
                articles.sort(function(a,b) {
                    return new Date(b.published).getTime() - new Date(a.published).getTime();
                });
                // check for dates that have already happened
                for (var j = 0; j < articles.length; j++) {
                    if (this.checkDate(articles[j].published)) {
                        articles[j].showDate = new Date(articles[j].published).toLocaleDateString();
                        this.articles.push(articles[j]);
                    }
                }
                console.log("lol");
                console.log(this.articles[2]);
            }.bind(this));
        },
        controllerAs: "$ctrl",
        template: `               
            <div class="latest-articles-container">
                <edit style="top: 30px; left: -60px;" collection="html" name="home5">
                    <textarea type="text" ng-model="$ctrl.form.text" placeholder="Heading <h1> || Sub-Heading <h2> || Paragraph <p> (or hit enter) || Bold Red <b> || Italicized <i> || Link <a href>"></textarea>
                </edit>
                <div class="intro-text styles" ng-bind-html="$ctrl.data.html['home5'].text">
                    
                </div>
                <div class="articles">
                    <a href="#" ng-if="$ctrl.articles[0]"><div class="first-article col-sm-8" style="background-image: url({{$ctrl.articles[0].thumbnail}})">
                        <div class="content">
                            <div class="date"><p><span class="glyphicon glyphicon-calendar"></span> {{ $ctrl.articles[0].showDate }}</p></div>
                            <h3>{{$ctrl.articles[0].name}}</h3>
                            <div class="bar"></div>
                            <p>This is the content of the article that will go on and on and then end in three dots as soon as we get too...</p>
                        </div>
                    </div></a>
                    <div class="col-sm-4 article-tab" ng-if="$ctrl.articles[1]">
                        <a href="#"><div class="article col-sm-12" style="background-image: url({{$ctrl.articles[1].thumbnail}})">
                            <div class="content">
                                <div class="date"><p><span class="glyphicon glyphicon-calendar"></span> {{ $ctrl.articles[1].showDate }}</p></div>
                                <h3>{{$ctrl.articles[1].name}}</h3>
                            </div>
                        </div></a>
                    </div>
                    <div class="col-sm-4 article-tab" ng-if="$ctrl.articles[2]">
                        <a href="#"><div class="article col-sm-12" style="background-image: url({{$ctrl.articles[2].thumbnail}})">
                            <div class="content">
                                <div class="date"><p><span class="glyphicon glyphicon-calendar"></span> {{ $ctrl.articles[2].showDate }}</p></div>
                                <h3>{{$ctrl.articles[2].name}}</h3>
                            </div>
                        </div></a>
                    </div>
                    <div class="col-sm-4 article-tab" ng-if="$ctrl.articles[3]">
                        <a href="#"><div class="article col-sm-12" style="background-image: url({{$ctrl.articles[3].thumbnail}})">
                            <div class="content">
                                <div class="date"><p><span class="glyphicon glyphicon-calendar"></span> {{ $ctrl.articles[3].showDate }}</p></div>
                                <h3>{{$ctrl.articles[3].name}}</h3>
                            </div>
                        </div></a>
                    </div>
                </div>
            </div>
        `
    });