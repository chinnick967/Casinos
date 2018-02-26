angular
    .module('app')
    .component('stickyFooter', {
        controller: function (appData, $scope, $http) {
            this.data = appData;
            this.topCasinos;

            this.data.load(function() {
                this.topCasinos = this.data.casinos.sort(function(a,b) {
                    var casino1 = (a.trustRating + a.promoRating + a.qualityRating + a.supportRating) / 4;
                    var casino2 = (b.trustRating + b.promoRating + b.qualityRating + b.supportRating) / 4;

                    return casino1 - casino2;
                });
            }.bind(this));
        },
        controllerAs: "$ctrl",
        template: `     
            <subscription></subscription>      
            <footer class="container-fluid">
                <div class="container">
                    <div class="col-sm-4">
                        <h4>Useful Links</h4>
                        <ul>
                            <li><a href="{{ '/#!/casino/' + $ctrl.topCasinos[0].name }}">{{ $ctrl.topCasinos[0].name }}</a></li>
                            <li><a href="{{ '/#!/casino/' + $ctrl.topCasinos[1].name }}">{{ $ctrl.topCasinos[1].name }}</a></li>
                            <li><a href="{{ '/#!/casino/' + $ctrl.topCasinos[2].name }}">{{ $ctrl.topCasinos[2].name }}</a></li>
                            <li><a href="/#!/games/Play">Play Free Slots</a></li>
                            <li><a href="/#!/toplists/casinos/ratings/all/any/10/1">Top Casino Reviews</a></li>
                            <li><a href="/#!/toplists/casinos/latest/all/any/100/1">Latest Casino Reviews</a></li>
                            <li><a href="/#!/games/SlotReviews">Slot Reviews</a></li>
                        </ul>
                    </div>
                    <div class="col-sm-4">
                        <h4>Gambler's Update</h4>
                        <ul>
                            <li><a href="/#!/pages/aboutus">About Us</a></li>
                            <li><a href="/#!/pages/playsafeguide">Play Safe Guide</a></li>
                            <li><a href="/#!/pages/whychooseus">Gambler's Update</a></li>
                            <li><a href="/#!/pages/termsofuse">Terms of Use</a></li>
                            <li><a href="/#!/pages/privacypolicy">Privacy Policy</a></li>
                            <li><a href="/sitemap.txt" target="_self">Sitemap</a></li>
                        </ul>
                    </div>
                    <div class="col-sm-4">
                        <ul style="padding-top: 20px;">
                            <li class="no-list"><img src="/assets/18.png" style="width: 40px; margin-right: 10px;" /></li>
                            <li class="no-list"><a href="//www.dmca.com/Protection/Status.aspx?ID=1119a818-fb3f-48a0-a49a-802a375ccd42" title="DMCA.com Protection Status" class="dmca-badge"> <img src="//images.dmca.com/Badges/DMCA_logo-grn-btn100w.png?ID=1119a818-fb3f-48a0-a49a-802a375ccd42" alt="DMCA.com Protection Status"></a> <script src="//images.dmca.com/Badges/DMCABadgeHelper.min.js"> </script></li>
                            <li class="no-list"><a href="https://www.begambleaware.org/"><img src="/assets/gambleaware.svg" style="width: 150px;" /></a></li>
                            <li class="no-list"><a href="#"><img src="/assets/Logo-small.png" style="width: 150px;" /></a></li>
                        </ul>
                    </div>
                    <span>All rights reserved © 2017-2017 GamblersUpdate.com</span>
                </div>
            </footer>
        `
    });