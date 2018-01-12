# dialogflow-api-utils
[![npm](https://img.shields.io/npm/v/dialogflow-api-utils.svg)](https://www.npmjs.com/package/dialogflow-api-utils)

Utility lib for working with [Dialogflow (formerly api.ai) API](https://dialogflow.com/docs/reference/agent) response data

## Installation

* Requires Api.ai/Dialogflow SDK or similar
* Install module with `npm`:
```shell
npm install --save dialogflow-api-utils
```

## Usage
Below is an example how to use the module along with the `api` module.

```javascript
const apiai = require('apiai');
// Utilities for v1 of the Dialogflow API
const dfUtils = require('dialogflow-api-utils').v1;

const app = apiai("<your client access token>");

var request = app.textRequest('<Your text query>', {
  sessionId: '<unique session id>'
});

request.on('response', function(response) {
  // get all the parameters
  var params = dfUtils.Query.getResultParameters(response);
  // get the value of parameter 'foo', if it isn't set, the return 'bar'
  var fooParam = dfUtils.Query.getResultParameter(response, 'foo', 'bar');

  // get all the messages from fulfillment
  var messages = dfUtils.Query.getFulfillmentMessages(response);
  // only get the messages for Facebook Messenger
  var fbMessages = dfUtils.Query.getFulfillmentMessages(response, 'facebook');
  // only get the messages for Slack
  var slackMessages = dfUtils.Query.getFulfillmentMessages(response, 'slack');

  // get the context 'userProfile'
  var userProfileContext = dfUtils.Query.getResponseContext(response, 'userProfile');

  // code to send messages
});

request.on('error', function(error) {
  console.log(error);
});

request.end();
```

## Documentation
[View documentation](docs/README.md) for an overview of all functions and their parameters

## License
See [LICENSE](LICENSE).
