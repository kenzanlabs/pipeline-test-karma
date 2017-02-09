# pipeline-test-karma

## Information

| Package       | Description   | Version|
| ------------- |:-------------:| -----:|
| pipeline-test-karma| Pipeline to run tests in real browsers using Karma | 0.1.0 |

# Overview

Gulp Pipeline that uses Karma to run tests.

This is a Gulp pipeline that allows a team to run unit test with Karma within their project. As part of the Keystone project for Kenzan, this pipeline is opinionated to promote best practices as favored by the organization. It defines a module that contains a collection of methods that allow for a pre-packaged feature set, with the ability to be customized to fit any project need.

A fixture has been provided in `test/fixtures/` of a generic unit test, used to validate proper pipeline usage. As changes are presented to the default configuration, the properties will be reflected in this file as well, for easy visualization of property set changes.

## Install
`npm install pipeline-test-karma`

## Usage

### Test-Driven Development (TDD)
The `.tdd()` method is expected to be used during development and will start a Karma server with auto-watch enabled, which will restart the test suite on file changes.

```javascript
const testKarmaPipeline = require('pipeline-test-karma');

gulp.task('test:tdd', () => {
  gulp.src([/* array of files to test */])
    .pipe(testKarmaPipeline.tdd());
});

```

### Continuous Integration (CI)
The `.ci()` method is expected to be used during CI builds and will only run a single time. 

```javascript
const testKarmaPipeline = require('pipeline-test-karma');

gulp.task('test:ci', () => {
  gulp.src([/* array of files to test */])
    .pipe(testKarmaPipeline.ci());
});

```

## Options
// @TODO

## Results
This pipeline will start a Karma server, run a collection of test suites, and exit according to Karma's lifecycle. 

## LICENSE

  Copyright (c) 2015 Kenzan <http://kenzan.com>

  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
