'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Resource = require('../Resource');

var Projects = (function (_Resource) {
  _inherits(Projects, _Resource);

  function Projects() {
    _classCallCheck(this, Projects);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Projects).apply(this, arguments));
  }

  _createClass(Projects, [{
    key: 'list',
    value: function list(cb) {
      this._performRequest('/projects.json', function (err, body) {
        cb(err, body.projects);
      });
    }
  }, {
    key: 'get',
    value: function get(id, cb) {
      if (!id) {
        return;
      } else if (typeof id === 'function') {
        cb = id;
        cb('A project ID must be specified.', null);
        return;
      }

      this._performRequest('/projects/' + id + '.json', cb);
    }
  }]);

  return Projects;
})(Resource);

module.exports = Projects;