var nock = require('nock');

var Codeship = require('../lib/codeship');

describe('Codeship module', function() {
  var baseUrl = 'https://codeship.com/api/v1';
  var apiKey;

  beforeEach(function() {
    apiKey = '12345';
  });

  describe('instantiation', function() {
    it('throws an error if an API key is not provided', function() {
      expect(function() {new Codeship()}).toThrow(new Error('A Codeship API key must be passed to the constructor.'));
    });

    it('sets the API key property to the specified API key', function() {
      var codeship = new Codeship({apiKey: apiKey});
      expect(codeship._apiKey).toBe(apiKey);
    });
  });

  describe('projects', function() {
    var projectsResource = '/projects.json';
    var projects = [
      {id: 1},
      {id: 2}
    ];

    describe('list', function() {
      it('retrieves and returns available projects', function(done) {
        nock(baseUrl)
          .get(projectsResource + '?api_key=' + apiKey)
          .reply(200, {
            projects: projects
          });

        makeCodeship().projects.list(function(err, data) {
          if (!nock.isDone()) {
            fail();
          }

          expect(data).toEqual(projects);
          done();
        });
      });
    });

    describe('get', function() {

    });
  });

  function makeCodeship() {
    return new Codeship({apiKey: apiKey});
  }
});