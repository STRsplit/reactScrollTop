"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._setScrollerDefault = exports._scrollerHover = exports._scrollerDefaultProps = exports._scrollerDefault = void 0;
let _scrollerDefault = {
  backgroundColor: 'rgba(255, 255, 255, .8)',
  color: '#000'
};
exports._scrollerDefault = _scrollerDefault;
let _scrollerHover = {
  backgroundColor: 'rgba(0, 0, 0, 1)',
  color: '#FFF'
};
exports._scrollerHover = _scrollerHover;
let _scrollerDefaultProps = {
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
exports._scrollerDefaultProps = _scrollerDefaultProps;

const _setScrollerDefault = ({
  backgroundColor,
  color
}) => {
  exports._scrollerDefault = _scrollerDefault = Object.assign({}, _scrollerDefault, {
    backgroundColor,
    color
  });
};

exports._setScrollerDefault = _setScrollerDefault;