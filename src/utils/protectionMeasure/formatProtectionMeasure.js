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
    const startDate = measure.start_date
        ? new Date(measure.start_date)
        : null;

    let endDate = measure.end_date
        ? new Date(measure.end_date)
        : null;

    if (startDate && startDate > currentDate) {
        return `Débute le ${formatLongDate(startDate)}`;
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

    const currentDate = new Date();

    if (measure.start_date) {
        const startDate = new Date(measure.start_date);

        if (startDate > currentDate) {
            return measureStatuses.upcoming;
        }
    }

    if (measure.end_date) {
        const endDate = new Date(measure.end_date);

        if (endDate < currentDate) {
            return measureStatuses.ended;
        }
    }

    return measureStatuses.active;
}

export {
    getMeasureLabel,
    getMeasureDeadline,
    getMeasureDeadlineLabel,
    getMeasureStatus,
};