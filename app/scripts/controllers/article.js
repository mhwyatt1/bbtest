'use strict';

/**
 * @ngdoc function
 * @name yapipesApp.controller:ArticleCtrl
 * @description
 * # ArticleCtrl
 * Controller of the yapipesApp
 */
angular.module('yapipesApp')
  .controller('ArticleCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
