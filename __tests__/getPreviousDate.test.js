
const getPreviousDate = require('../modules/getPreviousDate');

test('Previous date test', () => {
    // expect(getPreviousDate(4, 16, 2024)) ....

    expect(getPreviousDate(4, 16, 2024)).toEqual({ month: 4, day: 15, year: 2024 });
    expect(getPreviousDate(4, 30, 2024)).toEqual({ month: 4, day: 29, year: 2024 });
    expect(getPreviousDate(5, 31, 2024)).toEqual({ month: 5, day: 30, year: 2024 });
    expect(getPreviousDate(2, 29, 2024)).toEqual({ month: 2, day: 28, year: 2024 });
    expect(getPreviousDate(2, 28, 2023)).toEqual({ month: 2, day: 27, year: 2023 });
    expect(getPreviousDate(4, 1, 2024)).toEqual({ month: 3, day: 31, year: 2024 });
    expect(getPreviousDate(1, 1, 2024)).toEqual({ month: 12, day: 31, year: 2023 });
});