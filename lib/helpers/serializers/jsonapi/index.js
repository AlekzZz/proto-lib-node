/**
 * JSONAPI Serializer
 * @return {Object}
 */
module.exports = function(data) {
  let { id, type, attributes } = data;

  return Object.assign({
    id,
    type
  }, attributes);
};
