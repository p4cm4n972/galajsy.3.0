'use strict';
const angular = require('angular');

/*@ngInject*/
export function mainController() {
  this.message = 'Hello';
}

export default angular.module('main', [])
  .controller('MainController', mainController)
  .name;
