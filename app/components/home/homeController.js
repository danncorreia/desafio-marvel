angular.module('myApp.homeController', ['ngRoute', 'myApp.home.services'])

.config(['$routeProvider', function ($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'components/home/homeView.html',
    controller: 'HomeController'
  });
}])

.controller('HomeController', ['$scope', '$location', 'homeServices', function ($scope, $location, homeServices) {
    $scope.nome = ''

    homeServices.getHeros().then(function (resp) {
      $scope.characters = resp.data.data.results;
    });

    $scope.characterClick = function (characteriD) {
      $location.path('/character/'+characteriD);
    };

    $scope.pesquisar = function () {
      homeServices.getHeros($scope.nome).then(function (resp) {
        $scope.characters = resp.data.data.results;
      });
    }
}]);
