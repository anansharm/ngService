var myApp= angular.module('myApp',['ui.router']); 
    myApp.config(['$stateProvider', '$urlRouterProvider', 
  function ($stateProvider, $urlRouterProvider) { 

    $urlRouterProvider.otherwise('/index.html'); 

              
  $stateProvider 
    .state('home', { 
              url: '/home', 
            templateUrl: 'views/home.html', 
            controller: 'homeController' 
          }) 
      .state('about', { 
            url: '/about', 
            templateUrl: 'views/confirmation.html', 
            controller: 'conController' 
            })       

        } 
        ]); 
                    
    myApp.controller('homeController', function($scope) { 
                //Can do something with the scope

     }); 

                    
  myApp.controller('mainController', function($scope,$state) { 
               
      $state.go('home'); 
          }); 

      myApp.controller('conController', ['$scope', 'userService', function($scope, userService) { 
        $scope.userService = userService;
        $scope.user = $scope.userService.user; 
        $scope.message = 'This is a confirmation page.'; 
    }]);