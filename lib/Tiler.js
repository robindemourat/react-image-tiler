'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SquareImage = require('./SquareImage');

var _SquareImage2 = _interopRequireDefault(_SquareImage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Tiler = function (_React$Component) {
  _inherits(Tiler, _React$Component);

  _createClass(Tiler, null, [{
    key: 'propTypes',
    get: function get() {
      return {
        images: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.string),
        minWidth: _react2.default.PropTypes.number,
        maxWidth: _react2.default.PropTypes.number
      };
    }
  }, {
    key: 'defaultProps',
    get: function get() {
      return {
        images: [],
        minWidth: 500,
        maxWidth: Infinity
      };
    }
  }]);

  function Tiler(props) {
    _classCallCheck(this, Tiler);

    var _this = _possibleConstructorReturn(this, (Tiler.__proto__ || Object.getPrototypeOf(Tiler)).call(this, props));

    _this.state = {
      images: props.images
    };
    return _this;
  }

  _createClass(Tiler, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var containerStyle = {
        margin: 0,
        padding: 0
      };

      var endTile = {
        clear: 'both',
        float: 'none',
        display: 'block'
      };

      var ref = function ref(r) {
        _this2.node = r;
      };

      var parentWidth = function parentWidth() {
        return _this2.node ? _this2.node.clientWidth : window.innerWidth;
      };

      var items = this.props.images.map(function (n, i) {
        return _react2.default.createElement(_SquareImage2.default, {
          backgroundImage: n,
          parentWidth: parentWidth,
          maxWidth: _this2.props.maxWidth,
          minWidth: _this2.props.minWidth,
          key: i // eslint-disable-line react/no-array-index-key
        });
      });

      return _react2.default.createElement(
        'div',
        { ref: ref, style: containerStyle },
        items,
        _react2.default.createElement('div', { style: endTile })
      );
    }
  }]);

  return Tiler;
}(_react2.default.Component);

exports.default = Tiler;
//# sourceMappingURL=Tiler.js.map