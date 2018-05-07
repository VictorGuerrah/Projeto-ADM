// script.js
// create the module and name it agenda-app
// also include ngRoute for all our routing needs

var agenda-app = angular.module('agenda-app', ['ngRoute', 'ngAnimate']);

// configure our routes
agenda-app.config(function($routeProvider, $locationProvider) {
  $routeProvider
    // route for the home page
    .when('/', {
        templateUrl : 'pages/home.html',
        controller  : 'mainController'
    })

    // route for the about page
    .when('/about', {
        templateUrl : 'pages/about.html',
        controller  : 'aboutController'
    })

    // route for the projects page
    .when('/projects', {
        templateUrl : 'pages/projects.html',
        controller  : 'projectsController'
    })

    // route for the contact page
    .when('/contact', {
        templateUrl : 'pages/contact.html',
        controller  : 'contactController'
    });

    // use the HTML5 History API
    $locationProvider.html5Mode(true);
});

// create the controller and inject Angular's $scope
agenda-app.controller('mainController', function($scope) {
  $scope.message = "Permite criar e compartilhar calendários com seus alunos para organizar melhor seus trabalhos. Você pode criar uma agenda em grupo para sempre notificar provas, trabalhos e atividades em equipe.";
  $scope.pageClass = 'page-home';
});

agenda-app.controller('aboutController', function($scope) {
  $scope.message = "here i'll put something nice about me (and maybe mechanical keyboards too)";
  $scope.pageClass = 'page-about';
});

agenda-app.controller('projectsController', function($scope) {
  $scope.message = "here it'll be a list of my current projects";
  $scope.pageClass = 'page-projects';
});

agenda-app.controller('contactController', function($scope) {
  $scope.message = "and here a nice contact form";
  $scope.pageClass = 'page-contact';
});