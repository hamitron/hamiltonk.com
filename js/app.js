var hamiltonKApp = angular.module('hamiltonKApp', [
'ngRoute',
'hamiltonKControllers'
	]);

hamiltonKApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/contact', {
        templateUrl: 'partials/info.html',
        controller: 'hamiltonKCtrl'
      }).
      when('/projects', {
        templateUrl: 'partials/projects.html',
        controller: 'hamiltonKCtrl'
      }).
      when('/nfc', {
        templateUrl: 'projects/nfc.html',
        controller: 'hamiltonKCtrl'
      }).
      when('/guzl', {
        templateUrl: 'projects/guzl.html',
        controller: 'hamiltonKCtrl'
      }).
      when('/twiines', {
        templateUrl: 'projects/twiines.html',
        controller: 'hamiltonKCtrl'
      }).
      when('/fistfive', {
        templateUrl: 'projects/fistfive.html',
        controller: 'hamiltonKCtrl'
      }).
      when('/wims', {
        templateUrl: 'projects/mystuff.html',
        controller: 'hamiltonKCtrl'
      }).
       when('/ttt', {
        templateUrl: 'projects/ttt.html',
        controller: 'hamiltonKCtrl'
      }).
      when('/bio', {
        templateUrl: 'partials/bio.html',
        controller: 'hamiltonKCtrl'
      }).
     otherwise({
        redirectTo: '/contact'
      });
  }]);