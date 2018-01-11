'use strict';

const
  QueryUtils = require('./index')
;

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
