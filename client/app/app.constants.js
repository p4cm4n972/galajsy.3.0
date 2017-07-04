'use strict';

import angular from 'angular';

export default angular.module('galajsy60App.constants', [])
  .constant('appConfig', require('../../server/config/environment/shared'))
  .name;
