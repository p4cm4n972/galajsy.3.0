'use strict';

import angular from 'angular';
// import ngAnimate from 'angular-animate';
import ngCookies from 'angular-cookies';
import ngResource from 'angular-resource';
import ngSanitize from 'angular-sanitize';

import 'angular-socket-io';
const ngRoute = require('angular-route');

import 'angular-validation-match';

import {
  routeConfig
} from './app.config';

import _Auth from '../components/auth/auth.module';
import account from './account';
import admin from './admin';
import navbar from '../components/navbar/navbar.component';
import footer from '../components/footer/footer.component';
import main from './main/main.component';
import constants from './app.constants';
import util from '../components/util/util.module';
import socket from '../components/socket/socket.service';
import contact from './contact/contact.component';
import about from './about/about.component';
import news from './news/news.component';
import articles from './articles/articles.component';
import members from './members/members.component';
import games from './games/games.component';

import './app.css';

angular.module('galajsy60App', [ngCookies, ngResource, ngSanitize, 'btford.socket-io', ngRoute,
  _Auth, account, admin, 'validation.match', navbar, footer, main, constants, socket, util, contact, about, news, articles, members, games
])
  .config(routeConfig)
  .run(function($rootScope, $location, Auth) {
    'ngInject';
    // Redirect to login if route requires auth and you're not logged in

    $rootScope.$on('$stateChangeStart', function(event, next) {
      Auth.isLoggedIn(function(loggedIn) {
        if(next.authenticate && !loggedIn) {
          $location.path('/login');
        }
      });
    });
  });

angular.element(document)
  .ready(() => {
    angular.bootstrap(document, ['galajsy60App'], {
      strictDi: true
    });
  });
