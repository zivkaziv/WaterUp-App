angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
  $scope.parameters = {
    weightInKg:50,
    waterInLiter: 1.63
  };

  $scope.numberOfLitersToDrink = function(){
    var weightInPounds = $scope.parameters.weightInKg*2.2046;
    var waterInOz = weightInPounds/2;
    $scope.parameters.waterInLiter = Math.round((waterInOz * 0.0295735) * 100) / 100
  };
})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
