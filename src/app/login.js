angular
    .module('app')
    .directive('login', function() {
        return {
            controller: function ($scope, loginService, messageService) {
                this.loginService = loginService;
                this.messageService = messageService;
                this.username = undefined;
                this.password= undefined;

            },
            scope: {
                username: "=",
                password: "="
            },
            controllerAs: "ctrl",
            template: `     
                <ul class="nav navbar-nav navbar-right">
                        <li><p id="username" class="navbar-text">{{ctrl.loginService.user.username}}</p></li>
                        <li ng-if="ctrl.loginService.user == null" class="dropdown">
                        <a id="login-button" class="dropdown-toggle" data-toggle="dropdown"><b>Log In or Sign Up</b></a>
                            <ul id="login-dp" class="dropdown-menu">
                                <li>
                                    <div class="row">
                                        <div class="col-md-12">
                                            Sign Up or Login via
                                            <div class="social-buttons">
                                                <div class="btn btn-fb" ng-click="ctrl.messageService.message('Currently unavailable, user accounts will be available in a later release')"><i class="fa fa-facebook"></i> Facebook <!--<img src="/assets/loading.gif" height="20px" width="20px" />--></div>
                                                <!--<div class="btn btn-fb" ng-click="ctrl.loginService.fbLogin()"><i class="fa fa-facebook"></i> Facebook <img src="/assets/loading.gif" height="20px" width="20px" /></div>-->
                                            </div>
                                            or
                                            <form class="form" role="form" method="post" action="login" accept-charset="UTF-8" id="login-nav">
                                                <div class="form-group">
                                                    <label class="sr-only" for="exampleInputEmail2">Username</label>
                                                    <input type="text" ng-model="ctrl.username" class="form-control" id="username" placeholder="Username" required>
                                                </div>
                                                <div class="form-group">
                                                    <label class="sr-only" for="exampleInputPassword2">Password</label>
                                                    <input type="password" ng-model="ctrl.password" class="form-control" id="password" placeholder="Password" required>
                                                    <div class="help-block text-right"><a href="">Forget your password?</a></div>
                                                </div>
                                                <div class="form-group">
                                                    <button type="button" class="btn btn-primary btn-block" ng-click="ctrl.loginService.loginUser(ctrl.username, ctrl.password)">Sign in <!--<img src="/assets/loading.gif" height="20px" width="20px" />--></button>
                                                    <button type="button" ng-click="ctrl.messageService.message('Currently unavailable, user accounts will be available in a later release')" id="create-account" class="btn btn-primary btn-block">Create Account <!--<img src="/assets/loading.gif" height="20px" width="20px" />--></button>
                                                    <!--<button type="button" ng-click="ctrl.loginService.createAccount(ctrl.username, ctrl.password)" id="create-account" class="btn btn-primary btn-block">Create Account<img src="/assets/loading.gif" height="20px" width="20px" /></button>-->
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <li ng-if="ctrl.loginService.user != null">
                                <a href="#!/account" id="account-button"><b>My Account</b></a>
                            </li>
                        </li>
                    </ul>
            `,
            link: function($scope, login) {

                //$scope.createAccount 

            }
        };
    });