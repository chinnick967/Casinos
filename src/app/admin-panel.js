angular
    .module('app')
    .component('adminPanel', {
        controller: function (loginService) {
            this.loginService = loginService;
        },
        controllerAs: "$ctrl",
        template: `      
            <div class="admin-panel" ng-if="$ctrl.loginService.user.username == 'admin'">       
                <h1 class="col-sm-12">Add Items</h1>
                    <add-item class="col-sm-3" type="casinos"></add-item>
                    <add-item class="col-sm-3" type="bonuses"></add-item>
                    <add-item class="col-sm-3" type="slots"></add-item>
                    <add-item class="col-sm-3" type="game reviews"></add-item>
                    <add-item class="col-sm-3" type="articles"></add-item>
                <h1 class="col-sm-12">Add Dropdown Options</h1>
                    <add-item class="col-sm-3" type="software"></add-item>
                    <add-item class="col-sm-3" type="licenses"></add-item>
                    <add-item class="col-sm-3" type="support"></add-item>
                    <add-item class="col-sm-3" type="currency"></add-item>
                    <add-item class="col-sm-3" type="games"></add-item>
                <admin-list></admin-list>
            </div>
        `
    });