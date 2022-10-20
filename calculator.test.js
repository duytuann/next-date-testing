const {expect, test} = require("@jest/globals");
const calcNextDate = require("./calculator");
const dataTest = require("./datatest.json");

// Boundary Value Analysis and Equivalence Partitioning Testing
// dataTest.forEach((element, index) => {
//     test(`CalculatorNextDate ${index + 1}`, () => {
//         expect(calcNextDate(element.input)).toBe(element.expected);
//     });
// });

test(`CalculatorNextDate`, () => {
    expect(calcNextDate("12/31/1899")).toBe("Invalid");
});

test(`CalculatorNextDate`, () => {
    expect(calcNextDate("01/30/1997")).toBe("01/31/1997");
});

test(`CalculatorNextDate`, () => {
    expect(calcNextDate("01/31/1997")).toBe("02/01/1997");
});

test(`CalculatorNextDate`, () => {
    expect(calcNextDate("12/31/1997")).toBe("01/01/1998");
});
