/**
 * Converts a value into a valid Date object.
 *
 * @param {string|Date|null} value
 * @returns {Date|null}
 */
function createDate(value) {
    if (!value) {
        return null;
    }

    const date = new Date(value);

    if (Number.isNaN(date.getTime())) {
        return null;
    }

    return date;
}

/**
 * Returns a copy of a date with a number of months added.
 *
 * @param {string|Date|null} value
 * @param {number} months
 * @returns {Date|null}
 */
function addMonths(value, months) {
    const date = createDate(value);

    if (!date) {
        return null;
    }

    const newDate = new Date(date);

    newDate.setMonth(
        newDate.getMonth() + months
    );

    return newDate;
}

/**
 * Returns a copy of a date with a number of years added.
 *
 * @param {string|Date|null} value
 * @param {number} years
 * @returns {Date|null}
 */
function addYears(value, years) {
    const date = createDate(value);

    if (!date) {
        return null;
    }

    const newDate = new Date(date);

    newDate.setFullYear(
        newDate.getFullYear() + years
    );

    return newDate;
}

/**
 * Returns the last anniversary of a reference date.
 *
 * @param {string|Date|null} referenceDate
 * @param {Date} currentDate
 * @returns {Date|null}
 */
function getLastAnniversary(
    referenceDate,
    currentDate = new Date()
) {
    const date = createDate(referenceDate);

    if (!date) {
        return null;
    }

    const anniversary = new Date(
        currentDate.getFullYear(),
        date.getMonth(),
        date.getDate()
    );

    if (anniversary > currentDate) {
        anniversary.setFullYear(
            anniversary.getFullYear() - 1
        );
    }

    return anniversary;
}

/**
 * Returns the next anniversary of a reference date.
 *
 * @param {string|Date|null} referenceDate
 * @param {Date} currentDate
 * @returns {Date|null}
 */
function getNextAnniversary(
    referenceDate,
    currentDate = new Date()
) {
    const date = createDate(referenceDate);

    if (!date) {
        return null;
    }

    const anniversary = new Date(
        currentDate.getFullYear(),
        date.getMonth(),
        date.getDate()
    );

    if (anniversary <= currentDate) {
        anniversary.setFullYear(
            anniversary.getFullYear() + 1
        );
    }

    return anniversary;
}

/**
 * Checks whether a date is within an inclusive period.
 *
 * @param {string|Date|null} value
 * @param {string|Date|null} startDate
 * @param {string|Date|null} endDate
 * @returns {boolean}
 */
function isDateWithinPeriod(
    value,
    startDate,
    endDate
) {
    const date = createDate(value);
    const start = createDate(startDate);
    const end = createDate(endDate);

    if (!date || !start || !end) {
        return false;
    }

    return (
        date >= start &&
        date <= end
    );
}

export {
    addMonths,
    addYears,
    createDate,
    getLastAnniversary,
    getNextAnniversary,
    isDateWithinPeriod,
};