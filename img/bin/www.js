#!/usr/bin/env node
var debug = require('debug')('log4js-example');
var cluster = require('express-cluster');

/**
 * make a log directory, just in case it isn't there.
 */
try {
  require('fs').mkdirSync('./log');
} catch (e) {
  if (e.code != 'EEXIST') {
    console.error("Could not set up log directory, error was: ", e);
    process.exit(1);
  }
}

/**
 * Initialise log4js first, so we don't miss any log messages
 */
var log4js = require('log4js');
log4js.configure('D:\\ndownload\\img\\config\\log4js.json');

var log = log4js.getLogger("startup");

//let's start up a cluster
cluster(function() {
  var app = require('../app');

  app.set('port', process.env.PORT || 3000);

  var server = app.listen(app.get('port'), function() {
    log.info('Express server listening on port ', server.address().port, " with pid ", process.pid );
  });
});
