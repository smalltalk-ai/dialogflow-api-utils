# getResponseContextParameters
The `getResponseContextParameters()` method returns an object consisting of "parameter_name":"parameter_value" and "parameter_name.original":"original_parameter_value" pairs of  the specified `context` from the `result.contexts` array in the Dialogflow [`/query`](https://dialogflow.com/docs/reference/agent/query#get_and_post_responses) [Response object](https://dialogflow.com/docs/reference/agent/query#get_and_post_responses).

## Synopsis
Returns an object consisting of "parameter_name":"parameter_value" and "parameter_name.original":"original_parameter_value" pairs of  the specified `context`. It always returns a object (`{}`).

## Syntax

```js
const dfQueryUtils = require('dialogflow-api-utils').v1.Query

request.on('response', function(queryResponse) {
  var contexts = dfQueryUtils.getResponseContextParameters(queryResponse, contextName)
}
```

### Parameters
- `queryResponse`<br>
   the Dialogflow [`/query`](https://dialogflow.com/docs/reference/agent/query#get_and_post_responses) [Response object](https://dialogflow.com/docs/reference/agent/query#get_and_post_responses)
- `contextName`
  the `context` name

### Return Value
An object consisting of "parameter_name":"parameter_value" and "parameter_name.original":"original_parameter_value" pairs. If a match cannot be found, an empty object (`{}`) is returned.

## Description
A helper method which always returns an object. `getResponseContextParameters` either returns the `parameters` object or an empty object `{}`.

## Examples

```js
const dfUtils = require('dialogflow-api-utils').v1
var dfQueryResponse = {
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
var params = dfUtils.Query.getResponseContextParameters(dfQueryResponse, 'profile')
```
`params` value

```js
{
  "first_name": "John",
  "last_name:": "Doe"
}
```
