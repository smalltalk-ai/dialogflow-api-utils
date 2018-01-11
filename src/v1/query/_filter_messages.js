'use strict';

module.exports = (messages, platformFilter) => {
  return !platformFilter ?
    messages :
    messages.filter(message => message.platform === platformFilter)
  ;
};
