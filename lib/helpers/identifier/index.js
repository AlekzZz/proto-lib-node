let id = 0;

/**
 * Instance consecutive ID generator
 * @return {Object}
 */
module.exports = function() {
  id++;

  return {
    id
  };
};