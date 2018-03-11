// TODO: MAKE SOME ROUTES
angular.module("grantApp").config(["$routeProvider", function ($routeProvider) {
  $routeProvider.when('/', {
    template: '<combat-init />',
  });
  $routeProvider.when('/combat', {
    template: '<combat-view />',
  });
  $routeProvider.when('/retreat', {
    template: '<retreat-view />',
  });


}]);
