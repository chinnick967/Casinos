angular
    .module('app')
    .component('latestArticles', {
        controller: function () {

        },
        controllerAs: "$ctrl",
        template: `               
            <div class="latest-articles-container">
                <h1>Latest Casino News, Bonuses, and Ratings</h1>
                <div class="content">
                <p>Welcome to GamblersUpdate.com, the world’s top online casino guide where you can find loads of sweet casino games, unbiased reviews, juicy bonuses and more. Stay connected with the most reputable, safe online casinos on the web. </p>

                    <p> Join Casino Tops Online and get access to some cool features such as: </p>

                    <p> <b>Organise favourite lists:</b> Psst. You can use this feature to create a list of the biggest and most frequent winning options. </p>

                    <p> <b>Automatic Recommendations:</b> Check out our Games and Sites recommended for you here. </p>

                    <p> <b>Setup Notifications:</b> Adjust the settings to your liking and receive the latest online casino bonuses and other news from the world of online casinos. </p>

                    <p> <b>Post Reviews:</b> WIN BIG! As a member of Casino Tops Online you can make your reviews on all the casinos and games featured on the site. Keep an eye on our social media pages and your messages for more info. </p>
                </div>
                <div class="articles">
                    <a href="#"><div class="first-article col-sm-8">
                        <div class="content">
                            <div class="date"><p><span class="glyphicon glyphicon-calendar"></span> April 3, 2017</p></div>
                            <h3>This is my article title</h3>
                            <div class="bar"></div>
                            <p>This is the content of the article that will go on and on and then end in three dots as soon as we get too...</p>
                        </div>
                    </div></a>
                    <div class="col-sm-4 article-tab">
                        <a href="#"><div class="article col-sm-12 ">
                            <div class="content">
                                <div class="date"><p><span class="glyphicon glyphicon-calendar"></span> April 3, 2017</p></div>
                                <h3>This is my article title</h3>
                            </div>
                        </div></a>
                    </div>
                    <div class="col-sm-4 article-tab">
                        <a href="#"><div class="article col-sm-12 ">
                            <div class="content">
                                <div class="date"><p><span class="glyphicon glyphicon-calendar"></span> April 3, 2017</p></div>
                                <h3>This is my article title</h3>
                            </div>
                        </div></a>
                    </div>
                    <div class="col-sm-4 article-tab">
                        <a href="#"><div class="article col-sm-12 ">
                            <div class="content">
                                <div class="date"><p><span class="glyphicon glyphicon-calendar"></span> April 3, 2017</p></div>
                                <h3>This is my article title</h3>
                            </div>
                        </div></a>
                    </div>
                </div>
            </div>
        `
    });