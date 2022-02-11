angular.module('myApp', [
    'ngRoute',
    'myApp.homeController',
    'myApp.characterController'
])

.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');
    
    $routeProvider
    .when('/404', {templateUrl: "components/404/404.html"})
    .otherwise({redirectTo: '/404'});
}]);