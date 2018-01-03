angular
.module('app')
.component('globalCss', {
    controller: function ($scope, appData) {
        this.data = appData;
    },
    controllerAs: "$ctrl",
    template: `               
        <style>
            {{ $ctrl.data["Global CSS"][0].styles }}
        </style>
    `
});