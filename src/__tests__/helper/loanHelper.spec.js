import { tenureToString, convertToCurrency, calculateLoan } from '../../helper/loanHelper';

describe("Tenure to string", () => {
    test("it should convert whole tenure value to string", () => {
        const input = 12;
        const output = '1 year';

        expect(tenureToString(input)).toEqual(output);
    });
});

describe("Tenure to string", () => {
    test("it should convert fractional tenure value to string", () => {
        const input = 30;
        const output = '2½ years';

        expect(tenureToString(input)).toEqual(output);
    });
});

describe("Convert to currency", () => {
    test("it should convert value to currency", () => {
        const input = 300;
        const output = '£300.00';

        expect(convertToCurrency(input, 2)).toEqual(output);
    });
});

describe("Convert to currency", () => {
    test("it should convert value to specified currency", () => {
        const input = 300;
        const output = '$300.00';

        expect(convertToCurrency(input, 2, 'USD')).toEqual(output);
    });
});

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
            monthlyRepayment: '112.83'
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
            monthlyRepayment: '880.58'
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
            monthlyRepayment: '2398.25'
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
            monthlyRepayment: '4054.77'
        };

        expect(calculateLoan(input)).toEqual(output);
    });
});
