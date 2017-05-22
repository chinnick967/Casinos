angular
    .module('app')
    .service('casinos', function ($timeout, $http) {

        this.casinosArray = undefined;
        var self = this;

        this.getCasinos = function () {
            return $http({
                method: 'GET',
                url: 'http://localhost:3000/get-casinos'
            })
                .then(function successCallback(response) {
                    self.casinosArray = response.data;
                    return response.data;
                })
                .catch(function (res) {
                    
                    throw res;
                })
        }

    });