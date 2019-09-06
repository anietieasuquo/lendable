import { calculateLoan } from '../helper/loanHelper';

describe("Calculate loan for class-1 interest (5%)", () => {
    test("it should calculate loan using amount, tenure, and class-1 interest (5%)", () => {
        const input = {
            amount: 1000,
            tenure: 12
        };

        const output = {
            amount: input.amount,
            tenure: input.tenure,
            interestRate: 5,
            monthlyRepayment: '4.17'
        };

        expect(calculateLoan(input)).toEqual(output);
    });
});

describe("Calculate loan for class-2 interest (10%)", () => {
    test("it should calculate loan using amount, tenure, and class-2 interest (10%)", () => {
        const input = {
            amount: 6000,
            tenure: 12
        };

        const output = {
            amount: input.amount,
            tenure: input.tenure,
            interestRate: 10,
            monthlyRepayment: '50.00'
        };

        expect(calculateLoan(input)).toEqual(output);
    });
});

describe("Calculate loan for class-3 interest  (15%)", () => {
    test("it should calculate loan using amount, tenure, and class-3 interest  (15%)", () => {
        const input = {
            amount: 13000,
            tenure: 12
        };

        const output = {
            amount: input.amount,
            tenure: input.tenure,
            interestRate: 15,
            monthlyRepayment: '162.50'
        };

        expect(calculateLoan(input)).toEqual(output);
    });
});

describe("Calculate loan for class-4 interest (20%)", () => {
    test("it should calculate loan using amount, tenure, and class-4 interest (20%)", () => {
        const input = {
            amount: 18000,
            tenure: 12
        };

        const output = {
            amount: input.amount,
            tenure: input.tenure,
            interestRate: 20,
            monthlyRepayment: '300.00'
        };

        expect(calculateLoan(input)).toEqual(output);
    });
});
