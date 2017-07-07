'use strict';
const angular = require('angular');

/*@ngInject*/
export function articlesController() {
  this.message = 'Hello';
}

export default angular.module('articles', [])
  .controller('ArticlesController', articlesController)
  .name;
