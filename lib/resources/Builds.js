'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CodeshipResource = require('../Resource');

var Builds = (function (_CodeshipResource) {
  _inherits(Builds, _CodeshipResource);

  function Builds() {
    _classCallCheck(this, Builds);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Builds).apply(this, arguments));
  }

  _createClass(Builds, [{
    key: 'list',
    value: function list(projectId, cb) {
      this._performRequest('/builds.json', function (err, body) {
        cb(err, body);
      });
    }
  }, {
    key: 'restart',
    value: function restart(id, cb) {
      if (!id) {
        return;
      } else if (typeof id === 'function') {
        cb = id;
        cb('A build ID must be specified.', null);
        return;
      }

      this._performRequest('/builds/' + id + '/restart.json', cb, 'POST');
    }
  }]);

  return Builds;
})(CodeshipResource);

module.exports = Builds;