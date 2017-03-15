const extend = require('extend');
const Helpers = require('lib/helpers');
const { Identifier } = Helpers;

/**
 * @class Controller
 * @author Aleksandr Strutynskyy
 */
module.exports = function(proto) {
  /**
   * Setup controller's "scope" and merge "defaults" with "options"
   */
  let setup = ({ el, options, proto }) => {
    let scope;
    let defaults = {};

    if (proto.defaults) {
      defaults = Object.assign({}, proto.defaults);
    }

    if (el && options) {
      scope = (Boolean(el.jquery) ? el : $(el));
    } else if (el && !options) {
      if (typeof el === 'string' || Boolean(el.jquery)) {
        scope = (Boolean(el.jquery) ? el : $(el));
      } else {
        options = el;
      }
    }

    options = extend(true, defaults, Object.assign({}, options));

    return { scope, options };
  }

  /**
   * Asemble new instance based on "proto"
   */
  return function(el, options) {
    // allow overridable setup
    if (typeof proto.setup === 'function') {
      setup = proto.setup;
    }

    const instance = Object.assign({}, Identifier(), proto, setup({ el, options, proto }));

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
