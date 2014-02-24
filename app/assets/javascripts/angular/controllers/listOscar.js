angular.module('listOscar', [])
 
.config(['$routeProvider', 
  function($routeProvider) {
    $routeProvider


    .when('/', {
      templateUrl: '../templates/home.html',
      controller: 'homeCtrl'
    });
    
  }])

.controller('homeCtrl', ['$scope', '$rootScope', '$http', function($scope, $rootScope, $http){
  $scope.list = []
  $http({method: 'GET', url: '/api/oscarlist.json'}).
    success(function(data, status, headers, config) {
      $scope.list = data
      console.log(data)
    })

}]);