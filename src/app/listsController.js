angular
    .module('app')
    .controller('listsController', function($scope, $routeParams, appData) {
        this.data = appData;
        $scope.collection = $routeParams["collection"];
        $scope.sort = $routeParams["sort"];
        $scope.filter = $routeParams["filter"];
        $scope.value = $routeParams["value"];
        $scope.limit = $routeParams["limit"];
        $scope.pagestart = $routeParams["pagestart"];
        if ($scope.sort == "ratings") {
            $scope.heading = "Highest Ratings";
        } else {
            $scope.heading = "Latest";
        }
    });