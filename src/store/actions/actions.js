import * as ACTION_TYPES from './actionTypes';

export const calculateLoan = (payload) => {
    return {
        type: ACTION_TYPES.CALCULATE_LOAN,
        payload: payload
    };
};