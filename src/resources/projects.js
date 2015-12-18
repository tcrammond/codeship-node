'use strict';
var Resource = require('../Resource');

class Projects extends Resource {

  list(cb) {
    this._performRequest('/projects.json', (err, body) => {
      cb(err, body.projects);
    });
  };

  get(id, cb) {
    if (!id) {
      return;
    } else if (typeof id === 'function') {
      cb = id;
      cb('A project ID must be specified.', null);
      return;
    }

    this._performRequest(`/projects/${id}.json`, cb);
  };
}

module.exports = Projects;