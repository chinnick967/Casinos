angular
    .module('app')
    .service('loginService', function ($rootScope, $timeout, $http, $window, messageService) {
        this.user = null;

        window.fbAsyncInit = function() {
            FB.init({
            appId      : '212436662592415',
            status     : true, 
            cookie     : true,
            xfbml      : true,
            oauth      : true,
            version    : 'v2.8'
            });
            FB.AppEvents.logPageView(); 

            this.checkLoginStatus();
        }.bind(this);

        (function(d, s, id){
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) {return;}
            js = d.createElement(s); js.id = id;
            js.src = "//connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));

        this.fbLogin = function() {
            window.FB.login(function(response) {
                window.FB.api('/me?fields=id,name,email', function(response) {
                    this.createCookie("user", JSON.stringify(response), 360);
                    this.user = response;
                }.bind(this));
            });
        }.bind(this);

        this.getUser = function() {
            return this.user;
        }.bind(this);

        this.loginUser = function(username, password) {
            var self = this;
            this.validateAccount(username, password, function (res) {
                if (res.validation) {
                    this.user = res.user;
                    this.createCookie("user", JSON.stringify(this.user), 360);
                    messageService.message("You have successfully logged into your account.");
                    $rootScope.$apply();
                } else {
                    messageService.message(res.validationMessage);
                }
            }.bind(this))
        }.bind(this);

        this.checkLoginStatus = function() {
            if (this.readCookie('user') != null) {
                this.user = JSON.parse(this.readCookie('user'));
            }
        }.bind(this);

        this.logout = function() {
            var user = this.user;
            this.user = null;
            this.eraseCookie('user');
            $window.location.href = '/';
        }

        this.createAccount = function(input_username, input_password) {
            console.log("create");
            var self = this;
            //$http.get("https://ipinfo.io/").then(function (response) {
                $.post( "/createAccount", { username: input_username, password: input_password}, function(res) {
                    messageService.message(res.message);
                    if (res.status == true) {
                        self.user = res.username;
                    }
                }.bind(self));
            //}.bind(this));
        }.bind(this);

        this.validateAccount = function(username, password, callback) {
            $.post( "/validateAccount", { username: username, password: password }, function(res) {
                if (callback) {callback(res) };
            });
        }.bind(this);

        this.createCookie = function(name,value,days) {
            if (days) {
                var date = new Date();
                date.setTime(date.getTime()+(days*24*60*60*1000));
                var expires = "; expires="+date.toGMTString();
            }
            else var expires = "";
            document.cookie = name+"="+value+expires+"; path=/";
        }

        this.readCookie = function(name) {
            var nameEQ = name + "=";
            var ca = document.cookie.split(';');
            for(var i=0;i < ca.length;i++) {
                var c = ca[i];
                while (c.charAt(0)==' ') c = c.substring(1,c.length);
                if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
            }
            return null;
        }

        this.eraseCookie = function(name) {
            this.createCookie(name,"",-1);
        }

        /*$http.get("https://ipinfo.io/").then(function (response) {
            this.user.ip = response.data.ip;
        }.bind(this));*/

        this.checkLoginStatus();

    });