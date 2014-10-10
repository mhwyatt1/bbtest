'use strict';

/**
 * @ngdoc service
 * @name yapipesApp.yahooPipe
 * @description
 * # yahooPipe
 * Factory in the yapipesApp.
 */
angular.module('yapipesApp')
  .factory('yahooPipe', function ($http) {

    var requestPipe = function(pipeId) {
      return $http({
        method: 'JSONP',
        url: 'http://pipes.yahoo.com/pipes/pipe.run?_id=' + pipeId + '&_render=json&_callback=JSON_CALLBACK'
      });
    };

    return {
      articles: function (pipeId) {
        return requestPipe(pipeId);
      }
    };
  });
