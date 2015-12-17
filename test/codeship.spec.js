var Codeship = require('../lib/codeship');

describe('Codeship module', function() {

    var apiKey;

    beforeEach(function() {
        apiKey = '12345';
    });

    describe('instantiation', function() {

        it('throws an error if an API key is not provided', function() {
            expect(function() {new Codeship();}).toThrow(new Error('A Codeship API key must be passed to the constructor.'));
        });

    });
});