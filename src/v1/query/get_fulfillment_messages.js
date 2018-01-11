'use strict';

const
  Internal = require('./internal')
;

module.exports = (apiaiResponse, platformFilter) => {
  let
    messages = Internal.getMessages(apiaiResponse)
  ;

  return Internal.filterMessages(messages, platformFilter);
};
