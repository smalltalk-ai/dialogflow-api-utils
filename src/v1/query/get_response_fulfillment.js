'use strict';

const
  QueryUtils = require('./index')
;

function addSpeech(messages, speech) {
  if (speech) {
    messages = messages.concat({
      type: 0,
      speech
    })
  }
  return messages;
}

function includeMsg(platformFilter, platform) {
  // if platformFilter is set, then filter out other platform messages
  return !platformFilter || platformFilter === platform;
}

module.exports = (apiaiResponse) => {
  let
    result = QueryUtils.getResponseResult(apiaiResponse)
  ;
  return result.fulfillment || {};
};
