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
            });
    });