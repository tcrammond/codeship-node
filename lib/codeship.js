'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var request = require('request');

var Codeship = (function () {
  function Codeship() {
    var _this = this;

    var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    var apiKey = _ref.apiKey;

    _classCallCheck(this, Codeship);

    if (!apiKey) {
      throw new Error('A Codeship API key must be passed to the constructor.');
    }

    this._apiKey = apiKey;
    this._baseUrl = 'https://codeship.com/api/v1';

    this.projects = {};
    this.projects.list = function (cb) {
      _this._performRequest('/projects.json', function (err, body) {
        cb(err, body.projects);
      });
    };
  }

  _createClass(Codeship, [{
    key: '_performRequest',
    value: function _performRequest(path, cb) {
      var method = arguments.length <= 2 || arguments[2] === undefined ? 'GET' : arguments[2];

      request({
        url: '' + this._baseUrl + path + '?api_key=' + this._apiKey,
        method: method,
        json: true
      }, function (err, response, body) {
        cb(err, body);
      });
    }
  }]);

  return Codeship;
})();

module.exports = Codeship;