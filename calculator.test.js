const {expect, test} = require("@jest/globals");
const calcNextDate = require("./calculator");
const dataTest = require("./datatest.json");

dataTest.forEach((element, index) => {
    test(`CalculatorNextDate ${index + 1}`, () => {
        expect(calcNextDate(element.input)).toBe(element.expected);
    });
});
