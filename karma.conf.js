'use strict';

module.exports = (config) => {

  config.set({

    basePath: './',
    frameworks: ['mocha', 'chai', 'sinon-chai', 'dirty-chai'],
    preprocessors: {
      'test/fixtures/*.spec.js': ['babel']
    },
    babelPreprocessor: {
      options: {
        presets: ['es2015'],
        sourceMap: 'inline'
      }
    },
    reporters: ['dots'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['PhantomJS'],
    singleRun: true,
    concurrency: Infinity
  });

};
