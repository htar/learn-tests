const utils = require("./utils");

it("should add two number", () => {
    const res = utils.add(33, 11);
    // throw new Error('Value not correct');
    if (res !== 44) {
        throw new Error(`Expected 44, but get ${res}`);
    }
});


it('Should square a number', () => {
    let num = 2
    const res = utils.square(num)
    if (res !== num * num) {
        throw new Error(`Expected ${num * num}, but get ${res}`)

    }
})