angular
    .module('app')
    .service('loginService', function ($timeout, $http, messageService) {
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
            var self = this;
            window.FB.login(function(response) {
                window.FB.api('/me?fields=id,name,email', function(response) {
                    //self.createCookie("user", JSON.stringify(response), 360);
                    self.user = response;
                });
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
                    messageService.message("You have successfully logged into your account.");
                } else {
                    messageService.message(res.validationMessage);
                }
            }.bind(self))
        }.bind(this);

        this.checkLoginStatus = function() {
            console.log("checking");
            // check for login cookie
            /*var user = JSON.parse(this.readCookie("user"));
            if (user != null) {
                this.user = user;
            }

            console.log(user);
            // check facebook login 
                // return user's info from facebook as login credentials
            window.FB.api('/me?fields=id,name,email', function(response) {
                console.log("logged into facebook");
                self.user = response;
            });
            
            // return login json */
        }.bind(this);

        this.createAccount = function(input_username, input_password) {
            var self = this;
            $.post( "/createAccount", { username: input_username, password: input_password }, function(res) {
                messageService.message(res.message);
                if (res.status == true) {
                    self.user = res.username;
                    console.log(self);
                }
            }.bind(self));
        }.bind(this);

        this.validateAccount = function(username, password, callback) {
            $.post( "/validateAccount", { username: username, password: password }, function(res) {
                callback(res);
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
            createCookie(name,"",-1);
        }

    });