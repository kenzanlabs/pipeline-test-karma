## pipeline-test-karma

## Information

| Package       | Description   | Version|
| ------------- |:-------------:| -----:|
| pipeline-test-karma| Pipeline to run tests in real browsers using Karma | 0.1.0 |

# Overview

Gulp Pipeline that uses Karma to run tests.

_repo_: `ssh://git@github.com:kenzanmedia/pipeline-test-karma.git`

_jenkins_: `https://kenzan.ci.cloudbees.com/job/CI-pipelines-test-karma/`

## Install
`npm install git+ssh://git@github.com/kenzanmedia/pipeline-test-karma.git`

## Usage
```javascript
var gulp = require('gulp');
var testPipeline = require('pipeline-test-karma')();

gulp.task('test:ci', ['validate:js'], function() {
  testPipeline.testCI();
});

gulp.task('test:tdd', function() {
  testPipeline.testTDD();
});
```

## Options

  Pipeline options:
  * _config_ -> Object that contains the configuration.

    1. __enableReporting:__ If set to __false__ test reports  won't be generated (Not recommended ). By default the pipeline will generate the `mocha` and `coverage` reports.

    2. __debug:__ If set to __true__ `Chrome` will be open as browser to run the tests.

    3. __karmaOpts:__ Gathers all of the specific configurations for Karma. If you'd like to change the default configurations or add more parameters you can use this object to include your preferences.

      + __karmaOpts.files:__ This object is required. It specifies the tests and the files to be tested.

    4. __tdd:__ Object to specify Karma configurations when running the testTDD method.

    5. __ci:__ Object to specify Karma configurations when running the testCI method.

  ```javascript
  config = {
    enableReporting: true,
    debug: false,
    karmaOpts: {
      files: [
        './test/index.spec.js'
      ]
    },
    tdd: {},
    ci: {
      singleRun: true,
    }
  }
  ```

## Results

  This pipeline returns an object. This object has two methods to run the  tests using Karma. Depending on the configuration provided [see Options](#options) reports will be generated or not.

  + __testCI:__ This method will run the tests just one time, opening the browsers, running the tests, and finally closing the browsers.

  + __testTDD:__ This method will run the tests and will keep the browsers listening for file changes to run the tests again. This process will run until it is stopped by the user through the CLI.

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
