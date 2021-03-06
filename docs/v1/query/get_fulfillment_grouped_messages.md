# getFulfillmentGroupedMessages
The `getFulfillmentGroupedMessages()` method returns a modified array of [Dialogflow Message objects](https://dialogflow.com/docs/reference/agent/message-objects) from the Dialogflow [`/query`](https://dialogflow.com/docs/reference/agent/query#get_and_post_responses) [Response object](https://dialogflow.com/docs/reference/agent/query#get_and_post_responses).

## Synopsis
Returns an array of [Dialogflow Message objects](https://dialogflow.com/docs/reference/agent/message-objects) with the [Cards Message objects](https://dialogflow.com/docs/reference/agent/message-objects#card_message_object) grouped into sets.

## Syntax

```js
const dfQueryUtils = require('dialogflow-api-utils').v1.Query

request.on('response', function(queryResponse) {
  var messages = dfQueryUtils.getFulfillmentGroupedMessages(queryResponse[, platformFilter])
}
```

### Parameters
- `queryResponse`<br>
   the Dialogflow [`/query`](https://dialogflow.com/docs/reference/agent/query#get_and_post_responses) [Response object](https://dialogflow.com/docs/reference/agent/query#get_and_post_responses)
- `platformFilter` | *optional*<br>
  only return messages from the specified platform, e.g., `facebook`|`kik`|`line`|`skype`|`slack`|`telegram`|`viber`


### Return Value
An array of [Dialogflow Message objects](https://dialogflow.com/docs/reference/agent/message-objects) with the Card messages grouped. If the `result.fulfillment.messages` and `result.fulfillment.speech` are empty, an empty array (`[]`) is returned.

## Description
The Dialogflow [`/query`](https://dialogflow.com/docs/reference/agent/query#get_and_post_responses) [Response object](https://dialogflow.com/docs/reference/agent/query#get_and_post_responses) returns a `result.fulfillment` object which contains Card Messages listed as individual messages. However, on most platforms, Cards are grouped. `getFulfillmentGroupedMessages` will group the Cards and/or filter messages for a specific `platform`.

To get the messages in their native format, use [`getFulfillmentMessages`](get_fulfillment_messages.md).

## Examples

### Grouping Cards
```js
const dfUtils = require('dialogflow-api-utils').v1
var dfQueryResponse = {
  "result": {
    "fulfillment": {
      "speech": "hi",
      "messages": [{
          "type": 0,
          "platform": "facebook",
          "speech": "hi"
        },
        {
          "type": 1,
          "platform": "facebook",
          "title": "Card 1 Title",
          "subtitle": "Card 1 Subtitle",
          "buttons": [{
            "text": "Button 1",
            "postback": "clicked-btn-1"
          }]
        },
        {
          "type": 1,
          "platform": "facebook",
          "title": "Card 2 Title",
          "subtitle": "Card 2 Subtitle",
          "buttons": [{
            "text": "Button 2",
            "postback": "clicked-btn-2"
          }]
        }
      ]
    }
  }
}

var messages = dfUtils.Query.getFulfillmentGroupedMessages(dfQueryResponse)
```
`messages` value

```js
[{
    "type": 0,
    "platform": "facebook",
    "speech": "hi"
  },
  {
    "type": 1,
    "platform": "facebook",
    "cards": [{
        "title": "Card 1 Title",
        "subtitle": "Card 1 Subtitle",
        "buttons": [{
          "text": "Button 1",
          "postback": "clicked-btn-1"
        }]
      },
      {
        "title": "Card 2 Title",
        "subtitle": "Card 2 Subtitle",
        "buttons": [{
          "text": "Button 2",
          "postback": "clicked-btn-2"
        }]
      }
    ]
  }
]
```
notes: the 2 Card Message objects are grouped into a single Card set

### Filter Messages
```js
const dfUtils = require('dialogflow-api-utils').v1
var dfQueryResponse = {
  "result": {
    "fulfillment": {
      "speech": "hi",
      "messages": [{
          "type": 0,
          "platform": "slack",
          "speech": "hi"
        },
        {
          "type": 0,
          "platform": "facebook",
          "speech": "hi"
        },
        {
          "type": 1,
          "platform": "facebook",
          "title": "Card 1 Title",
          "subtitle": "Card 1 Subtitle",
          "buttons": [{
            "text": "Button 1",
            "postback": "clicked-btn-1"
          }]
        },
        {
          "type": 1,
          "platform": "facebook",
          "title": "Card 2 Title",
          "subtitle": "Card 2 Subtitle",
          "buttons": [{
            "text": "Button 2",
            "postback": "clicked-btn-2"
          }]
        },
        {
          "type": 1,
          "platform": "slack",
          "title": "Card 2 Title",
          "subtitle": "Card 2 Subtitle",
          "buttons": [{
            "text": "Button 2",
            "postback": "clicked-btn-2"
          }]
        }
      ]
    }
  }
}

var filteredMessages = dfUtils.Query.getFulfillmentGroupedMessages(dfQueryResponse, 'facebook')
```
`filteredMessages` value

```js
[{
    "type": 0,
    "platform": "facebook",
    "speech": "hi"
  },
  {
    "type": 1,
    "platform": "facebook",
    "cards": [{
        "title": "Card 1 Title",
        "subtitle": "Card 1 Subtitle",
        "buttons": [{
          "text": "Button 1",
          "postback": "clicked-btn-1"
        }]
      },
      {
        "title": "Card 2 Title",
        "subtitle": "Card 2 Subtitle",
        "buttons": [{
          "text": "Button 2",
          "postback": "clicked-btn-2"
        }]
      }
    ]
  }
]
```
