angular
.module('app')
.component('logoutButton', {
    controller: function ($scope, $http, appData, loginService) {
        this.data = appData;
        this.loginService = loginService;
    },
    controllerAs: "$ctrl",
    template: `               
        <div class="wrapper" ng-click="$ctrl.loginService.logout()">Logout</div>
    `
});