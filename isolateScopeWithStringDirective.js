(function() {

  var app = angular.module('directivesModule');

  app.directive('isolateScopeWithString', function () {
      return {
          scope: {
              name: '@'  // this allows the outside world to pass in something in a name attribute
          },
          template: 'Name: {{name}}'
      };
  });

}());
