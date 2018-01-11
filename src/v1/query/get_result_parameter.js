/* jshint node: true */
'use strict';

const
  QueryUtils = require('./index')
;

module.exports = (apiaiResponse, parameterName, defaultValue) => {
  if (!parameterName) {
    return defaultValue;
  }
  let
    result = QueryUtils.getResponseResult(apiaiResponse)
  ;
  return result.parameters && result.parameters[parameterName] || defaultValue;
};
