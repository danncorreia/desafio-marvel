angular.module('myApp.characterController', ['ngRoute', 'myApp.character.services'])

.config(['$routeProvider', function ($routeProvider) {
  $routeProvider.when('/character/:characterId', {
    templateUrl: 'components/character/characterView.html',
    controller: 'CharacterController'
  });
}])

.controller('CharacterController', ['$scope', '$routeParams', '$location', 'characterServices', function ($scope, $routeParams, $location, characterServices) {

    characterServices.getHero($routeParams.characterId).then(function (resp) {
      $scope.character = resp.data.data.results[0];
    }).catch(function (err) {
      $location.path('/404');
    });
}]);
