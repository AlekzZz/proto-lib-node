/**
 * Service
 * @author Aleksandr Strutynskyy
 */
module.exports = (proto) => (options) => Object.assign({
  model: null,

  /**
   * Converts single object into model instance
   */
  hydrateModel(instance) {
    return this.model(instance);
  },

  /**
   * Converts array of objects into array of model instances
   */
  hydrateModels(instances) {
    return instances.map((instance) => this.model(instance));
  }
}, proto, options);