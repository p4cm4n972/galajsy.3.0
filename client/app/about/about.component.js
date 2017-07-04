'use strict';
const angular = require('angular');
const ngRoute = require('angular-route');


import routes from './about.routes';

export class AboutComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'Hello';
  }
}

export default angular.module('about', [ngRoute])
  .config(routes)
  .component('about', {
    template: require('./about.html'),
    controller: AboutComponent,
    controllerAs: 'aboutCtrl'
  })
  .name;
