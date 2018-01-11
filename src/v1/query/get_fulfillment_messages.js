'use strict';

const
  QueryUtils = require('./index'),
  Internal = require('./internal')
;

module.exports = (apiaiResponse, platformFilter) => {
  let
    messages = Internal.getMessages(apiaiResponse)
  ;

  return Internal.filterMessages(messages, platformFilter);
};
