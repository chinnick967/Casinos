angular
    .module('app')
    .component('adminPanel', {
        controller: function () {

        },
        controllerAs: "$ctrl",
        template: `      
            <div class="admin-panel">         
                <add-item type="casinos"></add-item>
                <add-item type="languages"></add-item>
                <add-item type="countries"></add-item>
                <add-item type="software"></add-item>
                <add-item type="licenses"></add-item>
                <add-item type="support"></add-item>
                <add-item type="currency"></add-item>
                <add-item type="payment"></add-item>
            </div>
        `
    });