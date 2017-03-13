export default function() {
  return {
    defaults: {
      model: null
    },

    findOne(url, options) {
      options = Object.assign({
        method: 'GET',
        headers: new Headers(),
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

// UserService.findOne