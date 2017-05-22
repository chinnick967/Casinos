angular
    .module('app')
    .component('homeSummary', {
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
            <h2 class="section-title">Gamblers Update <a href="#" class="link"><span>View more</span><span class="glyphicon glyphicon-chevron-right"></span></a></h2>
            <div class="testing">
                <h2>Online Casino Guides, Tips, Tactics & Advice</h2>
            <p>CasinoTopsOnline has a team of pro online casino players at hand who gather all the information and resources needed for you to have the most FUN playing at 100% safe, licensed and tested casinos online. Instead of visiting multiple sites to determine whether or not a certain online casino is fit for you, we&rsquo;ve done all the hard work to bring you a list of the <a href="top-10-online-casinos" title="Top 10 Best Online Casinos"><b>best online casinos</b></a> currently available.</p>
<p>All you have to do is sit back, relax and play your favourite online slots and games at any of the top casinos listed on our site. If you are interested in learning more about <a href="/" title="CasinoTopsOnline"><b>online casinos</b></a> you could always take a look at our online casino <a href="faqs" title="Online Casino Frequently Asked Questions"><b>FAQs</b></a> article, tips for beginners, and our safe online gambling guides.</p>
<p>For those who want to up their game there are dozens of casino articles with free systems and strategies readily available for you to explore.<br />
&nbsp;</p>
<h3>Get started</h3>
<p>1. First you have to select your game! We've developed an all-inclusive guide with information and reviews about the top online <a href="casino-games" title="Online Casino Games"><b>casino games</b></a>, including video slots, roulette, blackjack, and video poker.&nbsp;</p>
<p>2. Next you must choose the ideal bonus or promotion for you. Here at CasinoTopsOnline there are a wide range of <a href="casino-bonus-list" title="Latest Online Casino Promotions &amp; Bonuses"><b>casino bonuses</b></a> available. These include the latest exclusive bonuses, slots bonus codes, free spins, mobile casino, no deposit offers, and many more.&nbsp;</p>
<p>3. Finally, it&rsquo;s time to get in on the action! Find your way to our latest casino <a href="casino-reviews" title="Latest Online Casino Reviews"><b>reviews</b></a>, top 10 online casinos list, best high-roller casinos, and the most exclusive online casino venues and take your pick. Information on safe and regulated online casinos in the UK, Europe, Canada, and Internationally are readily available for players to explore.<br />
&nbsp;</p>
<h3>The best online slots</h3>
<p>If your main focus is simply enjoying the latest online casino slots then our expert team can help you find the best online casinos. Mobile players will be pleased to know that we&rsquo;ve also created a list of the best <a href="mobile-slots" title="Latest Mobile Slots"><b>mobile slots</b></a> casinos for Android and iOS devices! Whether you are looking to play for free or win big by betting real money, CasinoTopsOnline has got you covered. Players looking for some free slot action can head over to The SpinRoom where we provide all the information you might need to know about playing slots online for free and real money.</p>
<p>In <a href="the-spinroom" title="Free Slot Games"><b>The SpinRoom</b></a> you&rsquo;ll find a vast array of slots that includes adventure, fantasy, movies, Hollywood, sports, and even naughty favourites like Playboy! Our most popular slots of the moment include Zeus, Book of Ra, Cleopatra, Gladiator, Where&rsquo;s the Gold, and Thunderstruck II.<br />
&nbsp;</p>
<h3>Mobile casino games for Android and iOS</h3>
<p>Mobile casinos are quickly becoming the preferred choice by many and it might even be seen as the way to the future. More and more players are opting to play their favourite casino games on <a href="mobile-casinos" title="Latest Mobile Casino Reviews"><b>mobile</b></a> devices as it allows them to play from anywhere at any time. &nbsp;</p>
<p>The most popular online casinos are those supporting Android and iOS smartphones and tablets. They also provide players with the latest cutting-edge HD technology for most games. In modern times you can play virtually any online casino game on your device. Whether you prefer table games such as roulette, blackjack, video poker, and bingo or online slots, scratch cards and live dealer casino games, it&rsquo;s all available on your mobile device.&nbsp;</p>
<p>Bookmark CasinoTopsOnline on your phone or tablet for information on the best mobile casinos for your device, exclusive bonuses and no deposit offers, mobile casino game reviews, free mobile slots, and more.<br />
&nbsp;</p>
<h3>Experience the thrill of online live casinos</h3>
<p>Want to feel the adrenaline rush of playing roulette, blackjack or baccarat with a real dealer? At CasinoTopsOnline we&rsquo;ve selected the best online casinos with <a href="live-dealer-casinos" title="Live Dealer Online Casinos"><b>live dealer</b></a> games for you to choose from. &nbsp;</p>
<p>Sharpen your strategy with our handy casino guides and get ready for an authentic experience playing Live Roulette, Live Blackjack and Live Baccarat online games at the best casinos online. Instead of making a tedious trip to your closest land-based casino you can experience the thrill of interacting with your dealers via webcam, you can even tip them, or switch to HD cameras to get you closer to the action.<br />
&nbsp;</p>
            </div>
        `
    });