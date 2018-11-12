import React from 'react';
import PropTypes from 'prop-types';
import warning from 'warning';
import { prefix } from 'inline-style-prefixer';
import { _scrollUpDefault, _scrollUpDefaultProps, _scrollUpHover,  _setScrollUpDefault } from './ScrollUpSettings.js';

class ScrollUp extends React.Component {
    state = {
        listenerOn: false,
        show: false
    }
    
    checkProps = () => {
        const { defaultStyle } = this.props;
        let propSet = new Set([...Object.keys(_scrollUpDefaultProps)], [...Object.keys(defaultStyle)])

        let propsGood = [true, []];
        (() => {
            for (let key in this.props) {
                if (!propSet.has(key)) {
                    propsGood = [propsGood[0], propsGood[1].concat(key)]
                }
            }
        })()

        propsGood[1].forEach(err => {
            warning(!err, `This component does not support the prop: ${err}`)
        })
    }

    createStyle = () => {
        this.checkProps();
        const { children, defaultStyle, placement, size, styles } = this.props;
        if (children) {
            const { position, right } = defaultStyle;
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
                defaultStyle[key] = styles[key]
            }
        }

        _setScrollUpDefault(defaultStyle);
        return Object.assign({}, { ...prefix(defaultStyle) }, {
            height: size,
            width: size,
            [placement]: '2vh',
            display: this.state.show ? 'flex' : 'none'
        })
    }

    handleMouseOut = event => {
        const { backgroundColor, color } = _scrollUpDefault;
        event.target.style.backgroundColor = backgroundColor;
        event.target.style.color = color;
    }

    handleMouseOver = event => {
        const { scrollerHover = _scrollUpHover } = this.props;
        const { backgroundColor, color } = scrollerHover;
        event.target.style.backgroundColor = backgroundColor;
        event.target.style.color = color;
    }

    handleScrollEvent = () => {
        const { scrollOffset } = this.props;
        const frame = document.documentElement;
        let pageTop = (window.pageYOffset || frame.scrollTop) - (frame.clientTop || 0);

        if (pageTop > scrollOffset) { 
            this.reconcileScroll(true);
        } else {
            this.reconcileScroll(false)
        }
    }

    reconcileScroll = show => {
        this.setState({ show });
    }

    scrollUp = () => {
        const { delay } = this.props;
        const frame = document.documentElement;
        let pageTop = (window.pageYOffset || frame.scrollTop) - (frame.clientTop || 0);

        if (pageTop > 0) {
            window.scrollTo(0, pageTop - 15)
            setTimeout(this.scrollUp, delay)
        }
    }

    componentDidMount = () => {
        document.addEventListener('scroll', this.handleScrollEvent);
    }

    componentWillUnmount = () => {
        document.removeEventListener('scroll', this.handleScrollEvent);
    }

    render () {
        if (this.props.children) {
            return (
                <div
                    style={this.createStyle()}
                    onMouseOver={this.handleMouseOver}
                    onMouseOut={this.handleMouseOut}
                    className='move-top'
                    onClick={this.scrollUp}
                >
                    { this.props.children }
                </div>
            )
        } else {
            return (
                <button 
                    style={this.createStyle()} 
                    onMouseOver={this.handleMouseOver} 
                    onMouseOut={this.handleMouseOut} 
                    className='move-top' 
                    onClick={this.scrollUp} 
                >
                    { this.props.text }
                </button>
            )
        }
    }
}

ScrollUp.defaultProps = {
    ..._scrollUpDefaultProps
}

ScrollUp.propTypes = {
    delay: PropTypes.number,
    text: PropTypes.string,
    placement: PropTypes.string,
    size: PropTypes.number,
    styles: PropTypes.object
};
export default ScrollUp;
