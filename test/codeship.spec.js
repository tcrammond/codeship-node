var nock = require('nock');

var Codeship = require('./../lib/Codeship');

describe('Codeship', function() {
  var baseUrl = 'https://codeship.com/api/v1';
  var apiKey;

  beforeEach(function() {
    apiKey = '12345';
  });

  afterEach(function() {
    nock.cleanAll();
  });

  describe('instantiation', function() {
    it('throws an error if an API key is not provided', function() {
      expect(function() {new Codeship()}).toThrow(new Error('A Codeship API key must be passed to the constructor.'));
    });

    it('sets the API key property to the specified API key', function() {
      var codeship = makeCodeship();
      expect(codeship._apiKey).toBe(apiKey);
    });
  });

  describe('Builds', function() {
    var builds = [
      {id: 1}
    ];

    describe('restart()', function() {
      it('restarts the specified build', function(done) {
        nock(baseUrl)
          .post('/builds/1/restart.json?api_key=' + apiKey)
          .reply(200, builds[0]);

        makeCodeship().builds.restart(1, function(err, data) {
          if(!nock.isDone()) console.error('NOT DONE');
          expect(data).toEqual(builds[0]);
          done();
        });
      })
    });
  });

  describe('Projects', function() {
    var projects = [
      {id: 1},
      {id: 2}
    ];

    describe('list()', function() {
      it('retrieves and returns available projects', function(done) {
        nock(baseUrl)
          .get('/projects.json?api_key=' + apiKey)
          .reply(200, {
            projects: projects
          });

        makeCodeship().projects.list(function(err, data) {
          expect(data).toEqual(projects);
          done();
        });
      });
    });

    describe('get()', function() {
      it('returns an error if a project ID is not specified', function(done) {
        makeCodeship().projects.get(function(err, data) {
          expect(err).toBe('A project ID must be specified.');
          expect(data).toBe(null);
          done();
        });
      });

      it('retrieves and returns the specified project', function(done) {
        nock(baseUrl)
          .get('/projects/1.json?api_key=' + apiKey)
          .reply(200, projects[0]);

        makeCodeship().projects.get(1, function(err, data) {
          expect(data).toEqual(projects[0]);
          done();
        });
      });
    });
  });

  function makeCodeship() {
    return new Codeship({apiKey: apiKey, baseUrl: baseUrl});
  }
});