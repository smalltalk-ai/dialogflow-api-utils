'use strict';

const
  QueryUtils = require('./index')
;

module.exports = (apiaiResponse, contextName) => {
  let
    matchedContext = QueryUtils.getResponseContext(apiaiResponse, contextName)
  ;
  return matchedContext && matchedContext.parameters || {};
};
