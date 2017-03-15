process.env.NODE_PATH = __dirname;
require('module').Module._initPaths();

const Controller = require('lib/controller');
const Model = require('lib/model');
const Event = require('lib/event');

module.exports = {
  Controller,
  Model,
  Event
};