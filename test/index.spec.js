'use strict';

const chai = require('chai');
const dirtyChai = require('dirty-chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const expect = chai.expect;
const isStream = require('isstream');
const vfs = require('vinyl-fs');
const path = require('path');
const karma = require('karma');

const testPipeline = require('../src/index');

chai.use(sinonChai);
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

    describe('Basic Usage', () => {

      it('should utilize Karma to start a testing server', (done) => {
        const spy = sinon.spy(karma, 'Server');

        vfs.src([path.resolve(process.cwd(), './test/fixtures/', '*.spec.js')])
          .pipe(testPipeline.tdd())
          .on('finish', function () {
            expect(spy).to.have.been.called();

            karma.Server.restore();

            done();
          });

      });

      it('should start the Karma server with autoWatch enabled', (done) => {
        const spy = sinon.spy(karma, 'Server');

        vfs.src([path.resolve(process.cwd(), './test/fixtures/', '*.spec.js')])
          .pipe(testPipeline.tdd())
          .on('finish', function () {
            expect(spy.getCall(0).args[0].autoWatch).to.be.true();

            karma.Server.restore();

            done();
          });
      });

      it('should start the Karma server with singleRun disabled', (done) => {
        const spy = sinon.spy(karma, 'Server');

        vfs.src([path.resolve(process.cwd(), './test/fixtures/', '*.spec.js')])
          .pipe(testPipeline.tdd())
          .on('finish', function () {
            expect(spy.getCall(0).args[0].singleRun).to.be.false();

            karma.Server.restore();

            done();
          });
      });

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