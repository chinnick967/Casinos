angular
    .module('app', [])
    .directive('navigation', function navigation() {
        return {
            controller: function($scope) {
                this.showNavbar = false;
                this.lastSelected = "MyTest";
                this.test = "hello";
                this["Top List"] = [
                    {"Category" : "Casinos", "Items" : [
                        {"Name" : "Casinos", "URL" : "facebook.com"},
                        {"Name" : "Bonuses", "URL" : "google.com"}
                    ]}
                ];
            },
            controllerAs: "$ctrl",
            template: `
                <button ng-click="$ctrl.showNavbar = !$ctrl.showNavbar"></button>
                <div class="top-margin"></div>
                <nav class="navbar">
                    <a class="navbar-brand" herf="#">
                        <img src="http://www.oxfordcasino.com/templates/img/logo-home.png" />
                    </a>
                    <ul class="nav navbar-nav">
                        <li class="menu-item">{{$ctrl.lastSelected}}</li>
                        <li class="menu-item">Casinos</li>
                        <li class="menu-item">Slots</li>
                        <li class="menu-item">Bonuses</li>
                        <li class="menu-item">Slots</li>
                        <li class="menu-item">Games</li>
                    </ul>
                    <div class="navbar-menu" ng-if="$ctrl.showNavbar">
                        <div ng-repeat="x in $scope['Top List']">{{x}}</div>
                    </div>
                </div>
            `,
            // link: function($scope, $element, $attrs, $ctrl) {

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
        }
    });