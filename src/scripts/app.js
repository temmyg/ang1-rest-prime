var app = angular.module("restInvoker", []);
app.controller('mainController', ['$scope', '$http', function($scope, $http){
    $scope.user = ""; //"jonathan";
    console.log($http)
    $scope.importing = function() {
        $http.get('http://www.msn.com').then(
            function(data){
                console.log(data);
            },
            function error(err){
                console.log('err', err);
            }
        )
    }
}]);