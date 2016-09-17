angular.module('paulsapt', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/main");
    $stateProvider
    .state('main', {
      url: "/main",
      templateUrl: "src/views/main.html"
    })
    .state('sob', {
      url: "/sob",
      templateUrl: "src/views/sob.main.html"
    });
});
