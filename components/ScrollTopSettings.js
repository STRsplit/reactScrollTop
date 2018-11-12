let _scrollTopDefault = {
    backgroundColor: 'rgba(255, 255, 255, .8)',
    color: '#000'
}

let _scrollTopHover = {
    backgroundColor: 'rgba(0, 0, 0, 1)',
    color: '#FFF'
}

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

const _setScrollTopDefault = ({ backgroundColor, color }) => {
    _scrollTopDefault = Object.assign({}, _scrollTopDefault, { backgroundColor, color });
}

export { _scrollTopDefault, _scrollTopDefaultProps, _scrollTopHover, _setScrollTopDefault }
