const lastDayOfMonth = require('./lastDayOfMonth');

function getPreviousDate(month, day, year) {
    const lastDay = lastDayOfMonth(month -1, year);
    if (day > 1) {
        return { month, day: day - 1, year };
    } else {
        if (month > 1) {
            return { month: month - 1, day:lastDay, year };
        } else {
            return { month: 12, day: 31, year: year - 1 };
        }
    }
}

module.exports = getPreviousDate;