angular
.module('app')
.service('userService', function ($rootScope, $timeout, $http, messageService, loginService) {
    this.loginService = loginService;
    this.messageService = messageService;

    this.betaFeature = function() {
        this.messageService.message("Gambler's Update is currently in early beta and this feature will be available in a later release!");
    }
});