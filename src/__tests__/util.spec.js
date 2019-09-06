import { tenureToString, convertToCurrency } from '../util/util';

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
