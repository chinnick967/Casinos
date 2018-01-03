angular
    .module('app')
    .component('adminList', {
        controller: function (appData) {
            this.data = appData;
            this.collections = ["casinos", "slots", "articles"];
            this.filter = '';

            this.replaceSpaces = function(string) {
                return string.replace(/ /g,"-");
            }
        },
        controllerAs: "$ctrl",
        template: `      
            <div class="admin-list-container col-md-12">
                <div class="search col-md-8 col-md-offset-2">
                    <h2>{{$ctrl.selected}}</h2>
                    <select ng-model="$ctrl.selected">
                        <option value="{{collection}}" ng-repeat="collection in $ctrl.collections">{{collection}}</option>
                    </select>
                    <div class="search-bar"><input type="text" ng-model="$ctrl.filter" placeholder="Search"><span ng-click="$ctrl.filter = ''">x</span></div>
                </div>        
                <div class="list-container col-md-8 col-md-offset-2">
                    <div class="item" ng-if="$ctrl.selected == 'casinos' && (casino.name.indexOf($ctrl.filter) != -1 || $ctrl.filter == '')" ng-repeat="casino in $ctrl.data.casinos | orderBy : casino.name.indexOf($ctrl.filter)">{{casino.name}}<a target="_blank" href="{{'/#!/casino/' + casino.name}}"><span class="glyphicon glyphicon-pencil edit"></span></a><div class="remove-btn" ng-click="$ctrl.data.removeData('casinos', 'name', casino.name)">x</div></div>
                    <div class="item" ng-if="$ctrl.selected == 'slots' && (slot.name.indexOf($ctrl.filter) != -1 || $ctrl.filter == '')" ng-repeat="slot in $ctrl.data.slots | orderBy : slot.name.indexOf($ctrl.filter)">{{slot.name}}<a target="_blank" href="{{'/#!/slots/' + $ctrl.replaceSpaces(slot.name)}}"><span class="glyphicon glyphicon-pencil edit"></span></a><div class="remove-btn" ng-click="$ctrl.data.removeData('slots', 'name', slot.name)">x</div></div>
                    <div class="item" ng-if="$ctrl.selected == 'articles' && (article.name.indexOf($ctrl.filter) != -1 || $ctrl.filter == '')" ng-repeat="article in $ctrl.data.articles | orderBy : article.name.indexOf($ctrl.filter)">{{article.name}}<a target="_blank" href="{{'/#!/article/' + article._id}}"><span class="glyphicon glyphicon-pencil edit"></span></a><div class="remove-btn" ng-click="$ctrl.data.removeData('articles', 'name', article.name)">x</div></div>
                </div>
            </div>
        `
    });