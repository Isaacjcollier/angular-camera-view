(function() {
  'use strict';

  var app = angular.module('cameraApp', []);

  app.filter('astericks', function () {
    return (input) => {
      var astericksRating = [];
      for (var i = 0; i < input; i++) {
        astericksRating.push('*');
      }
      return astericksRating.join('');
    }
  })


  $('select').material_select();

})();
