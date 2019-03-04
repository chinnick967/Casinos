angular
    .module('app')
    .component('topListHeader', {
        controller: function ($scope, $http, $routeParams, appData) {
            this.data = appData;
            this.collection = $routeParams['collection'];
            this.filter = $routeParams['filter'];
            this.value = $routeParams['value'];
           
            this.headers = {
                casinos: {
                    countries: {
                        UnitedKingdom: "/assets/list-backgrounds/UK.jpg",
                        UnitedStates: "/assets/list-backgrounds/USA.jpg",
                        Australia: "/assets/list-backgrounds/AUS.jpg",
                        Sweden: "/assets/list-backgrounds/SWED.jpg",
                        Germany: "/assets/list-backgrounds/GER.jpg",
                        Japan: "/assets/list-backgrounds/JAP.jpg",
                        Finland: "/assets/list-backgrounds/FIN.jpg"
                    }
                }
            }
            
            this.replaceUnderline = function(value, replace) {
                return value.replace('_', replace);
            }

            this.replaceUnderlineWithSpace = function(value) {
                return value.replace('_', ' ');
            }

            if (this.headers[this.collection] && this.headers[this.collection][this.filter] && this.headers[this.collection][this.filter][this.replaceUnderline(this.value, '')]) {
                this.header = this.headers[this.collection][this.filter][this.replaceUnderline(this.value, '')];
            } else {
                this.header = false;
            }
        },
        controllerAs: "$ctrl",
        template: `             
            <div class="col-sm-12 top-list-header" ng-if="$ctrl.header">
                <div class="background" style="background-image: url({{$ctrl.header}});"></div>
                <div class="container">
                    <div class="col-sm-12">
                        <h1>{{$ctrl.replaceUnderline($ctrl.value, ' ')}} Casinos</h1>
                        <div class="content">
                            <div ng-bind-html="$ctrl.data.html[$ctrl.collection + $ctrl.filter + $ctrl.value + 'header'].text"></div>
                            <edit style="top: 90px; left: -60px;" collection="html" name="{{$ctrl.collection + $ctrl.filter + $ctrl.value + 'header'}}">
                                <textarea type="text" ng-model="$ctrl.form.text" placeholder="Heading <h1> || Sub-Heading <h2> || Paragraph <p> (or hit enter) || Bold Red <b> || Italicized <i> || Link <a href>"></textarea>
                            </edit>
                        </div>
                    </div>
                </div>
            </div>
        `
    });