import PubSub from 'pubsub-js';

export default {
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
