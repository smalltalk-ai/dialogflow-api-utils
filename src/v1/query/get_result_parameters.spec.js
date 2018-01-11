'use strict';

const
  _ = require('lodash'),
  chai = require('chai'),
  expect = chai.expect,
  QueryUtils = require('./index'),
  API_AI_RESPONSE = {
    "id": "119a93ae-0e20-4df9-a595-97c239205de1",
    "timestamp": "2017-04-14T16:04:44.343Z",
    "lang": "en",
    "result": {
      "source": "agent",
      "resolvedQuery": "my address is 126 Summer Terrace Ln Atlanta GA 30350",
      "action": "",
      "actionIncomplete": false,
      "parameters": {},
      "contexts": [
        {
          "name": "test-address",
          "parameters": {
            "address": "126 Summer",
            "address.original": [
              "126 Summer",
              "Terrace Ln",
              "Atlanta GA 30350"
            ]
          },
          "lifespan": 5
        }
      ],
      "metadata": {
        "intentId": "fde97fe3-316d-4b99-aa0e-67660931ed07",
        "webhookUsed": "false",
        "webhookForSlotFillingUsed": "false",
        "intentName": "unit-test-address-gather"
      },
      "fulfillment": {
        "speech": "",
        "messages": [
          {
            "type": 0,
            "speech": ""
          }
        ]
      },
      "score": 1
    },
    "status": {
      "code": 200,
      "errorType": "success"
    },
    "sessionId": "2bf17fa6-7758-4cf6-8525-c88a08c87293"
  }
;

function getApiAiResponse() {
  return _.cloneDeep(API_AI_RESPONSE);
}

describe('V1.Query', () => {
  it('getResultParameters() should return {} if no parameters are passed in', () => {
    const
      expected = {}
    ;
    expect(QueryUtils.getResultParameters()).to.deep.equal(expected);
  });

  it('getResultParameters() should return {} if result.parameters do not exist', () => {
    const
      apiaiResponse = getApiAiResponse(),
      expected = {}
    ;
    delete apiaiResponse.result['parameters'];

    expect(QueryUtils.getResultParameters(apiaiResponse)).to.deep.equal(expected);
  });

  it('getResultParameters() should return parameters if they exist', () => {
    const
      apiaiResponse = getApiAiResponse(),
      parameterName = 'foo',
      expected = {
        foo: 'bar',
        bar: 'foo'
      }
    ;
    apiaiResponse.result.parameters = {
      foo: 'bar',
      bar: 'foo'
    };

    expect(QueryUtils.getResultParameters(apiaiResponse)).to.deep.equal(expected);
  });
});
