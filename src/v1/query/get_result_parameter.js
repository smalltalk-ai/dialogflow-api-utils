'use strict';

const
  QueryUtils = require('./index')
;

module.exports = (apiaiResponse, parameterName, defaultValue) => {
  if (!parameterName) {
    return defaultValue;
  }
  let
    parameters = QueryUtils.getResultParameters(apiaiResponse)
  ;
  return parameters[parameterName] || defaultValue;
};
