angular
    .module('app')
    .component('casinoAdditionalInfo',  {
        controller: function ($scope, $http, appData) {
            this.data = appData;
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
                    <h2>Additional Information</h2>
                    <table class="casino-summ-table">
                        <tbody>
                            <tr>
                                <td>Published</td>
                                <td>{{$ctrl.data.casino.publishDate}}
                                    <edit style="top: 10px; right: -32px;" collection="casinos">
                                        <h2>Publish Date</h2>
                                        <input type="text" ng-model="$ctrl.form.publishDate" placeholder="Casino publish date">
                                    </edit>
                                </td>
                            </tr>
                            <tr>
                                <td>Owner</td>
                                <td>{{$ctrl.data.casino.owner}}
                                    <edit style="top: 10px; right: -32px;" collection="casinos">
                                        <h2>Owner</h2>
                                        <input type="text" ng-model="$ctrl.form.owner" placeholder="Casino owner">
                                    </edit>
                                </td>
                            </tr>
                            <tr>
                                <td>Email</td>
                                <td>{{$ctrl.data.casino.email}}
                                    <edit style="top: 10px; right: -32px;" collection="casinos">
                                        <h2>Email</h2>
                                        <input type="text" ng-model="$ctrl.form.email" placeholder="Casino's email">
                                    </edit>
                                </td>
                            </tr>
                            <tr>
                                <td>Telephone</td>
                                    <td style="white-space: pre-line;">{{$ctrl.data.casino.telephone}}<edit style="top: 10px; right: -32px;" collection="casinos"><h2>Telephone</h2><textarea ng-model="$ctrl.form.telephone" placeholder="Casino phone number"></textarea></edit>
                                </td>
                            </tr>
                            <tr>
                                <td>Restricted Countries</td>
                                <td>
                                    <ul>
                                        <li style="min-width: 30%; margin-bottom: 5px;" ng-repeat="country in $ctrl.data.casino.restrictedCountries"><img style="width: 27px; height: 19px; object-fit: cover;" src="{{$ctrl.findMatch($ctrl.data.countries, 'name', country).flag}}" /></li>
                                    </ul>
                                    <edit style="top: 10px; right: -32px;" collection="casinos">
                                        <h2>Restricted Countries</h2>
                                        <select ng-model="$ctrl.form.restrictedCountries" multiple>
                                            <option ng-repeat="country in $ctrl.data.countries" value="{{ country.name }}">{{ country.name }}</option>
                                        </select>
                                        <span>Hold ctrl to select multiple values</span>
                                    </edit>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <admin-controls>
                    <edit style="" collection="casinos">
                        <h2>{{$ctrl.data.casino.name}}</h2>
                        <input ng-model="$ctrl.form.link" type="text" placeholder="Casino Link, use http link not www" style="width: 90%" />
                        <div class="input-container"><input data-model="thumbnail" type="file" id="casino-thumbnail" accept="image/*"><label for="casino-thumbnail">Thumbnail 170x120</label></div>
                        <div class="input-container"><input data-model="icon" type="file" id="casino-icon" accept="image/*"><label for="casino-icon">Icon 40x40</label></div>
                        <label class="switch">
                            <div class="switch-text">Mobile</div>
                            <input ng-model="$ctrl.form.mobile" type="checkbox">
                            <div class="slider"></div>
                        </label>
                    </edit>
                </admin-controls>
        `
    });

    /*
<edit style="" collection="html" name="home1">
                        <h2>{{ $ctrl.type }}</h2>
                        <input ng-model="$ctrl.form.name" type="text" placeholder="Casino Name" maxlength="30" /><input ng-model="$ctrl.form.link" type="text" placeholder="Casino Link, use http link not www" />
                        <div class="input-container"><input data-model="thumbnail" type="file" id="casino-thumbnail" accept="image/*"><label for="casino-thumbnail">Thumbnail 170x120</label></div>
                        <div class="input-container"><input data-model="icon" type="file" id="casino-icon" accept="image/*"><label for="casino-icon">Icon 40x40</label></div>
                        <label class="switch">
                            <div class="switch-text">Mobile</div>
                            <input ng-model="$ctrl.form.mobile" type="checkbox">
                            <div class="slider"></div>
                        </label>
                    </edit>

    */