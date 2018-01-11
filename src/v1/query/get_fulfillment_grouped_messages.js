'use strict';

const
  Internal = require('./internal')
;

module.exports = (apiaiResponse, platformFilter) => {
  let
    messages = Internal.getMessages(apiaiResponse),
    lastMessageIdx = messages.length - 1,
    cards = {},
    fixedMsgs = []
  ;

  messages.forEach((message, idx) => {
    let
      msgType = message.type,
      msgPlatform = message.platform
    ;

    if (msgType === 1) {
      // card
      // init platform card set
      if (!cards[msgPlatform] || !cards[msgPlatform].length) {
        cards[msgPlatform] = [];
      }
      // add card to platform card set
      delete message.platform
      delete message.type

      cards[msgPlatform].push(message);
    }

    if (idx === lastMessageIdx || msgType !== 1) {
      // this is last message or it is not a card
      // create a cards message for each platform
      for (let platform in cards) {
        if (cards.hasOwnProperty(platform)) {
          // check if there are cards to process
          if (cards[platform].length > 0) {
            // add card set to messages
            fixedMsgs.push({
              type: 1,
              platform,
              cards: [].concat(cards[platform])
            });
            // empty cards group
            cards[platform] = [];
          }
        }
      }
    }
    switch (msgType) {
      case 1:
        // handled above
        break;
      default: // 0 - text, 2 - quick relies, 3 - images, 4 - payload and others
        // add to outgoing messages
        fixedMsgs = fixedMsgs.concat(message);
    }
  });
  return Internal.filterMessages(fixedMsgs, platformFilter);
};
