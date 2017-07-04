'use strict';
const angular = require('angular');
const ngRoute = require('angular-route');


import routes from './news.routes';

export class NewsComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'Hello';
  }
}

export default angular.module('news', [ngRoute])
  .config(routes)
  .component('news', {
    template: require('./news.html'),
    controller: NewsComponent,
    controllerAs: 'newsCtrl'
  })
  .name;
