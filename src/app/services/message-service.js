angular
    .module('app')
    .service('messageService', function () {

        this.message = "";
        this.active = false;
        
        this.message = function(msg) {
            this.message = msg;
            this.active = true;
        }.bind(this);

        this.close = function(msg) {
            this.active = false;
        }.bind(this);

    });