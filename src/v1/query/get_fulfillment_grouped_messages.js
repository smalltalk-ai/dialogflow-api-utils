'use strict';

const
  QueryUtils = require('./index'),
  getMessages = require('./_get_messages')
;

module.exports = (apiaiResponse, platformFilter) => {
  let
    messages = getMessages(apiaiResponse)
  ;

  return !platformFilter ?
    messages :
    messages.filter(message => message.platform === platformFilter)
  ;
};
