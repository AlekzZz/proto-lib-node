const extend = require('extend');
const Helpers = require('../helpers');
const { UUID } = Helpers;

/**
 * Model
 * @author Aleksandr Strutynskyy
 */
module.exports = function(proto, options) {
  let serializer = (options && options.serializer ? options.serializer : (data) => data);

  /**
   * Assemble new instance based on "proto"
   */
  return function(attributes) {
    const instance = Object.assign({}, UUID(), Object.assign({}, proto), Object.assign({}, serializer(attributes)));

    // trigger init function
    if (typeof instance.init === 'function') {
      instance.init();
    }

    return instance;
  };
}
