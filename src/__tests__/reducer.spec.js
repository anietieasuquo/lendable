import * as ACTION_TYPES from '../store/actions/actionTypes';
import rootReducer from '../store/reducers/reducer';
import { calculateLoan } from '../helper/loanHelper';

describe("Root Reducer", () => {
    test("with valid payload and action type it should return state and loan data", () => {
        const payload = {
            amount: 2000,
            tenure: 18
        };

        const state = {
            ...payload,
            interestRate: 10,
            monthlyRepayment: 200
        };

        const action = {
            type: ACTION_TYPES.CALCULATE_LOAN,
            payload: payload
        };

        const output = {
            ...state,
            ...calculateLoan(payload)
        };

        expect(rootReducer(state, action)).toEqual(output);
    });
});

describe("Root Reducer", () => {
    test("with valid payload and unknown action type it should return state", () => {
        const payload = {
            amount: 2000,
            tenure: 18
        };

        const state = {
            ...payload,
            interestRate: 10,
            monthlyRepayment: 200
        };

        const action = {
            type: "UNKNOWN_ACTION",
            payload: payload
        };

        const output = {
            ...state
        };

        expect(rootReducer(state, action)).toEqual(output);
    });
});

describe("Root Reducer", () => {
    test("with no payload nor action type it should return initial state", () => {
        const initialState = {
            amount: 1000,
            tenure: 12
        };

        const output = {
            ...calculateLoan(initialState)
        };

        expect(rootReducer(undefined, { type: "UNKNOWN_ACTION" })).toEqual(output);
    });
});
