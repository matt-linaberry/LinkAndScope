(function() {

  var app = angular.module('directivesModule');

  app.directive('isolateScope', function () {
      return {
          scope: {},  // wall between the isolate and parent scope.
          template: 'Name: {{customer.name}} Street: {{customer.street}}'
      };
  });

}());
