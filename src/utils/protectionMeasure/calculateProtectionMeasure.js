import {addMonths, addYears, getLastAnniversary, isDateWithinPeriod} from "@/utils/date";

import { getMeasureDeadline } from "./formatProtectionMeasure";

/**
 * Checks whether a protection measure ends within the next months.
 *
 * @param {object|null} measure
 * @param {number} months
 * @returns {boolean}
 */
function isMeasureUrgent(measure, months = 3) {
    const deadline = getMeasureDeadline(measure, null);

    if (!deadline) {
        return false;
    }

    const currentDate = new Date();
    const urgentLimitDate = addMonths(currentDate, months);

    return isDateWithinPeriod(
        deadline,
        currentDate,
        urgentLimitDate
    );
}

/**
 * Checks whether the annual management account is within
 * its submission period.
 *
 * @param {object|null} measure
 * @param {number} submissionPeriodMonths
 * @returns {boolean}
 */
function hasManagementAccountToSubmit(measure,submissionPeriodMonths = 6) {
    if (!measure?.judgment_date) {
        return false;
    }

    const currentDate = new Date();
    const judgmentDate = new Date(measure.judgment_date);

    const firstAnniversary = new Date(judgmentDate);

    firstAnniversary.setFullYear(
        firstAnniversary.getFullYear() + 1
    );

    if (currentDate < firstAnniversary) {
        return false;
    }

    const lastAnniversary = getLastAnniversary(
        measure.judgment_date
    );

    const submissionLimitDate = addMonths(
        lastAnniversary,
        submissionPeriodMonths
    );

    return isDateWithinPeriod(
        currentDate,
        lastAnniversary,
        submissionLimitDate
    );
}

function getTheoreticalMeasureEndDate(measure) {
    if (
        !measure?.start_date ||
        !measure?.duration_years
    ) {
        return null;
    }

    return addYears(
        measure.start_date,
        measure.duration_years
    );
}

export {
    hasManagementAccountToSubmit,
    isMeasureUrgent,
    getTheoreticalMeasureEndDate,
};