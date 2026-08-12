import { commonMessages, measureStatuses } from "@/data";
import { addMonths, addYears } from "../date";
import { getTheoreticalMeasureEndDate } from "./calculateProtectionMeasure";

function getMeasureLabel(measure) {
    if (!measure) {
        return commonMessages.noMeasure;
    }

    const measureType = measure.measure_type ?? commonMessages.notProvidedFeminine;

    return measureType;
}

function getMeasureDeadline(measure, fallback = commonMessages.notProvidedFeminine) {
    if (!measure?.start_date ||!measure?.duration_years) {
        return fallback;
    }

    return addYears(
        measure.start_date,
        measure.duration_years
    );
}

function getMeasureDeadlineLabel(measure) {
    if (!measure) {
        return commonMessages.notProvidedFeminine;
    }

    if (measure.end_date) {
        const endDate = new Date(measure.end_date);

        return `Terminée depuis le ${formatDate(endDate)}`;
    }

    const theoreticalEndDate = getTheoreticalMeasureEndDate(measure);

    if (!theoreticalEndDate) {
        return commonMessages.notProvidedFeminine;
    }

    const currentDate = new Date();
    const urgentLimitDate = addMonths(currentDate, 3);

    if (
        theoreticalEndDate >= currentDate &&
        theoreticalEndDate <= urgentLimitDate
    ) {
        return `Fin le ${formatDate(theoreticalEndDate)}`;
    }

    return "En cours";
}

function getMeasureStatus(measure) {
    if (!measure) {
        return measureStatuses.noMeasure;
    }

    if (measure.end_date) {
        return measureStatuses.ended;
    }

    return measureStatuses.active;
}

export {
    getMeasureLabel,
    getMeasureDeadline,
    getMeasureDeadlineLabel,
    getMeasureStatus,
};