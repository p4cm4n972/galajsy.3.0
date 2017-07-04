'use strict';
const angular = require('angular');
const ngRoute = require('angular-route');


import routes from './members.routes';

export class MembersComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'Hello';
  }
}

export default angular.module('members', [ngRoute])
  .config(routes)
  .component('members', {
    template: require('./members.html'),
    controller: MembersComponent,
    controllerAs: 'membersCtrl'
  })
  .name;
