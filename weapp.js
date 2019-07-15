const config = require('./index');

config.globals = {
  wx: false,
  App: false,
  Page: false,
  getApp: false,
  Component: false,
  Behavior: false,
  requirePlugin: false,
  getCurrentPages: false,
};

module.exports = config;
