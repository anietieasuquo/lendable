import React from "react";
import { create, act } from "react-test-renderer";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import rootReducer from '../store/reducers/reducer';
import App from '../App';

Enzyme.configure({ adapter: new Adapter() });

let store = createStore(rootReducer);

describe("App", () => {
    test("it should render content", () => {
        const wrapper = shallow(<Provider store={store}><App /></Provider>);
        expect(wrapper.exists()).toBe(true);
    });
});

describe("App", () => {
    test("it should update the amount displayed when amount is changed", () => {
        const component = create(<Provider store={store}><App /></Provider>);
        const instance = component.root;
        const amountSlider = instance.findByProps({ id: 'amountRange' });

        act(() => {
            amountSlider.props.onInput({ target: { value: 2000 } });
        });

        expect(amountSlider.props.defaultValue).toEqual(2000);

        const amountValueElement = instance.findByProps({ id: 'amountValue' });
        expect(amountValueElement.props.children).toEqual('£2,000.00');
    });
});

describe("App", () => {
    test("it should update whole value tenure displayed when tenure is changed", () => {
        const component = create(<Provider store={store}><App /></Provider>);
        const instance = component.root;
        const tenureSlider = instance.findByProps({ id: 'tenureRange' });

        act(() => {
            tenureSlider.props.onInput({ target: { value: 24 } });
        });

        expect(tenureSlider.props.defaultValue).toEqual(24);

        const tenureValueElement = instance.findByProps({ id: 'tenureValue' });
        expect(tenureValueElement.props.children).toEqual('2 years');
    });
});

describe("App", () => {
    test("it should update fractional value tenure displayed when tenure is changed", () => {
        const component = create(<Provider store={store}><App /></Provider>);
        const instance = component.root;
        const tenureSlider = instance.findByProps({ id: 'tenureRange' });

        act(() => {
            tenureSlider.props.onInput({ target: { value: 30 } });
        });

        expect(tenureSlider.props.defaultValue).toEqual(30);

        const tenureValueElement = instance.findByProps({ id: 'tenureValue' });
        expect(tenureValueElement.props.children).toEqual('2½ years');
    });
});
