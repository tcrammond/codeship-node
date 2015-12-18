'use strict';
var Builds = require('./resources/Builds');
var Projects = require('./resources/Projects');

class Codeship {
  constructor({apiKey} = {}) {
    if (!apiKey) {
      throw new Error('A Codeship API key must be passed to the constructor.');
    }

    this._apiKey = apiKey;

    // Add resources
    this.projects = new Projects({apiKey});
    this.builds = new Builds({apiKey});
  }
}

module.exports = Codeship;