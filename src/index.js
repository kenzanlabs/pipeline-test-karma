'use strict';

const through2 = require('through2');

module.exports = {

  tdd: () => {
    return through2.obj();
  },

  ci: () => {
    return through2.obj();
  }

};