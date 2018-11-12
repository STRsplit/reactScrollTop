"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._setScrollTopDefault = exports._scrollTopHover = exports._scrollTopDefaultProps = exports._scrollTopDefault = void 0;
let _scrollTopDefault = {
  backgroundColor: 'rgba(255, 255, 255, .8)',
  color: '#000'
};
exports._scrollTopDefault = _scrollTopDefault;
let _scrollTopHover = {
  backgroundColor: 'rgba(0, 0, 0, 1)',
  color: '#FFF'
};
exports._scrollTopHover = _scrollTopHover;
let _scrollTopDefaultProps = {
  defaultStyle: {
    boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.5)',
    borderRadius: '50%',
    size: '6vw',
    minWidth: '80px',
    minHeight: '80px',
    padding: '5px',
    position: 'fixed',
    right: '5vw',
    visibility: 'visible',
    textTransform: 'uppercase',
    cursor: 'pointer',
    fontWeight: 600,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, .8)',
    color: '#000'
  },
  delay: 15,
  placement: 'bottom',
  scrollOffset: 20,
  size: '80px',
  text: 'top'
};
exports._scrollTopDefaultProps = _scrollTopDefaultProps;

const _setScrollTopDefault = ({
  backgroundColor,
  color
}) => {
  exports._scrollTopDefault = _scrollTopDefault = Object.assign({}, _scrollTopDefault, {
    backgroundColor,
    color
  });
};

exports._setScrollTopDefault = _setScrollTopDefault;