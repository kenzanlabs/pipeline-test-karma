'use strict';

const through2 = require('through2');
const karma = require('karma');
const path = require('path');

const streamFiles = [];

let serverOptions = {
  configFile: path.resolve(process.cwd(), 'karma.conf.js')
};

module.exports = {

  tdd: () => {

    return pipelineFactory()
      .on('finish', () => {

        serverOptions.files = streamFiles;
        serverOptions.autoWatch = true;
        serverOptions.singleRun = false;

        new karma.Server(serverOptions).start();
      });
  },

  ci: () => {

    return pipelineFactory()
      .on('finish', () => {

        serverOptions.files = streamFiles;
        serverOptions.autoWatch = false;
        serverOptions.singleRun = true;

        new karma.Server(serverOptions).start();

      });
  }

};

function pipelineFactory () {
  return through2.obj((file, encoding, next) => {
    streamFiles.push(file.path);

    next();
  });
}