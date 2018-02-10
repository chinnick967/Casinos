angular
    .module('app')
    .component('siteArticle', {
        controller: function ($scope, $http, appData, $routeParams) {
            this.data = appData;
            this.url = window.location.href;
            this.id = $routeParams['id'];
            this.article;
            setTimeout(function() {
                console.log(this.article);
            }.bind(this), 3000)
            this.socials = document.getElementById("socials");
            this.scroll = $(window).scrollTop();
            this.socialsTop = this.socials.getBoundingClientRect().top

            window.addEventListener('scroll', function(){ 
                this.socialsScroll();
            }.bind(this));

            this.socialsScroll = function() {
                this.scroll = $(window).scrollTop();
                if (this.scroll >= this.socialsTop) {
                    this.socials.style.marginTop = this.scroll - this.socialsTop + 20 + "px";
                } else {
                    this.socials.style.marginTop = "0";
                }
            }

            this.getArticle = function() {
                for (var i = 0; i < this.data.articles.length; i++) {
                    if (this.id == this.data.articles[i]['_id']) {
                        return this.data.articles[i];
                    }
                }
            }

            this.data.load(function() {
                this.article = this.getArticle();
            }.bind(this));
        },
        controllerAs: "$ctrl",
        scope: {},
        template: `
            <edit style="top: 10px; right: 10px;" collection="articles" name="{{$ctrl.article.name}}">
                <h2>Preview Image</h2>
                <div class="input-container"><input data-model="header" type="file" id="casino-preview" accept="image/*"><label for="casino-preview">Header 880 x 400</label></div>
            </edit>               
            <img class="article-header" src="{{$ctrl.article.header}}" />
            <div class="info-bar">
                <div class="category col-sm-2" ng-class="{ article : $ctrl.article.category == 'article', story : $ctrl.article.category == 'story', news : $ctrl.article.category == 'news' }">{{$ctrl.article.category}}</div>
                <edit style="top: 4px; left: 155px;" collection="articles" name="{{$ctrl.article.name}}">
                    <select ng-model="$ctrl.form.category">
                        <option value="article">Article</option>
                        <option value="story">Story</option>
                        <option value="news">Casino News</option>
                    </select>
                    <div><input ng-model="$ctrl.form.published" type="datetime-local" name="publishdate"><label for="publishdate">Publish Date/Time</label></div>
                </edit>
            </div>
            <div style="position: relative;" class="col-sm-2 no-padding">
                <div id="socials" class="socials">
                    <a class="facebook social" socialshare socialshare-provider="facebook" socialshare-quote="Title" socialshare-url="{{$ctrl.url}}"></a>
                    <a class="twitter social" socialshare socialshare-provider="twitter" socialshare-text="Title" socialshare-hashtags="GamblersUpdate" socialshare-url="{{$ctrl.url}}" socialshare-source="http://www.naifaoregon.org/Resources/Pictures/articles_header.jpg"></a>
                    <a class="google social" socialshare socialshare-provider="google" socialshare-url="{{$ctrl.url}}"></a>
                    <a class="linkedin social" socialshare socialshare-provider="linkedin" socialshare-text="Gamblers Update" socialshare-url="{{$ctrl.url}}" socialshare-description="Title"></a>
                </div>
            </div>
            <div class="col-sm-10 no-padding">
                <h1 class="title" style="min-height: 79px;">{{$ctrl.article.name}}
                    <edit style="top: 26px; right: 10px;" collection="articles" name="{{$ctrl.article.name}}">
                        <textarea type="text" ng-model="$ctrl.form.name" placeholder="Heading <h1> || Sub-Heading <h2> || Paragraph <p> (or hit enter) || Bold Red <b> || Italicized <i> || Link <a href>"></textarea>
                    </edit>
                </h1>
                <article class="styles">{{$ctrl.article.text}}
                    <edit style="top: 50px; right: 10px;" collection="articles" name="{{$ctrl.article.name}}">
                        <textarea type="text" ng-model="$ctrl.form.text" placeholder="Heading <h1> || Sub-Heading <h2> || Paragraph <p> (or hit enter) || Bold Red <b> || Italicized <i> || Link <a href>"></textarea>
                    </edit>
                </article>
            </div>
        `
    });