angular
.module('app')
.component('infoPage', {
    controller: function ($scope, appData, $routeParams) {
        this.data = appData;
        this.title = $routeParams['title'];

        $.getJSON('http://gd.geobytes.com/GetCityDetails?callback=?', function(data) {
            this.return = data;
            this.return.collection = "ips";
            $.post("/post-data", {item: this.return, collection: "ips", name: this.return.geobtyesremoteip}, function(res) {
                
            }.bind(this));
        }.bind(this));
    },
    controllerAs: "$ctrl",
    template: `               
        <div id="page-header">
            <h1>{{ $ctrl.data.html['info' + $ctrl.title + 'title'].text }}
                <edit style="top: 0px; right: -30px;" collection="html" name="{{ 'info' + $ctrl.title + 'title' }}">
                    <input type="text" ng-model="$ctrl.form.text" placeholder="Page Title"></input>
                </edit>
            </h1>
        </div>
        <div id="page-content" class="styles">{{ $ctrl.data.html['info' + $ctrl.title + 'body'].text }}
            <edit style="top: 0px; right: 0px;" collection="html" name="{{ 'info' + $ctrl.title + 'body' }}">
                <textarea type="text" ng-model="$ctrl.form.text" placeholder="Heading <h1> || Sub-Heading <h2> || Paragraph <p> (or hit enter) || Bold Red <b> || Italicized <i> || Link <a href>"></textarea>
            </edit>
        </div>
    `
});