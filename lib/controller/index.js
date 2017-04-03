const extend = require('extend');
const Helpers = require('../helpers');
const { Identifier } = Helpers;

/**
 * Controller
 * @author Aleksandr Strutynskyy
 */
module.exports = function(proto) {
  /**
   * Setup controller's "scope" and merge "defaults" with "options"
   */
  let setup = ({ options, proto }) => {
    let defaults = {};

    if (proto.defaults) {
      defaults = Object.assign({}, proto.defaults);
    }

    options = extend(true, defaults, Object.assign({}, options));

    return { options };
  }

  /**
   * Asemble new instance based on "proto"
   */
  return function(options) {
    // allow overridable setup
    if (typeof proto.setup === 'function') {
      setup = proto.setup;
    }

    const instance = Object.assign({}, Identifier(), proto, setup({ options, proto }));

    // cleanup
    delete instance.defaults;
    delete instance.setup;

    // invoike "init" if set
    if (typeof instance.init === 'function') {
      instance.init();
    }

    return instance;
  };
}
