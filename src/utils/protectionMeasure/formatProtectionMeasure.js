import { commonMessages, measureStatuses } from "@/data";

function getMeasureLabel(measure) {
    if (!measure) {
        return commonMessages.noMeasure;
    }

    const measureType = measure.measure_type ?? commonMessages.notProvidedFeminine;

    return measureType;
}

function getMeasureDeadline(measure) {
    if (!measure?.end_date) {
        return commonMessages.notProvidedFeminine;
    }

    return measure.end_date;
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
    getMeasureStatus,
};