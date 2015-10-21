/* jshint node: true */
'use strict';

module.exports = function (config) { // jshint ignore:line
  return {
    basePath: '',

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha', 'chai', 'chai-sinon'],

    // list of files / patterns to load in the browser
    files: [],

    // list of files to exclude
    exclude: [],

    // test results reporter to use
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['mocha', 'coverage'],

    coverageReporter: {
      dir: './reports',
      reporters: [
        {type: 'html', subdir: 'report-html'},
        {type: 'lcov', subdir: 'report-lcov'},
        {type: 'text-summary'}
      ]
    },

    preprocessors: {
      'src/**/!spec.js': 'coverage'
    },

    // ngHtml2JsPreprocessor: {
    //   // when adding files to the template cache we need to use an absolute path
    //   // path from the srcDir, that's the url our directives will expect
    //   cacheIdFromPath: function(filepath) {
    //     return filepath.slice(config.srcDir.length);
    //   }
    // },

    // web server port
    port: 9875,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: 'WARN',

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],

    // To be safe we need to include the plugins, if someone has karma installed globally
    // it will mess up the autoloading of plugins.
    plugins: [
      'karma-mocha',
      'karma-chai-sinon',
      'karma-chai-plugins',
      'karma-phantomjs-launcher',
      'karma-mocha-reporter',
      'karma-coverage',
      'karma-chrome-launcher'
    ]
  };
};
