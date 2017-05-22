angular
    .module('app')
    .component('stickyFooter', {
        controller: function ($scope, $http, casinos) {
            var self = this;
            this.casinos = [];

            this.$onInit = function () {
                casinos.getCasinos()
                    .then(function (casinos) {
                        self.casinos = casinos;
                    });
            }
        },
        controllerAs: "$ctrl",
        template: `     
            <subscription></subscription>          
            <footer class="container-fluid">
                
            </footer>
        `
    });