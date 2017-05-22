angular
    .module('app', ["ngRoute"])
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
                                        {"name": "Casinos", "URL": "facebook.com"},
                                        {"name": "Bonuses", "URL": "google.com"},
                                        {"name": "Casinos", "URL": "facebook.com"},
                                        {"name": "Casinos", "URL": "facebook.com"},
                                        {"name": "Casinos", "URL": "facebook.com"}
                                    ]
                                },
                                {
                                    "category" : "Rawr",
                                    "items" : [
                                        {"name": "Casinos", "URL": "facebook.com"},
                                        {"name": "Bonuses", "URL": "google.com"},
                                        {"name": "Casinos", "URL": "facebook.com"},
                                        {"name": "Casinos", "URL": "facebook.com"}
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "Casinos",
                            "URL" : "facebook.com"
                        },
                        {
                            "name": "Slots",
                            "URL" : "facebook.com"
                        },
                        {
                            "name": "Bonuses",
                            "URL" : "facebook.com"
                        },
                        {
                            "name": "Games",
                            "URL" : "facebook.com"
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