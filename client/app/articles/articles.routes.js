'use strict';

export default function($routeProvider) {
  'ngInject';
  $routeProvider
    .when('/articles', {
      template: '<articles></articles>'
    });
}
