'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Codeship = function Codeship(_ref) {
    var apiKey = _ref.apiKey;

    _classCallCheck(this, Codeship);

    if (!apiKey) {
        throw new Error('A Codeship API key must be passed to the constructor.');
    }
};

module.exports = Codeship;