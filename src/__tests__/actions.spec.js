import * as ACTION_TYPES from '../store/actions/actionTypes';
import * as ACTIONS from '../store/actions/actions';

describe("Redux Store Actions", () => {
    test("it should return store actions", () => {
        const payload = {
            amount: 2000,
            tenure: 18
        };

        const output = {
            type: ACTION_TYPES.CALCULATE_LOAN,
            payload: payload
        };

        expect(ACTIONS.calculateLoan(payload)).toEqual(output);
    });
});
