/* jshint node: true */
'use strict';

const
  QueryUtils = require('./index')
;

module.exports = (apiaiResponse, nameMatch) => {
  let
    regex = new RegExp(nameMatch, 'i'),
    result = QueryUtils.getResponseResult(apiaiResponse),
    contexts = result.contexts || []
  ;
  return !nameMatch ?
    contexts :
    contexts.filter(context => {
      return regex.exec(context.name) !== null;
    })
  ;
};
