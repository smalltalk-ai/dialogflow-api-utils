# getResponseFulfillment
The `getResponseFulfillment()` method returns the `result.fulfillment` object from the Dialogflow [`/query`](https://dialogflow.com/docs/reference/agent/query#get_and_post_responses) [Response object](https://dialogflow.com/docs/reference/agent/query#get_and_post_responses).

## Synopsis
Returns an the `result.fulfillment` object containing data about text response(s), rich messages, response received from webhook.

## Syntax

```js
const dfQueryUtils = require('dialogflow-api-utils').v1.Query

request.on('response', function(response) {
  var fulfillment = dfQueryUtils.getResponseFulfillment(response)
}
```

### Parameters
- `fulfillment`<br>
   the Dialogflow [`/query`](https://dialogflow.com/docs/reference/agent/query#get_and_post_responses) [Response object](https://dialogflow.com/docs/reference/agent/query#get_and_post_responses)

### Return Value
The `result.fulfillment` object. If the `result.fulfillment` is null or undefined, an empty object (`{}`) is returned.

## Description
A helper method which always returns an object. `getResponseFulfillment` either returns the `result.filfullment` object or `{}`.

## Examples
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
    }],
    "metadata": {
      "intentId": "fde12fe3-316d-4b99-aa0e-67661231ed07",
      "webhookUsed": "false",
      "webhookForSlotFillingUsed": "false",
      "intentName": "address-gather"
    },
    "fulfillment": {
      "speech": "Great, what is the natural of your medical emergency?",
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
var fulfillment = dfUtils.Query.getResponseFulfillment(dialogFlowResponse)
```
`fulfillment` value

```js
{
  "speech": "Great, what is the natural of your medical emergency?",
  "messages": [{
    "type": 0,
    "speech": "Great, what is the natural of your medical emergency?"
  }]
}
```
