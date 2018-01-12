'use strict';

const
  chai = require('chai'),
  expect = chai.expect,
  QueryUtils = require('./index')
;

describe('V1.Query', () => {
  it('mergeContexts() should return undefined if no parameters are passed in', () => {
    expect(QueryUtils.mergeContexts()).to.equal(undefined);
  });

  it('mergeContexts() should return [] if empty array is passed into undefined', () => {
    expect(QueryUtils.mergeContexts(undefined, [])).to.deep.equal([]);
  });

  it('mergeContexts() should return [] if undefined is passed into []', () => {
    expect(QueryUtils.mergeContexts([], undefined)).to.deep.equal([]);
  });

  it('mergeContexts() should return merged array if two arrays passed in', () => {
    const
      sourceContexts = [
        { name: 'enroll' }
      ],
      newContexts = [
        { name: 'enroll-test', parameters: { foo: 'bar' } }
      ],
      expected = [
        { name: 'enroll' },
        { name: 'enroll-test', parameters: { foo: 'bar' } }
      ]
    expect(QueryUtils.mergeContexts(sourceContexts, newContexts)).to.deep.equal(expected);
  });

  it('mergeContexts() should return merged contexts if both arrays have the same context', () => {
    const
      sourceContexts = [
        { name: 'enroll', foo: 'bar' }
      ],
      newContexts = [
        { name: 'enroll' },
        { name: 'enroll-test', parameters: { foo: 'bar' } }
      ],
      expected = [
        { name: 'enroll', foo: 'bar' },
        { name: 'enroll-test', parameters: { foo: 'bar' } }
      ]
    ;
    expect(QueryUtils.mergeContexts(sourceContexts, newContexts)).to.deep.equal(expected);
  });

  it('mergeContexts() should return merged contexts if both arrays have complex context', () => {
    const
      sourceContexts = [
        { name: 'enroll', parameters: { foo: 'bar' } }
      ],
      newContexts = [
        { name: 'enroll', parameters: { bar: 'foo' } },
        { name: 'enroll-test', parameters: { foo: 'bar' } }
      ],
      expected = [
        { name: 'enroll', parameters: { foo: 'bar', bar: 'foo' } },
        { name: 'enroll-test', parameters: { foo: 'bar' } }
      ]
    ;
    expect(QueryUtils.mergeContexts(sourceContexts, newContexts)).to.deep.equal(expected);
  });

  it('mergeContexts() should ignore context if name is not set', () => {
    const
      sourceContexts = [
        { name: 'enroll', foo: 'bar' }
      ],
      newContexts = [
        { parameters: { foo: 'bar' } },
        { name: '', parameters: { foo: 'bar' } }
      ],
      expected = [
        { name: 'enroll', foo: 'bar' }
      ]
    ;
    expect(QueryUtils.mergeContexts(sourceContexts, newContexts)).to.deep.equal(expected);
  });

  it('mergeContexts() should return override context if both arrays have the same context', () => {
    const
      sourceContexts = [
        { name: 'enroll', foo: 'bar' },
        { name: 'enroll-test2', foo: 'bar' }
      ],
      newContexts = [
        { name: 'enroll' },
        { name: 'enroll-test', parameters: { foo: 'bar' } }
      ],
      expected = [
        { name: 'enroll' },
        { name: 'enroll-test2', foo: 'bar' },
        { name: 'enroll-test', parameters: { foo: 'bar' } }
      ]
    expect(QueryUtils.mergeContexts(sourceContexts, newContexts, true)).to.deep.equal(expected);
  });
});
