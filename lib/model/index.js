const extend = require('extend');
const Helpers = require('lib/helpers');
const { Identifier } = Helpers;

/**
 * @class Model
 * @author Aleksandr Strutynskyy
 */
module.exports = function(proto) {
  /**
   * Assemble new instance based on "proto"
   */
  return function(attributes) {
    const instance = Object.assign({}, Identifier(), Object.assign({}, proto), Object.assign({}, attributes));

    // trigger init function
    if (typeof instance.init === 'function') {
      instance.init();
    }

    return instance;
  };
}