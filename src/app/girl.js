angular
.module('app')
.component('girl', {
    controller: function ($scope, appData, $routeParams) {
        this.data = appData;
        this.title = $routeParams['title'];
    },
    controllerAs: "$ctrl",
    template: `               
        <p>Hey, I think you're really cool (not to mention hella cute) and would love to hang out again (possibly this weekend). What do you say?</p>
        <div class="button yes" onclick="alert('You made the right choice :D. Sadly, I didnt actually put any tracking on this button so just screenshot it to me');">
            Heck yeah, you're awesome and super sexy Dakota! (click this one)
        </div>
        <div class="button no" onclick="alert('RIP. I dont have tracking on this button, let me down easy');">
            No thanks (boooo)
        </div>
    `
});