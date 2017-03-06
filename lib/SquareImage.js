'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SquareImage = function (_React$Component) {
  _inherits(SquareImage, _React$Component);

  _createClass(SquareImage, null, [{
    key: 'propTypes',
    get: function get() {
      return {
        backgroundImage: _react2.default.PropTypes.string.isRequired,
        minWidth: _react2.default.PropTypes.number
      };
    }
  }, {
    key: 'defaultProps',
    get: function get() {
      return {
        minWidth: 200
      };
    }
  }]);

  function SquareImage(props) {
    _classCallCheck(this, SquareImage);

    var _this = _possibleConstructorReturn(this, (SquareImage.__proto__ || Object.getPrototypeOf(SquareImage)).call(this, props));

    _this.state = {
      height: 0,
      width: 0,
      backgroundImage: 'url(' + props.backgroundImage + ')',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      float: 'left',
      display: 'inline-block'
    };
    return _this;
  }

  _createClass(SquareImage, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.resize()();
      window.addEventListener('resize', this.resize());
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventLisener('resize', this.resize());
    }
  }, {
    key: 'modifyState',
    value: function modifyState(newState) {
      this.setState(Object.assign({}, this.state, newState));
    }
  }, {
    key: 'resize',
    value: function resize() {
      var _this2 = this;

      return function () {
        return _this2.modifyState({
          height: window.innerWidth / Math.floor(window.innerWidth / _this2.props.minWidth),
          width: window.innerWidth / Math.floor(window.innerWidth / _this2.props.minWidth)
        });
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var ref = function ref(r) {
        _this3.node = r;
      };

      return _react2.default.createElement('div', {
        ref: ref,
        style: this.state
      });
    }
  }]);

  return SquareImage;
}(_react2.default.Component);

exports.default = SquareImage;
//# sourceMappingURL=SquareImage.js.map