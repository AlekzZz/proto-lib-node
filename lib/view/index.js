const templates = (Boolean(window.templates) ? window.templates : {});

/**
 * @name View
 * @author Aleksandr Strutynskyy
 * @description Handlebars facade
 */
templateExists(viewName) {
  return templates.hasOwnProperty(viewName);
}

module.exports = function(viewName, data) {
  if (!templateExists(viewName)) {
    throw new Error(`View file "${viewName}" not found.`);
  }

  return templates[viewName](data);
}
