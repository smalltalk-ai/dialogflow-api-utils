# getResultParameter
The `getResultParameter()` method returns the value from a "parameter_name":"parameter_value" pair from the Dialogflow [`/query`](https://dialogflow.com/docs/reference/agent/query#get_and_post_responses) [Response object](https://dialogflow.com/docs/reference/agent/query#get_and_post_responses).

## Synopsis
Returns the `parameter_value` of the specified  "parameter_name":"parameter_value" pair. It either returns the value or the specified `defaultValue`.

## Syntax

```js
const dfQueryUtils = require('dialogflow-api-utils').v1.Query

request.on('response', function(apiaiResponse) {
  var contexts = dfQueryUtils.getResultParameter(apiaiResponse)
}
```

### Parameters
- `response`<br>
   the Dialogflow [`/query`](https://dialogflow.com/docs/reference/agent/query#get_and_post_responses) [Response object](https://dialogflow.com/docs/reference/agent/query#get_and_post_responses)
- `parameterName`
  the parameter_name of the pair
- `defaultValue` | *optional*
  the value to return if the `parameter` is not found. In no value is specified, then `undefined` is used.



### Return Value
An object consisting of "parameter_name":"parameter_value" pairs. If there are no `results.parameters` objects, an empty object (`{}`) is returned.

## Description
A helper method which always returns an object. `getResultParameter` either returns the `result.parameters` object or `{}`.

## Examples

### Get a Parameter with a value
```js
const dfUtils = require('dialogflow-api-utils').v1
var dialogFlowResponse = {
  "id": "119a93ae-0e20-4df9-a595-97c239205de1",
  "timestamp": "2017-04-14T16:04:44.343Z",
  "lang": "en",
  "result": {
    "source": "agent",
    "resolvedQuery": "my address is 123 Same St Atlanta GA 30350",
    "action": "",
    "actionIncomplete": false,
    "parameters": {
      "address": "126 Summer"
    },
    "contexts": [{
      "name": "address",
      "parameters": {
        "address": "123 Same St",
        "address.original": [
          "123 Same St",
          "Terrace Ln",
          "Atlanta GA 30350"
        ]
      },
      "lifespan": 5
    },
    {
      "name": "profile",
      "parameters": {
        "first_name": "John",
        "last_name:": "Doe"
      },
      "lifespan": 3
    }],
    "metadata": {
      "intentId": "fde12fe3-316d-4b99-aa0e-67661231ed07",
      "webhookUsed": "false",
      "webhookForSlotFillingUsed": "false",
      "intentName": "address-gather"
    },
    "fulfillment": {
      "speech": "",
      "messages": [{
        "type": 0,
        "speech": "Great, what is the natural of your medical emergency?"
      }]
    },
    "score": 1
  },
  "status": {
    "code": 200,
    "errorType": "success"
  },
  "sessionId": "1ad23fa6-7758-4cf6-8525-c88a08c87293"
}
var paramValue = dfUtils.Query.getResultParameter(dialogFlowResponse, 'address', '')
```
`paramValue` value

```js
"126 Summer"
```
### Get a missing parameter
```js
const dfUtils = require('dialogflow-api-utils').v1
var dialogFlowResponse = {
  "id": "119a93ae-0e20-4df9-a595-97c239205de1",
  "timestamp": "2017-04-14T16:04:44.343Z",
  "lang": "en",
  "result": {
    "source": "agent",
    "resolvedQuery": "my address is 123 Same St Atlanta GA 30350",
    "action": "",
    "actionIncomplete": false,
    "parameters": {
      "address": "126 Summer"
    },
    "contexts": [{
      "name": "address",
      "parameters": {
        "address": "123 Same St",
        "address.original": [
          "123 Same St",
          "Terrace Ln",
          "Atlanta GA 30350"
        ]
      },
      "lifespan": 5
    },
    {
      "name": "profile",
      "parameters": {
        "first_name": "John",
        "last_name:": "Doe"
      },
      "lifespan": 3
    }],
    "metadata": {
      "intentId": "fde12fe3-316d-4b99-aa0e-67661231ed07",
      "webhookUsed": "false",
      "webhookForSlotFillingUsed": "false",
      "intentName": "address-gather"
    },
    "fulfillment": {
      "speech": "",
      "messages": [{
        "type": 0,
        "speech": "Great, what is the natural of your medical emergency?"
      }]
    },
    "score": 1
  },
  "status": {
    "code": 200,
    "errorType": "success"
  },
  "sessionId": "1ad23fa6-7758-4cf6-8525-c88a08c87293"
}
var paramValue1 = dfUtils.Query.getResultParameter(dialogFlowResponse, 'city', 'Washington')
var paramValue2 = dfUtils.Query.getResultParameter(dialogFlowResponse, 'city', null)
```
`paramValue1` value

```js
// paramValue1 value
"Washington"
// paramValue2 value
null
```
