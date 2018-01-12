# getResponseContexts
The `getResponseContexts()` method returns an array of `contexts` objects from the Dialogflow [`/query`](https://dialogflow.com/docs/reference/agent/query#get_and_post_responses) [Response object](https://dialogflow.com/docs/reference/agent/query#get_and_post_responses).

## Synopsis
Returns an array of `context` objects. It either returns the `result.contexts` array or a filtered set of `context` objects.

## Syntax

```js
const dfQueryUtils = require('dialogflow-api-utils').v1.Query

request.on('response', function(queryResponse) {
  var contexts = dfQueryUtils.getResponseContexts(queryResponse[, nameMatch])
}
```

### Parameters
- `queryResponse`<br>
   the Dialogflow [`/query`](https://dialogflow.com/docs/reference/agent/query#get_and_post_responses) [Response object](https://dialogflow.com/docs/reference/agent/query#get_and_post_responses)
- `nameMatch` | *optional*<br>
  a RegEx pattern to match the `context` name

### Return Value
An array of `context` objects. If the `nameMatch` is not provided, all the `context` objects are returned. If there are no `context` objects or no matches for the `context` name, an empty array (`[]`) is returned.

## Description
A helper method which always returns an array. `getResponseContexts` either returns the `result.contexts` array, a filtered array, or `[]`.

## Examples

### Get all Contexts
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
var result = dfUtils.Query.getResponseContexts(dialogFlowResponse)
```
`result` value

```js
[{
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
  }
]
```
### Get set of Contexts
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
      "name": "profileName",
      "parameters": {
        "first_name": "John",
        "last_name:": "Doe"
      },
      "lifespan": 3
    },
    {
      "name": "profileContact",
      "parameters": {
        "email": "john.doe@email.com",
        "phone:": "+15155551212"
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
var result = dfUtils.Query.getResponseContexts(dialogFlowResponse, '^profile')
```
`result` value

```js
[{
    "name": "profileName",
    "parameters": {
      "first_name": "John",
      "last_name:": "Doe"
    },
    "lifespan": 3
  },
    {
    "name": "profileContact",
    "parameters": {
      "email": "john.doe@email.com",
      "phone:": "+15155551212"
    },
    "lifespan": 4
  }
]
```
