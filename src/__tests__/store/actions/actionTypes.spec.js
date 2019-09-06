import * as ACTION_TYPES from '../../../store/actions/actionTypes';

describe("Redux Store Action Types", () => {
    test("it should return action action type", () => {
        const expected = 'CALCULATE_LOAN';

        expect(ACTION_TYPES.CALCULATE_LOAN).toEqual(expected);
    });
});
