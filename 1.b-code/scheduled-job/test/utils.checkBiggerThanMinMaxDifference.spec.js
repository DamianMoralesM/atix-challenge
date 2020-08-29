
const expect = require('chai').expect;
const { Utils } = require('../utils');


describe("checkBiggerThanMinMaxDifference function", () => {
    it("Min Max Difference bigger than given value", () => {
        const result = Utils.checkBiggerThanMinMaxDifference([1, 100], 50);

        expect(result).to.equal(true);
    });

    it("Min Max Difference smaller than given value", () => {
        const result = Utils.checkBiggerThanMinMaxDifference([1, 14], 100);

        expect(result).to.equal(false);
    });
});