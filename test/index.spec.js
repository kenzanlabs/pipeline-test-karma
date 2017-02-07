'use strict';

const chai = require('chai');
const dirtyChai = require('dirty-chai');
const expect = chai.expect;
const isStream = require('isstream');

const testPipeline = require('../src/index');

chai.use(dirtyChai);

describe('pipeline-test-node', () => {

  describe('tdd Method', () => {

    it('should expose a tdd method', () => {
      expect(testPipeline.tdd).to.exist();
      expect(testPipeline.tdd).to.be.a('function');
    });

    it('should return a stream object', function () {
      expect(testPipeline.tdd()).to.be.an('object');
      expect(isStream(testPipeline.tdd())).to.be.true();
    });

  });

  describe('ci Method', () => {

    it('should expose a ci method', () => {
      expect(testPipeline.ci).to.exist();
      expect(testPipeline.ci).to.be.a('function');
    });

    it('should return a stream object', function () {
      expect(testPipeline.ci()).to.be.an('object');
      expect(isStream(testPipeline.ci())).to.be.true();
    });

  });

});