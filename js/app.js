angular.module('hearts', ['ui.router']).config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider.state('home', {
        url: '/',
        templateUrl: 'views/home.html'
    }).state('players', {
        url: '/players',
        templateUrl: 'views/players.html'
    }).state('games', {
        url: '/games',
        templateUrl: 'views/games.html'
    }).state('details', {
        url: '/players/:id',
        templateUrl: 'views/details.html',
        controller: 'detailsCtrl'
    });

}).directive("jared", function() {
    return {
        restrict: 'E',
        transclude: true,
        scope: {},
        templateUrl: 'views/nav.html'
    };
}).directive("games", function() {
    return {
        restrict: 'E',
        templateUrl: 'views/games.html'
    };
}).directive("players", function() {
    return {
        restrict: 'E',
        templateUrl: 'views/players.html'
    };
});
//
// .state('table', {
//     url: '/table',
//     templateUrl: 'views/scorecard.html',
// })
