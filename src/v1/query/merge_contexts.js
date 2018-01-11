'use strict';

const
  merge = require('merge')
;

module.exports = (sourceContexts, newContexts, override) => {
  // default override to false
  override = !!override;
  if (!newContexts) {
    return sourceContexts;
  }
  sourceContexts = sourceContexts || [];
  newContexts.forEach((context) => {
    if (!context.name) {
      // no name, so ignore
    } else {
      let index = sourceContexts.findIndex((sourceContext) => {
        return sourceContext.name === context.name;
      });
      if (index === -1) {
        // add the context
        sourceContexts[sourceContexts.length] = context;
      } else {
        // override or merge the context
        if (override) {
          // override
          sourceContexts[index] = context;
        } else {
          // merge
          sourceContexts[index] = merge.recursive(true, sourceContexts[index], context);
        }
      }
    }
  });
  return sourceContexts;
};
