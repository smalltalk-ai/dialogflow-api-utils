'use strict';

const
  QueryUtils = require('./index')
;

module.exports = (apiaiResponse) => {
  let
    result = QueryUtils.getResponseResult(apiaiResponse)
  ;
  return result.parameters || {};
};
