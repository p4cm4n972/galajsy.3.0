'use strict';

// Use local.env.js for environment variables that will be set when the server starts locally.
// Use for your api keys, secrets, etc. This file should not be tracked by git.
//
// You will need to set these on the server you deploy to.

module.exports = {
  DOMAIN: 'http://localhost:3000',
  SESSION_SECRET: 'galajsy60-secret',

  FACEBOOK_ID: '288860251564912',
  FACEBOOK_SECRET: '6efb5cd8ce74993b286eac5bdc2f4c33',

  TWITTER_ID: 'bETJ89puTYN418qTGFvyXseJN',
  TWITTER_SECRET: 'mHe1cHOEnyDb2zwvMWW6scj7qlcdoAurWOUvdqgvk2nS01xZYS',

  GOOGLE_ID: 'app-id',
  GOOGLE_SECRET: 'secret',

  INSTAGRAM_ID: '021ff5e380ef4f619129d392690861ca',
  INSTAGRAM_SECRET: 'd86cfe18cc0a49fc852f8198b69773cd',

  // Control debug level for modules using visionmedia/debug
  DEBUG: ''
};
