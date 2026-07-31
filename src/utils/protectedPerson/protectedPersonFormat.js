import { formatDate } from "../format";

function formatFullName(firstname, lastname) {
    return [firstname, lastname]
        .filter(Boolean)
        .join(" ");
}

function formatBirthInformation(birthDate, birthPlace) {
    return [formatDate(birthDate), birthPlace]
        .filter(Boolean)
        .join(" à ");
}

function formatContactFieldValue(field, contact) {
    if (!Array.isArray(field.name)) {
        return contact[field.name] ?? "Non renseigné";
    }

    if (field.name.includes("firstname") && field.name.includes("lastname")) {
        const fullname = [
            contact.firstname,
            contact.lastname,
        ]
            .filter(Boolean)
            .join(" ");

        return fullname || "Non renseigné";
    }

    if (field.name.includes("birth_date") && field.name.includes("birth_place")) {
        const birthDate = contact.birth_date
            ? formatDate(contact.birth_date)
            : null;

        const birth = [
            birthDate,
            contact.birth_place,
        ]
            .filter(Boolean)
            .join(" à ");

        return birth || "Non renseigné";
    }

    return "Non renseigné";
}

export {
    formatBirthInformation,
    formatFullName,
    formatContactFieldValue,
};