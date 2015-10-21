/* jshint node: true */

'use strict';

var gulp = require('gulp');
var testPipeline = require('./src/index.js')();
var validatePipeline = require('pipeline-validate-js')();
var testnode = require('pipeline-test-node')();

var config = {
  files: [
   'src/**/*.js',
  ]
};

gulp.task('validate:js', function() {
  return gulp
    .src(config.files)
    .pipe(validatePipeline.validateJS());

});

gulp.task('test:ci', ['validate:js'], function() {
  testPipeline.testCI();
});

gulp.task('test:tdd', ['validate:js'], function() {
  testPipeline.testTDD();
});
