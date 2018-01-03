angular
    .module('app')
    .config(function($routeProvider) {
        $routeProvider
            .when("/", {
                templateUrl: "templates/home.html"
            })
            .when("/account", {
                templateUrl: "templates/account.html"
            })
            .when("/admin", {
                templateUrl: "templates/account.html"
            })
            .when("/casino/:casinoName", {
                templateUrl: "templates/casino.html"
            })
            .when("/bonus/:bonusId", {
                templateUrl: "templates/bonus.html"
            })
            .when("/toplists/:collection/:sort/:filter/:value/:limit/:pagestart", {
                templateUrl: "templates/lists.html",
                controller: 'listsController'
            })
            .when("/article/:id", {
                templateUrl: "templates/article.html",
            })
            .when("/games/:filter?", {
                templateUrl: "templates/games.html"
            })
            .when("/slots/:slot", {
                templateUrl: "templates/slots.html"
            })
            .when("/pages/:title", {
                templateUrl: "templates/info.html"
            });
    });