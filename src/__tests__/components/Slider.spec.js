import React from "react";
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Slider from '../../components/Slider';

Enzyme.configure({ adapter: new Adapter() });

describe("Slider", () => {
    it('should be defined', () => {
        expect(Slider).toBeDefined();
    });

    it("it should render correctly", () => {
        const wrapper = shallow(<Slider />);
        expect(wrapper.exists()).toBe(true);
        expect(wrapper).toMatchSnapshot();
    });
});

describe("Slider", () => {
    it("should have neccessary properties", () => {
        const mockInputHandler = jest.fn();
        const component = mount(<Slider id="amountRange" min="1000" max="20000" step="100" defaultValue="2000" onInput={mockInputHandler} />);
        
        expect((component).prop('id')).toEqual('amountRange');
        expect((component).prop('min')).toEqual('1000');
        expect((component).prop('max')).toEqual('20000');
        expect((component).prop('step')).toEqual('100');
        expect((component).prop('defaultValue')).toEqual('2000');
    });
});
