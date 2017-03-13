import extend from 'extend';
import { Identifier } from 'lib/helpers';

/**
 * @class Model
 * @author Aleksandr Strutynskyy
 */
export default function(proto) {
  /**
   * Asemble new instance based on "proto"
   */
  return function(attributes) {
    const instance = Object.assign({}, Object.assign({}, proto), Object.assign({}, attributes));

    // trigger init function
    if (typeof instance.init === 'function') {
      instance.init();
    }

    return instance;
  };
}