angular
    .module('app')
    .component('message', {
        scope: {
            message: "=",
            active: "="
        },
        controller: function ($scope, messageService) {
            this.messageService = messageService;
            this.message = this.messageService.message;
            this.active = this.messageService.active;
        },
        controllerAs: "$ctrl",
        template: `               
            <div id="overlay" ng-class="{visible : $ctrl.messageService.active == true}"></div>
            <div id="message" ng-class="{active : $ctrl.messageService.active == true}">
                <div id="title">Message</div>
                <div id="content">{{ $ctrl.messageService.msg }}</div>
                <div id="message-button" ng-click="$ctrl.messageService.close()">Okay</div>
            </div>
        `
    });