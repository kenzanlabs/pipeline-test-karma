/* jshint node: true */
'use strict';

var handyman = require('pipeline-handyman');
var Server = require('karma').Server;

var config = {
  enableReporting: true,
  debug: false,
  karmaOpts: {
    files: [
    ]
  },
  tdd: {},
  ci: {
    singleRun: true,
  }
};

module.exports = karmaFunctions;

function karmaFunctions(userConfig) {
  var karmaCommonConf = require('./karma.conf.js')();

  if (userConfig) {
    config = handyman.updateConf(config, userConfig);
  }

  if (!config.enableReporting) {
    config.karmaOpts.reporters = [];
  }

  if (config.debug) {
    config.karmaOpts.browsers = ['Chrome'];
  }

  karmaCommonConf = handyman.updateConf(karmaCommonConf, config.karmaOpts);

  var pipeline = {
    testCI: testCI,
    testTDD: testTDD
  };
  return pipeline;

  function testCI (done) {
    var karmaConfig = handyman.updateConf(karmaCommonConf, config.ci);
    var server = new Server(karmaConfig, done);
    server.start();
  }

  function testTDD(done) {
    var karmaConfig = handyman.updateConf(karmaCommonConf, config.tdd);
    var server = new Server(karmaConfig, done);
    server.start();
  }
}
