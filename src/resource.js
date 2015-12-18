'use strict';
var request = require('request');

class CodeshipResource {
  constructor({apiKey} = {}) {
    this._baseUrl = 'https://codeship.com/api/v1';
    this._apiKey = apiKey;
  }

  _performRequest(path, cb, method = 'GET') {
    request({
      url: `${this._baseUrl}${path}?api_key=${this._apiKey}`,
      method: method,
      json: true
    }, (err, response, body) => {
      cb(err, body);
    });
  }
}

module.exports = CodeshipResource;