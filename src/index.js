/* jshint node: true */
/* eslint-disable */
'use strict';

var handyman = require('pipeline-handyman');
var Server = require('karma').Server;

var config = {
  enableReporting: true,
  debug: false,
  karmaOpts: {
  },
  tdd: {},
  ci: {
    singleRun: true
  }
};

module.exports = karmaFunctions;

function karmaFunctions(userConfig) {
  var karmaCommonConf = require('./karma.conf.js')();
  var pipeline = {
    testCI: testCI,
    testTDD: testTDD
  };

  if (userConfig) {
    config = handyman.mergeConfig(config, userConfig);
  }

  if (!config.enableReporting) {
    config.karmaOpts.reporters = [];
  }

  if (config.debug) {
    config.karmaOpts.browsers = ['Chrome'];
  }

  karmaCommonConf = handyman.mergeConfig(karmaCommonConf, config.karmaOpts);
  
  return pipeline;

  function testCI (done) {
    var karmaConfig = handyman.mergeConfig(karmaCommonConf, config.ci);
    var server = new Server(karmaConfig, done);
    
    server.start();
  }

  function testTDD(done) {
    var karmaConfig = handyman.mergeConfig(karmaCommonConf, config.tdd);
    var server = new Server(karmaConfig, done);
    
    server.start();
  }
}
