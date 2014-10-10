'use strict';

/**
 * @ngdoc function
 * @name yapipesApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yapipesApp
 */
angular.module('yapipesApp')
  .controller('MainCtrl', function ($scope, yahooPipe, $modal) {
    yahooPipe.articles('DqsF_ZG72xGLbes9l7okhQ')
      .success(function(data){
        $scope.articles = data.value.items;
        console.log($scope.articles);
      });

    $scope.open = function (articleNum) {
      var modalInstance = $modal.open({
        templateUrl: 'views/article.html',
        controller: 'ModalInstanceCtrl',
        resolve: {
          article: function () {
            return $scope.articles[articleNum];
          }
        }
      });
    };

  });
