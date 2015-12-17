var request = require('request');

class Codeship {
  constructor({apiKey} = {}) {
    if (!apiKey) {
      throw new Error('A Codeship API key must be passed to the constructor.');
    }

    this._apiKey = apiKey;
    this._baseUrl = 'https://codeship.com/api/v1';

    this.projects = {};
    this.projects.list = (cb) => {
      this._performRequest('/projects.json', (err, body) => {
        cb(err, body.projects);
      });
    };

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


module.exports = Codeship;