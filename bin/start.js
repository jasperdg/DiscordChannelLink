require("babel-core/register");
require("babel-polyfill");
require('babel-register')({
  presets: [ 'env' ]
})

module.exports = require("./www")