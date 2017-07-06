'use strict';
/*eslint no-process-env:0*/

import path from 'path';
import _ from 'lodash';

/*function requiredProcessEnv(name) {
  if(!process.env[name]) {
    throw new Error('You must set the ' + name + ' environment variable');
  }
  return process.env[name];
}*/

// All configurations will extend these options
// ============================================
var all = {
  env: process.env.NODE_ENV,

  // Root path of server
  root: path.normalize(`${__dirname}/../../..`),

  // Browser-sync port
  browserSyncPort: process.env.BROWSER_SYNC_PORT || 3000,

  // Server port
  port: process.env.PORT || 9000,

  // Server IP
  ip: process.env.IP || '0.0.0.0',

  // Should we populate the DB with sample data?
  seedDB: false,

  // Secret for session, you will want to change this and make it an environment variable
  secrets: {
    session: 'galajsy60-secret'
  },

  // MongoDB connection options
  mongo: {
    options: {
      db: {
        safe: true
      }
    }
  },

  facebook: {
    clientID: process.env.FACEBOOK_ID || '288860251564912',
    clientSecret: process.env.FACEBOOK_SECRET || '6efb5cd8ce74993b286eac5bdc2f4c33',
    callbackURL: `${process.env.DOMAIN || ''}/auth/facebook/callback`
  },

  twitter: {
    clientID: process.env.TWITTER_ID || 'bETJ89puTYN418qTGFvyXseJN',
    clientSecret: process.env.TWITTER_SECRET || 'mHe1cHOEnyDb2zwvMWW6scj7qlcdoAurWOUvdqgvk2nS01xZYS',
    callbackURL: `${process.env.DOMAIN || ''}/auth/twitter/callback`
  },

  google: {
    clientID: process.env.GOOGLE_ID || '894644192995-qt7o1043n34e5anpipu8vsq04u8stg7a.apps.googleusercontent.com',
    clientSecret: process.env.GOOGLE_SECRET || 'HTUTeH4w5dL0-j5IXgV1mt7X',
    callbackURL: `${process.env.DOMAIN || ''}/auth/google/callback`
  }
};

// Export the config object based on the NODE_ENV
// ==============================================
module.exports = _.merge(
  all,
  require('./shared'),
  require(`./${process.env.NODE_ENV}.js`) || {});
