'use strict';

const
  QueryUtils = require('./index')
;

function includeMsg(platformFilter, platform) {
  // if platformFilter is set, then filter out other platform messages
  return !platformFilter || platformFilter === platform;
}

module.exports = (apiaiResponse, platformFilter) => {
  let
    fulfillment = QueryUtils.getResponseFulfillment(apiaiResponse),
    messages = fulfillment.messages || [],
    speech = fulfillment.speech || ''
  ;
  if (!messages.length && !speech) {
    return [];
  } else if (!messages.length) {
    return [{
      type: 0,
      speech
    }];
  }
  return !platformFilter ?
    messages :
    messages.filter(message => message.platform === platformFilter)
  ;
};
