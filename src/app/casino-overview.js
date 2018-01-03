angular
    .module('app')
    .directive('casinoOverview', function() {
        return {
            controller: function ($scope, $http, appData) {
                this.data = appData;

                this.data.load(function() {
                    this.data.languages = this.data.countries.filter(function(element) {
                        return element.language != "";
                    });
                }.bind(this));

                this.findMatch = function(array, item, match) {
                    for (var i = 0; i < array.length; i++) {
                        if (array[i][item] == match) {
                            return array[i];
                        }
                    }
                    return 0;
                }
            },
            controllerAs: "$ctrl",
            template: `
                <div class="casino-overview">               
                    <table class="casino-summ-table">
                        <tbody>
                            <tr>
                                <td>Website
                                    <edit style="top: 10px; left: -32px;" collection="casinos">
                                        <h2>Website</h2>
                                        <input type="text" ng-model="$ctrl.form.link" placeholder="Website link">
                                        <input type="text" ng-model="$ctrl.form.anchor" placeholder="Anchor Text">
                                    </edit>
                                </td>
                                <td>
                                    <a href="{{ $ctrl.data.casino.link }}">{{ $ctrl.data.casino.anchor }}</a>
                                </td>
                            </tr>
                            <tr>
                                <td>Number of Games
                                    <edit style="top: 10px; left: -32px;" collection="casinos">
                                        <h2>Number of Games</h2>
                                        <input type="number" ng-model="$ctrl.form.gameNumber" placeholder="Number of Games">
                                    </edit>
                                </td>
                                <td>
                                    {{ $ctrl.data.casino.gameNumber }}<span ng-show="$ctrl.data.casino.gameNumber">+</span>
                                </td>
                            </tr>
                            <tr>
                                <td>Game Types
                                    <edit style="top: 10px; left: -32px;" collection="casinos">
                                        <h2>Game Types</h2>
                                        <select ng-model="$ctrl.form.gameTypes" multiple>
                                            <option ng-repeat="game in $ctrl.data.games" value="{{ game.name }}">{{ game.name }}</option>
                                        </select>
                                        <span>Hold ctrl to select multiple values</span>
                                    </edit>
                                </td>
                                <td>
                                    <ul>
                                        <li ng-repeat="game in $ctrl.data.casino.gameTypes">{{ game }}</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <td>Software
                                    <edit style="top: 10px; left: -32px;" collection="casinos">
                                        <h2>Software</h2>
                                        <select ng-model="$ctrl.form.software" multiple>
                                            <option ng-repeat="software in $ctrl.data.software" value="{{ software.name }}">{{ software.name }}</option>
                                        </select>
                                        <span>Hold ctrl to select multiple values</span>
                                    </edit>
                                </td>
                                <td>
                                    <ul>
                                        <li ng-repeat="software in $ctrl.data.casino.software"><a href="{{$ctrl.data.searchCollection('software', 'name', software)['link']}}">{{ software }}</a></li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <td>Licences
                                    <edit style="top: 10px; left: -32px;" collection="casinos">
                                        <h2>Licences</h2>
                                        <select ng-model="$ctrl.form.licenses" multiple>
                                            <option ng-repeat="license in $ctrl.data.licenses" value="{{ license.name }}">{{ license.name }}</option>
                                        </select>
                                        <span>Hold ctrl to select multiple values</span>
                                    </edit>
                                </td>
                                <td>
                                    <ul>
                                        <li ng-repeat="license in $ctrl.data.casino.licenses"><a href="{{$ctrl.data.searchCollection('licenses', 'name', license)['link']}}">{{ license }}</a></li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <td>Support
                                    <edit style="top: 10px; left: -32px;" collection="casinos">
                                        <h2>Support</h2>
                                        <select ng-model="$ctrl.form.support" multiple>
                                            <option ng-repeat="support in $ctrl.data.support" value="{{ support.name }}">{{ support.name }}</option>
                                        </select>
                                        <span>Hold ctrl to select multiple values</span>
                                    </edit>
                                </td>
                                <td>
                                    <ul>
                                        <li ng-repeat="support in $ctrl.data.casino.support">{{ support }}</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <td>Currency
                                    <edit style="top: 10px; left: -32px;" collection="casinos">
                                        <h2>Currency</h2>
                                        <select ng-model="$ctrl.form.currency" multiple>
                                            <option ng-repeat="currency in $ctrl.data.currency" value="{{ currency.name }}">{{ currency.name }}</option>
                                        </select>
                                        <span>Hold ctrl to select multiple values</span>
                                    </edit>
                                </td>
                                <td>
                                    <ul>
                                        <li ng-repeat="currency in $ctrl.data.casino.currency">{{$ctrl.data.searchCollection('currency', 'name', currency)['acronym']}}</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <td>Languages
                                    <edit style="top: 10px; left: -32px;" collection="casinos">
                                        <h2>Languages</h2>
                                        <select ng-model="$ctrl.form.languages" multiple>
                                            <option ng-repeat="language in $ctrl.data.languages" value="{{ language.language }}">{{ language.language }}</option>
                                        </select>
                                        <span>Hold ctrl to select multiple values</span>
                                    </edit>
                                </td>
                                <td>
                                    <ul>
                                        <li style="min-width: 30%; margin-bottom: 5px;" ng-repeat="language in $ctrl.data.casino.languages"><img style="width: 27px; height: 19px; object-fit: cover;" src="{{$ctrl.findMatch($ctrl.data.languages, 'language', language).flag}}" /></li>
                                    </ul>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            `,
            link: function() {
                
            }
        }
    });