angular
    .module('app')
    .component('promo', {
        controller: function ($scope, $http, appData, userService) {
            this.data = appData;
            this.userService = userService;
            
            this.data.load(function() {
                for (var i = 0; i < this.data.slots.length; i++) {
                    this.data.slots[i].slug = this.data.slots[i].name.replace(/\s/g, '-');
                }
            }.bind(this));
        },
        controllerAs: "$ctrl",
        template: `  
            <edit style="top: -90px; left: 10px;" collection="html" name="sidebar-promo">
                <h2>Promotional Image</h2>
                <div class="input-container"><input data-model="promo-image" type="file" id="casino-preview" accept="image/*"><label for="casino-preview">290 x 290</label></div>
                <input type="text" ng-model="$ctrl.form.link" placeholder="Promotional link">
            </edit>              
            <a href="$ctrl.data.html.sidebar-promo.link" style="width: 100%" target="_blank">   
                <img style="width: 100%" src="{{$ctrl.data.html['sidebar-promo']['promo-image']}}" />
            </a>
        `
    });