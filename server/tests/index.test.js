"use strict";

process.env.NODE_ENV = 'test';
// get the application server module

var http = require('http');
var index = require('../index');

var expect = require('chai').expect;
var Browser = require('zombie');

describe('index', function() {

  before(function() {
    this.server = http.createServer(index).listen(9000);
    this.browser = new Browser({ site: 'http://localhost:9000' });
  });

  before(function(done) {
    this.browser.visit('/', done);
  });

  describe('page', function() {
    it('shows string', function() {
      expect(this.browser.html()).to.have.string('RESPONSE');
    });
  });

  after(function(done) {
    this.server.close(done);
  });
});
