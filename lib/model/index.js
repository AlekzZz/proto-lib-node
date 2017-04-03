const extend = require('extend');
const Helpers = require('../helpers');
const { UUID } = Helpers;

/**
 * @class Model
 * @author Aleksandr Strutynskyy
 */
module.exports = function(proto) {
  /**
   * Assemble new instance based on "proto"
   */
  return function(attributes) {
    const instance = Object.assign({}, UUID(), Object.assign({}, proto), Object.assign({}, attributes));

    // trigger init function
    if (typeof instance.init === 'function') {
      instance.init();
    }

    return instance;
  };
}