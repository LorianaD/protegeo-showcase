import { commonMessages, measureStatuses, options } from "@/data";
import { addMonths, addYears } from "../date";
import { getTheoreticalMeasureEndDate } from "./calculateProtectionMeasure";
import { formatDate, formatLongDate } from "../format/formatDate";

function getMeasureLabel(measure) {
    if (!measure?.measure_type) {
        return commonMessages.noMeasure;
    }

    const measureType = measure.measure_type;

    const option = options.measureType.find(
        (item) => item.value === measureType
    );

    if (option) {
        return option.label;
    }

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

    const currentDate = new Date();
    let endDate = null;

    if (measure.end_date) {
        endDate = new Date(measure.end_date);
    }

    if (!endDate) {
        endDate = getTheoreticalMeasureEndDate(measure);
    }

    if (!endDate) {
        return commonMessages.notProvidedFeminine;
    }

    if (endDate < currentDate) {
        return `Terminée depuis le ${formatLongDate(endDate)}`;
    }

    const urgentLimitDate = addMonths(currentDate, 3);

    if (
        endDate >= currentDate &&
        endDate <= urgentLimitDate
    ) {
        return `Fin le ${formatLongDate(endDate)}`;
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