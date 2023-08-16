const sum = require('./sum');

test('測試 1 + 2 等於 3', () => {
    expect(sum(1,2)).toEqual(3);
})