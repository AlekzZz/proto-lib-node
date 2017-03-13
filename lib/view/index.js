const templates = (Boolean(window.templates) ? window.templates : {});

/**
 * @name View
 * @author Aleksandr Strutynskyy
 * @description Handlebars facade
 */
export function isTemplateExists(viewName) {
  return templates.hasOwnProperty(viewName);
}

export default function View(viewName, data) {
  if (!isTemplateExists(viewName)) {
    throw new Error(`View file "${viewName}" not found.`);
  }

  return templates[viewName](data);
}
