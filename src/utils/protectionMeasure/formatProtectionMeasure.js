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

function getMeasureDeadlineStatus(measure) {
    if (!measure) {
        return {
            label: commonMessages.notProvidedFeminine,
            variant: "neutral",
        };
    }

    const currentDate = new Date();

    const startDate = measure.start_date
        ? new Date(measure.start_date)
        : null;

    let endDate = measure.end_date
        ? new Date(measure.end_date)
        : null;

    if (startDate && startDate > currentDate) {
        return {
            label: `Débute le ${formatLongDate(startDate)}`,
            variant: "warning",
        };
    }

    if (!endDate) {
        endDate = getTheoreticalMeasureEndDate(measure);
    }

    if (!endDate) {
        return {
            label: commonMessages.notProvidedFeminine,
            variant: "neutral",
        };
    }

    if (endDate < currentDate) {
        return {
            label: `Terminée depuis le ${formatLongDate(endDate)}`,
            variant: "danger",
        };
    }

    const urgentLimitDate = addMonths(currentDate, 3);

    if (endDate <= urgentLimitDate) {
        return {
            label: `Fin le ${formatLongDate(endDate)}`,
            variant: "danger",
        };
    }

    return {
        label: "En cours",
        variant: "success",
    };
}

function getMeasureDeadlineLabel(measure) {
    return getMeasureDeadlineStatus;
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
    getMeasureDeadlineStatus,
};