'use strict';

/**
 * @ngdoc function
 * @name yapipesApp.controller:ArticleCtrl
 * @description
 * # ArticleCtrl
 * Controller of the yapipesApp
 */
angular.module('yapipesApp')
  .controller('ModalInstanceCtrl', function ($scope, $modalInstance, article) {

    $scope.article = article;
    
    $scope.cancel = function () {
      $modalInstance.dismiss('cancel');
    };

  });
