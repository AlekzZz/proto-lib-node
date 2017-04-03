const EventEmitter = require('events').EventEmitter;
const instance = new EventEmitter();

/**
 * Node EventEmitter facade
 */
module.exports = {
  on() {
    return instance.on.apply(instance, arguments);
  },

  once() {
    return instance.once.apply(instance, arguments);
  },

  emit() {
    return instance.emit.apply(instance, arguments);
  },

  listenerCount(eventName) {
    return instance.listenerCount(eventName);
  }
}
