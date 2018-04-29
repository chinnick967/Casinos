angular
    .module('app')
    .component('comments', {
        controller: function ($scope, $http, $location, appData, $routeParams, loginService, messageService, userService) {
            this.data = appData;
            this.userService = userService;
            this.url = window.location.href;
            this.user = loginService.user;
            this.messageService = messageService;
            this.comment = {};
            this.comment.user = this.user;
            if (this.comment.user) {
                this.comment.ip = this.user.ip;
            }
            this.comment.collection = "comments";
            this.comment.url = $location.$$path;
            this.comments = [];
            this.pageSize = 5;
            this.currentPage = 1;

            this.submitComment = function() {
                this.comment.name = this.user.username + '-' + new Date().toLocaleString();
                if (!this.user) {
                    this.messageService.message("You need to log in to your Gambler's Update account before submitting a comment.");
                } else if (!this.comment.text) {
                    this.messageService.message("You cannot submit a blank comment.");
                } else {
                    $.post("/post-data", {item: this.comment}, function(res) {
                        if (res.status == true) {
                            this.data.getAllData();
                            messageService.message("Comment submitted successfully.");
                        } else {
                            messageService.message(res.message);
                        }
                    }.bind(this));
                }
            }

            this.pageAdjust = function(direction) {
                if (direction == "left") {
                    this.currentPage--;
                } else if (direction == "right") {
                    this.currentPage++;
                }
            }

            this.data.load(function() {
                this.getComments = function() {
                    return this.data.comments.filter(function(comment) {
                        comment.showDate = new Date(comment.date).toUTCString();
                        return comment.url == $location.$$path;
                    });
                }
                this.comments = this.getComments();
            }.bind(this));
        },
        controllerAs: "$ctrl",
        scope: {},
        template: `
            <h3>User Comments</h3>
            <div class="no-comments" ng-if="$ctrl.comments.length == 0">No Comments Yet...</div>
            <div ng-if="{{$ctrl.data.checkIfBanned(comment.user.username)}} == false" class="comment" ng-repeat="comment in $ctrl.comments | limitTo : $ctrl.pageSize : ($ctrl.currentPage - 1) * $ctrl.pageSize">
                <div class="comment-user">{{comment.user.username}} <span class="anti-spam glyphicon glyphicon-ban-circle" ng-click="$ctrl.userService.banUser(comment.user.username)" title="Ban user and remove comments"></span> <small>{{comment.showDate}}</small></div>
                <div class="comment-text">{{comment.text}}</div>
            </div>
            <div class="pagination" ng-if="$ctrl.pageSize < $ctrl.comments.length">
                <span class="prev page glyphicon glyphicon-chevron-left" ng-disabled="$ctrl.currentPage == 1;" ng-click="$ctrl.pageAdjust('left')"></span>
                <span class="next page glyphicon glyphicon-chevron-right" ng-disabled="$ctrl.pageSize * $ctrl.currentPage >= $ctrl.comments.length" ng-click="$ctrl.pageAdjust('right')"></span>
            </div>
            <textarea class="leave-a-comment" maxlength="200" placeholder="Leave a comment..." ng-model="$ctrl.comment.text"></textarea>
            <button class="submit-comment" ng-click="$ctrl.submitComment()">Submit</button>
        `
    });