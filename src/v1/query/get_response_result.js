'use strict';

module.exports = (apiaiResponse) => {
  return apiaiResponse && apiaiResponse.result || {};
};
