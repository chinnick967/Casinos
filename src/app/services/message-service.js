angular
    .module('app')
    .service('messageService', function ($rootScope) {
        this.msg = "";
        this.active = false;
        
        this.message = function(msg) {
            this.msg = msg;
            this.active = true;
            $rootScope.$apply();
        }.bind(this);

        this.close = function(msg) {
            this.active = false;
        }.bind(this);

    });