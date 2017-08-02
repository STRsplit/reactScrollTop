let _scrollerDefault = {
    backgroundColor: 'rgba(255, 255, 255, .8)',
    color: '#000'
}
let _scrollerHover = {
    backgroundColor: 'rgba(0, 0, 0, 1)',
    color: '#FFF'
}
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
const _setScrollerDefault = ({ backgroundColor, color }) => {
    _scrollerDefault = Object.assign({}, _scrollerDefault, { backgroundColor, color });
}

export { _scrollerDefault, _scrollerDefaultProps, _scrollerHover, _setScrollerDefault }
