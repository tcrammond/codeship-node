'use strict';
var CodeshipResource = require('../Resource');

class Builds extends CodeshipResource {
  list(projectId, cb) {
    this._performRequest('/builds.json', (err, body) => {
      cb(err, body);
    });
  };

  restart(id, cb) {
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

module.exports = Builds;