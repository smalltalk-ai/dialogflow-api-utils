'use strict';

const
  chai = require('chai'),
  expect = chai.expect,
  QueryUtils = require('./index')
;

describe('V1.Query', () => {
  it('getResponseFulfillment() should return {} if no parameter is passed in', () => {
    expect(QueryUtils.getResponseFulfillment()).to.deep.equal({});
  });

  it('getResponseFulfillment() should return {} if null parameter is passed in', () => {
    expect(QueryUtils.getResponseFulfillment(null)).to.deep.equal({});
  });

  it('getResponseFulfillment() should return {} if {} parameter is passed in', () => {
    const
      apiaiResponse = {
        result: {}
      },
      expected = {}
    ;

    expect(QueryUtils.getResponseFulfillment(apiaiResponse)).to.deep.equal(expected);
  });

  it('getResponseFulfillment() should return object if full fulfillment is passed in', () => {
    const
      apiaiResponse = {
        "id": "119a93ae-0e20-4df9-a595-97c239205de1",
        "timestamp": "2017-04-14T16:04:44.343Z",
        "lang": "en",
        "result": {
          "source": "agent",
          "resolvedQuery": "my address is 126 Summer Terrace Ln Atlanta GA 30350",
          "action": "",
          "actionIncomplete": false,
          "parameters": {
            "address": "126 Summer"
          },
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
      },
      expected = {
    		"speech": "",
    		"messages": [{
    			"type": 0,
    			"speech": ""
    		}]
    	}
    ;
    expect(QueryUtils.getResponseFulfillment(apiaiResponse)).to.deep.equal(expected);
  });
});
