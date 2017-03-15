const PubSub = require('pubsub-js');

module.exports = {
  on() {
    return PubSub.subscribe.apply(PubSub, arguments);
  },

  off() {
    return PubSub.unsubscribe.apply(PubSub, arguments);
  },

  emit() {
    return PubSub.publish.apply(PubSub, arguments);
  }
}
