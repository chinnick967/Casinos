angular
.module('app')
.controller('customHeader', function($scope, appData, $location) {
    this.data = appData;
    this.url = $location.url();
    $scope.header = {
        title: "Gambler's Update",
        description: "Gambler's Update",
        keywords: "Gambler's Update",
        indexing: ""
    };

    this.setHeader = function() {
        for (var i = 0; i < this.data["Header"].length; i++) {
            if (this.data["Header"][i].name == this.url) {
                return this.data["Header"][i];
            }
        }

        // default
        return {
            title: "Gambler's Update",
            description: "Gambler's Update",
            keywords: "Gambler's Update",
            indexing: ""
        };
    }

    this.data.load(function() {
        $scope.header = this.setHeader();
        $scope.$on('$routeChangeSuccess', function($event, next, current) { 
            this.url = $location.url();
            $scope.header = this.setHeader();
        }.bind(this));
    }.bind(this));
    
});
/*.component('customHeader', {
    controller: function ($scope, appData, $location) {
        this.data = appData;
        this.url = $location.url();
        this.header = "";

        this.getHeader = function() {
            var array = this.data["Header"];
            for (var i = 0; i < array.length; i++) {
                if (array[i].name == this.url) {
                    return array[i].styles;
                }
            }
            return "";
        }

        this.addToHead = function() {
            $('head')[0].append("<link />");
        }

        this.data.load(function() {
            this.header = this.getHeader();
            this.addToHead();
        }.bind(this));
        
    },
    controllerAs: "$ctrl",
    template: `               
        
    `
});*/