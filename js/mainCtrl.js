angular.module('hearts').controller('mainCtrl', function($scope, $stateParams, playerService) {

    $scope.name = "Hearts";

    $scope.getPlayers = function() {
        $scope.players = playerService.getPlayers();
    };

    $scope.getPlayers();

});
