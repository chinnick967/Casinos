angular
    .module('app', ["ngRoute", "ngAnimate", "ngSanitize", '720kb.socialshare'])
    .directive('navigation', function navigation() {
        return {
            restrict: "E",
            scope: {},
            controller: function($scope) {
                this.showNavbar = false;
                this.lastSelected = undefined;
                this.routeNavigation =  [
                        {
                            "name": "Top Lists",
                            "categories": [
                                {
                                    "category" : "Casinos",
                                    "items" : [
                                        {"name": "Top 10 Casinos", "URL": "/#!/toplists/casinos/ratings/all/any/10/1"},
                                        {"name": "Best Jackpot", "URL": "/#!/toplists/casinos/ratings/games/Jackpot/10/1"},
                                        {"name": "Latest Casinos", "URL": "/#!/toplists/casinos/latest/all/any/100/1"}
                                    ]
                                },
                                {
                                    "category" : "Bonuses",
                                    "items" : [
                                        {"name": "Latest Bonuses", "URL": "/#!/toplists/bonuses/latest/all/any/100/1"},
                                        {"name": "Welcome Bonus", "URL": "/#!/toplists/bonuses/latest/type/Welcome%20Bonus/100/1"},
                                        {"name": "Promotion Bonus", "URL": "/#!/toplists/bonuses/latest/type/Promotion%20Bonus/100/1"}
                                    ]
                                },
                                {
                                    "category" : "Games",
                                    "items" : [
                                        {"name": "Play Here", "URL": "/#!/games/Play"},
                                        {"name": "Latest Games", "URL": "/#!/games"}
                                    ]
                                },
                                {
                                    "category" : "Mobile",
                                    "items" : [
                                        {"name": "Mobile Casinos", "URL": "/#!/toplists/casinos/ratings/mobile/true/100/1"},
                                        {"name": "Mobile Bonuses", "URL": "/#!/toplists/bonuses/latest/mobile/true/100/1"},
                                        {"name": "Mobile Games", "URL": "/#!/toplists/casinos/ratings/mobile/true/10/1"}
                                    ]
                                },
                            ]
                        },
                        {
                            "name": "Casinos",
                            "categories": [
                                {
                                    "category" : "Newest",
                                    "items" : [
                                        {"name": "Casinos", "URL": "/#!/toplists/casinos/latest/all/any/100/1"},
                                        {"name": "Mobile-Friendly", "URL": "/#!/toplists/casinos/latest/mobile/true/100/1"}
                                    ]
                                },
                                {
                                    "category" : "Countries",
                                    "items" : [
                                        {"name": "United Kingdom", "URL": "/#!/toplists/casinos/ratings/countries/United_Kingdom/100/1"},
                                        {"name": "United States", "URL": "/#!/toplists/casinos/ratings/countries/United_States/100/1"},
                                        {"name": "Sweden", "URL": "/#!/toplists/casinos/ratings/countries/Sweden/100/1"},
                                        {"name": "Germany", "URL": "/#!/toplists/casinos/ratings/countries/Germany/100/1"},
                                        {"name": "Japan", "URL": "/#!/toplists/casinos/ratings/countries/Japan/100/1"},
                                        {"name": "Finland", "URL": "/#!/toplists/casinos/ratings/countries/Finland/100/1"},
                                        {"name": "International", "URL": "/#!/toplists/casinos/ratings/all/any/100/1"}
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "Slots",
                            "URL" : "/#!/games/3DSlots"
                        },
                        {
                            "name": "Bonuses",
                            "categories": [
                                {
                                    "category" : "Newest",
                                    "items" : [
                                        {"name": "Latest Bonuses", "URL": "/#!/toplists/bonuses/latest/all/any/100/1"},
                                        {"name": "Mobile-Friendly", "URL": "/#!/toplists/bonuses/latest/mobile/true/100/1"}
                                    ]
                                },
                                {
                                    "category" : "Types",
                                    "items" : [
                                        {"name": "Welcome Bonus", "URL": "/#!/toplists/bonuses/latest/type/Welcome%20Bonus/100/1"},
                                        {"name": "Promotion Bonus", "URL": "/#!/toplists/bonuses/latest/type/Promotion%20Bonus/100/1"},
                                        {"name": "Sign-up Bonus", "URL": "/#!/toplists/bonuses/latest/type/Sign-up%20Bonus/100/1"},
                                        {"name": "Deposit Bonus", "URL": "/#!/toplists/bonuses/latest/type/Deposit%20Bonus/100/1"},
                                        {"name": "Free Spin Bonus", "URL": "/#!/toplists/bonuses/latest/type/Free%20Spin%20Bonus/100/1"},
                                        {"name": "Loyalty Bonus", "URL": "/#!/toplists/bonuses/latest/type/Loyalty%20Bonus/100/11"},
                                        {"name": "Referral Bonus", "URL": "/#!/toplists/bonuses/latest/type/Referral%20Bonus/100/1"},
                                        {"name": "Highly Rated", "URL": "/#!/toplists/bonuses/ratings/all/any/100/1"}
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "Games",
                            "URL" : "/#!/games"
                        }
                    
                    ];
                this.openNavbar = function (event, string) {
                    //this.showNavbar = true;
                    this.lastSelected = string;
                }
                this.hideNavbar = function () {
                    this.showNavbar = false;
                    this.lastSelected = undefined;
                }
                this.currentMenu = function() {
                    var ctrl = this;
                    var arr = this.routeNavigation.find(function(item) { return item.name == ctrl.lastSelected; });
                    return arr.categories;
                }
            },
            controllerAs: "$ctrl",
            template: `            
                <nav class="navbar navbar-inverse" ng-mouseleave="$ctrl.hideNavbar()">
                    <div class="container-fluid">
                        <div class="navbar-header">
                            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navigation"><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></button>
                            <a href="#"><img class="navbar-brand" src="/assets/Logo-small.png" /></a>
                        </div>
                        <div class="collapse navbar-collapse" id="navigation">
                        <ul class="nav navbar-nav">
                            <li class="menu-item" ng-repeat="route in $ctrl.routeNavigation" ng-class="{selected : $ctrl.lastSelected == route.name, dropdown : route.categories != undefined}" ng-mouseenter="$ctrl.openNavbar($event, route.name)">
                            <a href="{{route.URL}}" ng-if="route.categories == undefined">{{route.name}}</a>
                            <a href="" class="dropdown-toggle" data-toggle="dropdown" ng-if-start="route.categories != undefined">{{route.name}}</a>
                            <ul class="dropdown-menu" ng-if-end>
                                <div ng-repeat="category in route.categories" style="display: inline-block;">
                                    <div class="section" ng-repeat="item in category.items track by $index" ng-if="$index % 3 == 0">
                                        <li class="nav-header" ng-if="$index == 0">{{category.category}}</li>
                                        <li class="nav-header" ng-if="$index != 0"></li>
                                        <a ng-href="{{category.items[$index].URL}}"><li>{{category.items[$index].name}}<span class="arrow glyphicon glyphicon-chevron-right"></span></li></a>
                                        <a ng-href="{{category.items[$index + 1].URL}}" ng-if="category.items[$index + 1] != undefined"><li>{{category.items[$index + 1].name}}<span class="arrow glyphicon glyphicon-chevron-right"></span></li></a>
                                        <a ng-href="{{category.items[$index + 2].URL}}" ng-if="category.items[$index + 2] != undefined"><li>{{category.items[$index + 2].name}}<span class="arrow glyphicon glyphicon-chevron-right"></span></li></a>
                                    </div>
                                </div>
                            </ul>
                            </li>
                        </ul>
                        <login></login>
                        
                        </div>
                    </div>
                </nav>
            `
            // link: function($scope, $element, $attrs, $ctrl) {
                /*<li class="menu-item" ng-class="{selected : $ctrl.lastSelected == 'Top Lists'}" ng-mouseenter="$ctrl.openNavbar($event, 'Top Lists')" >Top Lists</li>
                        <li class="menu-item" ng-class="{selected : $ctrl.lastSelected == 'Casinos'}" ng-mouseenter="$ctrl.openNavbar($event, 'Casinos')">Casinos</li>
                        <li class="menu-item" ng-class="{selected : $ctrl.lastSelected == 'Slots'}" ng-mouseenter="$ctrl.openNavbar($event, 'Slots')">Slots</li>
                        <li class="menu-item" ng-class="{selected : $ctrl.lastSelected == 'Bonuses'}" ng-mouseenter="$ctrl.openNavbar($event, 'Bonuses')">Bonuses</li>
                        <li class="menu-item" ng-class="{selected : $ctrl.lastSelected == 'Games'}" ng-mouseenter="$ctrl.openNavbar($event, 'Games')">Games</li>*/
            //     addListeners($scope);
                
            //     function addListeners($scope) {
            //         hoverListener($scope);
            //     }

            //     function hoverListener($scope) {
                    
            //         document.addEventListener("mouseover", function() {
            //             var node = event.target;
            //             menus = document.getElementsByClassName("navbar-menu");
            //             if (node.classList.contains("menu-item")) {
            //                 menuSelect(node);
            //                 for (var i = 0; i < menus.length; i++) {
            //                     $scope.lastSelected = node.innerHTML;
            //                     menus[i].style.display = "block";
            //                 }
            //             } else if (node.classList.contains("navbar-menu")) {
            //                 for (var i = 0; i < menus.length; i++) {
            //                     menus[i].style.display = "block";
            //                 }
            //             } else {
            //                 removeMenuSelections();
            //                 for (var i = 0; i < menus.length; i++) {
            //                     $scope.lastSelected = undefined;
            //                     menus[i].style.display = "none";
            //                 }
            //             }
            //         });
            //     } 

            //     function menuSelect(node) {
            //         removeMenuSelections();
            //         node.className += " selected";
            //         $scope.lastSelected = node.innerHTML;
            //     }

            //     function removeMenuSelections() {
            //         var menuItems = document.getElementsByClassName("menu-item");
            //         for (var i = 0; i < menuItems.length; i++) {
            //             menuItems[i].classList.remove("selected");
            //         }
            //     }

            // }
        };
    });