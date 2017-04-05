const extend = require('extend');

/**
 * Setup merges proto "defaults" with "options"
 */
module.exports = function(args = {}) {
  let { options = {}, proto = {} } = args;
  let defaults = {};

  if (proto.defaults) {
    defaults = Object.assign({}, proto.defaults);
  }

  options = extend(true, defaults, Object.assign({}, options));

  return { options };
}