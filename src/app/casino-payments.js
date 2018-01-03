angular
    .module('app')
    .component('casinoPayments',  {
        controller: function ($scope, $http, appData) {
            this.data = appData;
        },
        controllerAs: "$ctrl",
        template: `               
                <div class="casino-overview">               
                    <h2>Deposits and Withdrawals</h2>
                    <table class="casino-summ-table">
                        <tbody>
                            <tr>
                                <td>Deposit
                                    <edit style="top: 10px; left: -32px;" collection="casinos">
                                        <h2>Deposit Methods</h2>
                                        <select ng-model="$ctrl.form.depositMethods" multiple>
                                            <option ng-repeat="payment in $ctrl.data.payment" value="{{ payment.name }}">{{ payment.name }}</option>
                                        </select>
                                        <span>Hold ctrl to select multiple values</span>
                                    </edit>
                                </td>
                                <td>
                                    <ul>
                                        <li style="min-width: 30%; margin-bottom: 5px;" ng-repeat="deposit in $ctrl.data.casino.depositMethods"><img style="height:25px; width:40px; object-fit: cover;" src="{{ $ctrl.data.findMatch('payment', 'name', deposit).icon }}" /></li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <td>Withdrawal
                                    <edit style="top: 10px; left: -32px;" collection="casinos">
                                        <h2>Withdrawal Methods</h2>
                                        <select ng-model="$ctrl.form.withdrawalMethods" multiple>
                                            <option ng-repeat="payment in $ctrl.data.payment" value="{{ payment.name }}">{{ payment.name }}</option>
                                        </select>
                                        <span>Hold ctrl to select multiple values</span>
                                    </edit>
                                </td>
                                <td>
                                    <ul>
                                        <li style="min-width: 30%; margin-bottom: 5px;" ng-repeat="withdraw in $ctrl.data.casino.withdrawalMethods"><img style="height:25px; width:40px; object-fit: cover;" src="{{ $ctrl.data.findMatch('payment', 'name', withdraw).icon }}" /></li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <td>Min. Deposit
                                    <edit style="top: 10px; left: -32px;" collection="casinos">
                                        <h2>Minimum Deposit</h2>
                                        <input type="text" ng-model="$ctrl.form.minDeposit" placeholder="Example: $500">
                                    </edit>
                                </td>
                                <td>{{$ctrl.data.casino.minDeposit}}</td>
                            </tr>
                            <tr>
                                <td>Min Withdrawal
                                    <edit style="top: 10px; left: -32px;" collection="casinos">
                                        <h2>Minimum Withdrawal</h2>
                                        <input type="text" ng-model="$ctrl.form.minWithdrawal" placeholder="Example: $500">
                                    </edit>
                                </td>
                                <td>{{$ctrl.data.casino.minWithdrawal}}</td>
                            </tr>
                            <tr>
                                <td>Max Withdrawal
                                    <edit style="top: 10px; left: -32px;" collection="casinos">
                                        <h2>Maximum Withdrawal</h2>
                                        <input type="text" ng-model="$ctrl.form.maxWithdrawal" placeholder="Example: $500">
                                    </edit>
                                </td>
                                <td>{{$ctrl.data.casino.maxWithdrawal}}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
        `
    });