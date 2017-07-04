'use strict';

export default function($routeProvider) {
  'ngInject';
  $routeProvider
    .when('/members', {
      template: '<members></members>'
    });
}
