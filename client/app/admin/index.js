'use strict';

import angular from 'angular';
import routes from './admin.routes';
import AdminController from './admin.controller';

export default angular.module('galajsy60App.admin', ['galajsy60App.auth', 'ngRoute'])
  .config(routes)
  .controller('AdminController', AdminController)
  .name;
