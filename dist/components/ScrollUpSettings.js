"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._setScrollUpDefault = exports._scrollUpHover = exports._scrollUpDefaultProps = exports._scrollUpDefault = void 0;
let _scrollUpDefault = {
  backgroundColor: 'rgba(255, 255, 255, .8)',
  color: '#000'
};
exports._scrollUpDefault = _scrollUpDefault;
let _scrollUpHover = {
  backgroundColor: 'rgba(0, 0, 0, 1)',
  color: '#FFF'
};
exports._scrollUpHover = _scrollUpHover;
let _scrollUpDefaultProps = {
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
exports._scrollUpDefaultProps = _scrollUpDefaultProps;

const _setScrollUpDefault = ({
  backgroundColor,
  color
}) => {
  exports._scrollUpDefault = _scrollUpDefault = Object.assign({}, _scrollUpDefault, {
    backgroundColor,
    color
  });
};

exports._setScrollUpDefault = _setScrollUpDefault;