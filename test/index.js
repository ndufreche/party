'use strict';

const Lab =  require('lab');
const Hapi = require('hapi');
const Path = require('path');
const {expect} = require('code');
const {describe, it, beforeEach} = exports.lab = Lab.script();

describe('Test nconf building', () => {
  let server;

  beforeEach(done => {
    server = new Hapi.Server();
    server.connection();
    done();
  });
  
  it('Loading models', done => {
    server.register({
      register: require('../lib/index'),
      options: {
        models: [Path.join(__dirname, 'fixtures', 'models')]
      }
    }, err => {
      console.log(err);
      expect(err).to.not.exist()
      
      done();
    });
  });
});