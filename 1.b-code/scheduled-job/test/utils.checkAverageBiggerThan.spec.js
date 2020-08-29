
const expect = require('chai').expect;
const { Utils } = require('../utils');


describe("checkAverageBiggerThan function", () => {
    it("Average bigger than given value", () => {
        const result = Utils.checkAverageBiggerThan([9, 9], 7);

        expect(result).to.equal(true);
    });

    it("Average smaller than given value", () => {
        const result = Utils.checkAverageBiggerThan([1, 1], 7);

        expect(result).to.equal(false);
    });
});