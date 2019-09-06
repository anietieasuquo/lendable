import React from "react";
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { create } from "react-test-renderer";
import LoanDetail from '../../components/LoanDetail';

Enzyme.configure({ adapter: new Adapter() });

describe("LoanDetail", () => {
    it('should be defined', () => {
        expect(LoanDetail).toBeDefined();
    });

    it("should render correctly", () => {
        const wrapper = shallow(<LoanDetail />);
        expect(wrapper.exists()).toBe(true);
        expect(wrapper).toMatchSnapshot();
    });
});

describe("LoanDetail", () => {
    it("should have neccessary properties", () => {
        const component = create(<LoanDetail title="Interest Rate" value="30" />);
        const instance = component.root;
        const detailValue = instance.findByProps({ className: 'payment-value figure-value' });
        const detailTitle = instance.findByProps({ className: 'payment-label figure-label' });

        expect(detailValue.props.children).toEqual('30');
        expect(detailTitle.props.children).toEqual('Interest Rate');
    });
});
