'use strict';

const gulp = require('gulp');
const listing = require('gulp-task-listing');
const validatePipeline = require('pipeline-validate-js');
const testPipeline = require('pipeline-test-node');

const config = {

  linter: {
    files: [
      './*.js',
      './src/*.js',
      './test/*.js'
    ],
    options: {
      env: {
        es6: true
      }
    }
  },

  test: {
    files: [
      './src/*.js',
      './test/**/*.spec.js'
    ]
  }
};

gulp.task('lint', () => {
  return gulp
    .src(config.linter.files)
    .pipe(validatePipeline.validateJS(config.linter.options));
});

gulp.task('test', ['lint'], () => {
  return gulp
    .src(config.test.files)
    .pipe(testPipeline.test());
});

gulp.task('build', ['test']);
gulp.task('default', ['help']);
gulp.task('help', listing);
