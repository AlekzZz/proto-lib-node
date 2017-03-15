module.exports = function() {
  return {
    defaults: {
      model: null
    },

    findOne(url, options) {
      options = Object.assign({
        method: 'GET',
        mode: 'cors',
        cache: 'default'
      }, Object.assign({}, options));

      return fetch(url, options).then((response) => {
        return response.json();
      });
    },

    findAll() {

    }
  }
};