'use strict';

const
  chai = require('chai'),
  expect = chai.expect,
  Utils = require('./index'),
  v1Utils = require('./index').v1,
  v1QueryUtils = require('./index').v1.Query
;

describe('V1.Query', () => {
  it('calling method using Utils.v1.Query should return results', () => {
    expect(Utils.v1.Query.getResponseResult()).to.deep.equal({});
  });

  it('calling method using v1Utils.Query should return results', () => {
    expect(v1Utils.Query.getResponseResult()).to.deep.equal({});
  });

  it('calling method using v1QueryUtils should return results', () => {
    expect(v1QueryUtils.getResponseResult()).to.deep.equal({});
  });
});
