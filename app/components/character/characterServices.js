angular.module("myApp.character.services", [])
.factory('characterServices', function ($http) {
    var marvelAPI = {};

    marvelAPI.getHero = function(characterId) {
        return $http({
            method: 'GET', 
            url: 'https://gateway.marvel.com:443/v1/public/characters',
            params: {
                apikey: '5a237863b3cc2061003cbbc4fe20dc06',
                hash: 'bd4b447a65ef5d6b174f87cf9db6d2db',
                ts: 1,
                id: characterId
            }
        });
    };

    return marvelAPI;
});