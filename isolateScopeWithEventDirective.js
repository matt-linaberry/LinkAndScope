(function() {

  var app = angular.module('directivesModule');

  app.directive('isolateScopeWithEvent', function () {
      return {
          scope: {
              datasource: '=',
              action: '&'   // this allows us to link the action() method in this directive to something in the controller!
          },
          template: 'Name: {{datasource.name}} Street: {{datasource.street}} ' +
                    '<button ng-click="action()">Change Data</button>'
      };
  });

}());
