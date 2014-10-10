'use strict';

/**
 * @ngdoc overview
 * @name yapipesApp
 * @description
 * # yapipesApp
 *
 * Main module of the application.
 */
angular
  .module('yapipesApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
