'use strict';

import angular from 'angular';
import routes from './articles.routes';
import AdminController from './articles.controller';

export default angular.module('articles', ['galajsy60App.auth', 'ngRoute'])
  .config(routes)
  .controller('ArticlesController', ArticlesController)
  .name;