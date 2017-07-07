'use strict';

const angular = require('angular');
const ngRoute = require('angular-route');
import routes from './articles.routes';

import main from '../main/main.component'

export class ArticlesComponent {
  awesomeThings = [];
  newThing = '';
  /*@ngInject*/
  constructor($http, $scope, socket, Auth) {
    this.$http = $http;
    this.socket = socket;
    this.isLoggedIn = Auth.isLoggedInSync;
    this.isAdmin = Auth.isAdminSync;
    this.getCurrentUser = Auth.getCurrentUserSync;

    $scope.$on('$destroy', function() {
      socket.unsyncUpdates('thing');
    });
  }
  $onInit() {
    this.$http.get('/api/things')
      .then(response => {
        this.awesomeThings = response.data;
        this.socket.syncUpdates('thing', this.awesomeThings);
      });
  }

  addThing() {
    if(this.newThing) {
      this.$http.post('/api/things', {
        name: this.newThing
      });
      this.newThing = '';
    }
  }

  deleteThing(thing) {
    this.$http.delete(`/api/things/${thing._id}`);
  }
}

export default angular.module('articles', [ngRoute])
  .config(routes)
  .component('articles', {
    template: require('./articles.html'),
    controller: ArticlesComponent,
    controllerAs: 'articlesCtrl'
  })
  .name;

angular.module('main', [main])