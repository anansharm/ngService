(function(){
  var myApp = angular.module('myApp');
  myApp.directive('homeData', function() {
  return {
      scope:{
        info:'=fo'
      },
    templateUrl: 'views/home.html'
  };
             
  });
  myApp.controller('MyFormCtrl', ['$scope', 'userService', function($scope, userService) {
    $scope.userService = userService;
    $scope.user = {
        firstName: '',
        lastName: '',
        email: ''
      };
 
    $scope.register = function() {
              
        $scope.userService.setUserName($scope.user.firstName);
        $scope.userService.setUserlastName($scope.user.lastName);
        $scope.userService.setUserEmail($scope.user.email);
                  
    };
    }]);
              
     myApp.service('userService', function(){
      var userService = {
        user: {
          'firstName': '',
          'lastName': '',
          'email': ''
        },
        getUser: function(){
           return userService.user;
        },
        getUserName: function(){
          return userService.user.firstName;
        },
        getUserlastName: function(){
          return userService.user.lastName;
        },
        getUserEmail: function(){
          return userService.user.email;
        },
        setUserName: function(firstName){
          userService.user.firstName = firstName;
        },
        setUserlastName: function(lastName){
          userService.user.lastName = lastName;
        },
        setUserEmail: function(email){
          userService.user.email = email;
        },
      };
      return userService;
              
    });
              
})();