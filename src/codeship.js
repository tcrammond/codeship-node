var request = require('request');

class Codeship {
  constructor({apiKey} = {}) {
    if (!apiKey) {
      throw new Error('A Codeship API key must be passed to the constructor.');
    }

    this._apiKey = apiKey;
    this._baseUrl = 'https://codeship.com/api/v1';

    this.projects = {};
    this.builds = {};

    // FIXME: if callback isn't defined the caller's app will die
    this.projects.list = (cb) => {
      this._performRequest('/projects.json', (err, body) => {
        cb(err, body.projects);
      });
    };

    this.projects.get = (id, cb) => {
      if (!id) {
        return;
      } else if (typeof id === 'function') {
        cb = id;
        cb('A project ID must be specified.', null);
        return;
      }

      this._performRequest(`/projects/${id}.json`, cb);
    };

    this.builds.restart = (id, cb) => {
      if (!id) {
        return;
      } else if (typeof id === 'function') {
        cb = id;
        cb('A build ID must be specified.', null);
        return;
      }

      this._performRequest(`/builds/${id}/restart.json`, cb, 'POST');
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