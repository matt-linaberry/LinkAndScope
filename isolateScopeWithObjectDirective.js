(function() {

  var app = angular.module('directivesModule');

  app.directive('isolateScopeWithObject', function () {
      return {
          scope: {
              datasource: '='  // this says values are used in both directions. It is an object!
          },
          template: 'Name: {{datasource.name}} Street: {{datasource.street}}' +
                    '<br /><button ng-click="datasource.name=\'Fred\'">' +
                    'Change</button>'
      };
  });

}());
