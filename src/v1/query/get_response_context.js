'use strict';

const
  QueryUtils = require('./index')
;

module.exports = (apiaiResponse, contextName) => {
  if (!contextName) {
    return {};
  }
  let
    contexts = QueryUtils.getResponseContexts(apiaiResponse),
    matchedContext = contexts.find(context => {
      return context.name === contextName;
    })
  ;
  return matchedContext || {};
};
