"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _warning = _interopRequireDefault(require("warning"));

var _inlineStylePrefixer = require("inline-style-prefixer");

var _ScrollUpSettings = require("./ScrollUpSettings.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class ScrollUp extends _react.default.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      listenerOn: false,
      show: false
    };

    this.checkProps = () => {
      const {
        defaultStyle
      } = this.props;
      let propSet = new Set([...Object.keys(_ScrollUpSettings._scrollUpDefaultProps)], [...Object.keys(defaultStyle)]);
      let propsGood = [true, []];

      (() => {
        for (let key in this.props) {
          if (!propSet.has(key)) {
            propsGood = [propsGood[0], propsGood[1].concat(key)];
          }
        }
      })();

      propsGood[1].forEach(err => {
        (0, _warning.default)(!err, `This component does not support the prop: ${err}`);
      });
    };

    this.createStyle = () => {
      this.checkProps();
      const {
        children,
        defaultStyle,
        placement,
        size,
        styles
      } = this.props;

      if (children) {
        const {
          position,
          right
        } = defaultStyle;
        let fallbackStyle = {
          height: 'auto',
          width: 'auto',
          [placement]: '2vh',
          position,
          right,
          display: this.state.show ? 'flex' : 'none'
        };
        return fallbackStyle;
      }

      for (let key in styles) {
        if (defaultStyle[key] !== undefined) {
          defaultStyle[key] = styles[key];
        }
      }

      _setScrollerDefault(defaultStyle);

      return Object.assign({}, _objectSpread({}, (0, _inlineStylePrefixer.prefix)(defaultStyle)), {
        height: size,
        width: size,
        [placement]: '2vh',
        display: this.state.show ? 'flex' : 'none'
      });
    };

    this.handleMouseOut = event => {
      const {
        backgroundColor,
        color
      } = _ScrollUpSettings._scrollUpDefault;
      event.target.style.backgroundColor = backgroundColor;
      event.target.style.color = color;
    };

    this.handleMouseOver = event => {
      const {
        scrollerHover = _ScrollUpSettings._scrollUpHover
      } = this.props;
      const {
        backgroundColor,
        color
      } = scrollerHover;
      event.target.style.backgroundColor = backgroundColor;
      event.target.style.color = color;
    };

    this.handleScrollEvent = () => {
      const {
        scrollOffset
      } = this.props;
      const frame = document.documentElement;
      let pageTop = (window.pageYOffset || frame.scrollTop) - (frame.clientTop || 0);

      if (pageTop > scrollOffset) {
        this.reconcileScroll(true);
      } else {
        this.reconcileScroll(false);
      }
    };

    this.reconcileScroll = show => {
      this.setState({
        show
      });
    };

    this.scrollUp = () => {
      const {
        delay
      } = this.props;
      const frame = document.documentElement;
      let pageTop = (window.pageYOffset || frame.scrollTop) - (frame.clientTop || 0);

      if (pageTop > 0) {
        window.scrollTo(0, pageTop - 15);
        setTimeout(this.scrollUp, delay);
      }
    };

    this.componentDidMount = () => {
      document.addEventListener('scroll', this.handleScrollEvent);
    };

    this.componentWillUnmount = () => {
      document.removeEventListener('scroll', this.handleScrollEvent);
    };
  }

  render() {
    if (this.props.children) {
      return _react.default.createElement("div", {
        style: this.createStyle(),
        onMouseOver: this.handleMouseOver,
        onMouseOut: this.handleMouseOut,
        className: "move-top",
        onClick: this.scrollUp
      }, this.props.children);
    } else {
      return _react.default.createElement("button", {
        style: this.createStyle(),
        onMouseOver: this.handleMouseOver,
        onMouseOut: this.handleMouseOut,
        className: "move-top",
        onClick: this.scrollUp
      }, this.props.text);
    }
  }

}

ScrollUp.defaultProps = _objectSpread({}, _ScrollUpSettings._scrollUpDefaultProps);
var _default = ScrollUp;
exports.default = _default;