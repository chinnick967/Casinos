angular
.module('app')
.service('userService', function ($rootScope, $timeout, $http, messageService, loginService) {
    this.loginService = loginService;
    this.messageService = messageService;

    this.betaFeature = function() {
        this.messageService.message("Gambler's Update is currently in early beta and this feature will be available in a later release!");
    }

    this.banUser = function(username) {
        // bans user based off their username, IP bans as well
        $.post("/post-data", {name: username, collection: "bans"}, function(res) {
            if (res.status == true) {
                this.data.getAllData();
                messageService.message("The user " + username + " has been banned.");
            } else {
                messageService.message(res.message);
            }
        }.bind(this));
    }
});