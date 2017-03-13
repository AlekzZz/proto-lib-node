let id = 0;

/**
 * Instance consecutive ID generator
 * @return {Object}
 */
export default function() {
  id++;

  return {
    id
  };
};