/* jshint node: true */
'use strict';

const
  chai = require('chai'),
  expect = chai.expect,
  QueryUtils = require('./index')
;

describe('V1.Query', () => {
  it('getResponseContext() should return {} if no parameters are passed in', () => {
    expect(QueryUtils.getResponseContext()).to.deep.equal({});
  });

  it('getResponseContext() should return {} if null and undefined parameters are passed in', () => {
    expect(QueryUtils.getResponseContext(null)).to.deep.equal({});
  });

  it('getResponseContext() should return {} if null parameters are passed in', () => {
    expect(QueryUtils.getResponseContext(null, null)).to.deep.equal({});
  });

  it('getResponseContext() should return {} if empty parameters are passed in', () => {
    expect(QueryUtils.getResponseContext({}, '')).to.deep.equal({});
  });

  it('getResponseContext() should return {} if name is undefined', () => {
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
            },
            {
              "name": "enroll",
              "parameters": {
                "address": "126 Summer",
                "foo": "bar"
              },
              "lifespan": 5
            },
            {
              "name": "enroll-foo",
              "parameters": {
                "foo": "bar"
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
      expected = {}
    ;
    expect(QueryUtils.getResponseContext(apiaiResponse)).to.deep.equal(expected);
  });

  it('getResponseContext() should return {} if name is null', () => {
    const
      name = null,
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
            },
            {
              "name": "enroll",
              "parameters": {
                "address": "126 Summer",
                "foo": "bar"
              },
              "lifespan": 5
            },
            {
              "name": "enroll-foo",
              "parameters": {
                "foo": "bar"
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
      expected = {}
    ;
    expect(QueryUtils.getResponseContext(apiaiResponse, name)).to.deep.equal(expected);
  });

  it('getResponseContext() should return {} context if name is empty', () => {
    const
      name = '',
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
            },
            {
              "name": "enroll",
              "parameters": {
                "address": "126 Summer",
                "foo": "bar"
              },
              "lifespan": 5
            },
            {
              "name": "enroll-foo",
              "parameters": {
                "foo": "bar"
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
      expected = {}
    ;
    expect(QueryUtils.getResponseContext(apiaiResponse, name)).to.deep.equal(expected);
  });

  it('getResponseContext() should return {} context if response contexts are missing', () => {
    const
      name = 'enroll',
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
      expected = {}
    ;
    expect(QueryUtils.getResponseContext(apiaiResponse, name)).to.deep.equal(expected);
  });

  it('getResponseContext() should return {} if name is unmatched', () => {
    const
      name = 'no-match',
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
            },
            {
              "name": "enroll",
              "parameters": {
                "address": "126 Summer",
                "foo": "bar"
              },
              "lifespan": 5
            },
            {
              "name": "enroll-foo",
              "parameters": {
                "foo": "bar"
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
      expected = {}
    ;
    expect(QueryUtils.getResponseContext(apiaiResponse, name)).to.deep.equal(expected);
  });

  it('getResponseContext() should return matching context if name is matched', () => {
    const
      name = 'enroll',
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
            },
            {
              "name": "enroll",
              "parameters": {
                "address": "126 Summer",
                "foo": "bar"
              },
              "lifespan": 5
            },
            {
              "name": "enroll-foo",
              "parameters": {
                "foo": "bar"
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
        "name": "enroll",
        "parameters": {
          "address": "126 Summer",
          "foo": "bar"
        },
        "lifespan": 5
      }
    ;
    expect(QueryUtils.getResponseContext(apiaiResponse, name)).to.deep.equal(expected);
  });

  it('getResponseContext() should return {} context if name is not fullly matched', () => {
    const
      name = 'enroll-',
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
            },
            {
              "name": "enroll",
              "parameters": {
                "address": "126 Summer",
                "foo": "bar"
              },
              "lifespan": 5
            },
            {
              "name": "enroll-foo",
              "parameters": {
                "foo": "bar"
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
      expected = {}
    ;
    expect(QueryUtils.getResponseContext(apiaiResponse, name)).to.deep.equal(expected);
  });

});
