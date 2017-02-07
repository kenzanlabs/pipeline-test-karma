'use strict';

const through2 = require('through2');
const karma = require('karma');
const path = require('path');

module.exports = {

  tdd: () => {

    const tddFiles = [];

    return through2
      .obj((file, encoding, next) => {
        tddFiles.push(file.path);

        next();
      })
      .on('finish', function () {

        new karma.Server({
          configFile: path.resolve(process.cwd(), 'karma.conf.js'),
          files: tddFiles,
          autoWatch: true,
          singleRun: false
        }).start();

      });
  },

  ci: () => {
    return through2.obj();
  }

};