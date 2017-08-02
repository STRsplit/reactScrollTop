import test from 'ava';
import React from 'react';
import { shallow, mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import sinon from 'sinon';

import ScrollUp from '../components/ScrollUp';

configure({ adapter: new Adapter() });

class WrapperComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={{ display: 'block', minHeight: '1200px'}}>
                {[ ...Array(10)].map(v => (<p style={{ minHeight: '1200px' }}>
                    Lorem Ipsum ...
                 </p>))}
                 { this.props.children }
            </div>
        )
    }
}
test('Basic render is successful ', (t) => {
    const wrapper = mount(<ScrollUp />);
    t.is(wrapper.exists('button'), true);
});
test('Component mounts with default props', (t) => {
    const wrapper = mount(<ScrollUp />);
    t.truthy(wrapper.props().defaultStyle);
    t.is(wrapper.props().delay, 15);
    t.is(wrapper.props().placement, 'bottom');
    t.is(wrapper.props().size, '80px');
    t.is(wrapper.props().text, 'top');
});
test('ScrollUp Component renders with correct props', (t) => {
    const wrapper = mount(<ScrollUp text="Scroll Top"/>);
    t.is(wrapper.props().text, 'Scroll Top');
    const button = wrapper.find('button');
    t.is(button.hasClass('move-top'), true);
    t.is(button.props().children, 'Scroll Top');
});
test('ScrollUp Component sets height and width as size passed in', (t) => {
    const wrapper = mount(<ScrollUp text="hello" />);
    const button = wrapper.find('button');

    t.is(wrapper.find('button').prop('style').height, '80px');
    t.is(wrapper.find('button').prop('style').width, '80px');

    wrapper.setProps({ size: '100px' });
    t.is(wrapper.find('button').prop('style').height, '100px');
    t.is(wrapper.find('button').prop('style').width, '100px');
});
test('ScrollUp Component styles are overwritten by props passed into the component, but only if they are part of default styles', (t) => {
    const styles = {
        'backgroundColor': 'rgba(255, 0, 0, 0.8)',
        'right': '2vw'
    };
    const wrapper = mount(<ScrollUp text="hello" styles={styles} />);
    const button = wrapper.find('button');

    t.is(button.prop('style').right, '2vw');
    t.is(button.prop('style').backgroundColor, 'rgba(255, 0, 0, 0.8)');
    wrapper.setProps({ ...styles, text: 'hello', top: '20px' });
    t.not(Boolean(button.prop('style').top));
});

test('ScrollUp Component - if children are passed, will render children inside div instead of default button', (t) => {
    const wrapper = mount(<ScrollUp><span className="span_scroll">Test</span></ScrollUp>);
    const instance = wrapper.instance();
    const spy = sinon.spy(instance, 'handleMouseOver');
    instance.forceUpdate();

    const container = wrapper.find('.move-top');
    t.truthy(container.children().length);
    const scrollupChild = wrapper.find('.span_scroll');
    t.is(wrapper.exists('.span_scroll'), true)
});

test('ScrollUp Component methods are called as expected', (t) => {
    const styles = {
        'backgroundColor': 'rgba(255, 0, 0, 0.8)',
        'right': '2vw'
    };

    const wrapper = mount(<ScrollUp text="hello" styles={styles} />);
    const instance = wrapper.instance();
    const spy = sinon.spy(instance, 'handleMouseOver');
    instance.forceUpdate();

    const button = wrapper.find('button');
    button.simulate('mouseover');

    t.is(spy.called, true);
});

test('scrollUp is called onclick of the scroll item', (t) => {
    const styles = {
        'backgroundColor': 'rgba(255, 0, 0, 0.8)',
        'right': '2vw'
    };
    const wrapper = mount(<ScrollUp text="hello" {...styles} />);
    const instance = wrapper.instance();
    const spy = sinon.spy(instance, 'scrollUp');
    instance.forceUpdate();

    const button = wrapper.find('button');
    button.simulate('click');

    t.is(spy.called, true);
});
