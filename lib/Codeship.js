'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Builds = require('./resources/Builds');
var Projects = require('./resources/Projects');

var Codeship = function Codeship() {
  var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  var apiKey = _ref.apiKey;

  _classCallCheck(this, Codeship);

  if (!apiKey) {
    throw new Error('A Codeship API key must be passed to the constructor.');
  }

  this._apiKey = apiKey;

  // Add resources
  this.projects = new Projects({ apiKey: apiKey });
  this.builds = new Builds({ apiKey: apiKey });
};

module.exports = Codeship;