# pipeline-test-karma

## Information

| Package       | Description   | Version|
| ------------- |:-------------:| -----:|
| pipeline-test-karma| Pipeline to run tests in real browsers using Karma | 0.1.0 |

# Overview

Gulp Pipeline that uses Karma to run tests.

_repo_: `ssh://git@github.com:kenzanmedia/pipeline-test-karma.git`

_jenkins_: `https://kenzan.ci.cloudbees.com/job/CI-pipelines-test-karma/`

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
