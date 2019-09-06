import * as ACTION_TYPES from '../actions/actionTypes';
import { calculateLoan } from '../../helper/loanHelper';

const initialState = {
    amount: 1000,
    tenure: 12
};

const rootReducer = (state = calculateLoan(initialState), action) => {
    switch (action.type) {
        case ACTION_TYPES.CALCULATE_LOAN:
            return {
                ...state,
                ...calculateLoan(action.payload)
            };
        default:
            return state;
    }
};

export default rootReducer;