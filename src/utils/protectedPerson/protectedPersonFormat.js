import { formatDate, formatPhoneNumber } from "../format";

/**
 * Joins non-empty values with the provided separator.
 */
function joinContactValues(values, separator = " ") {
    const validValues = values.filter((value) => (
        value !== null
        && value !== undefined
        && value !== ""
    ));

    return validValues.join(separator);
}

/**
 * Formats the full name of a contact.
 */
function formatFullName(firstname, lastname) {
    const fullname = joinContactValues([
        firstname,
        lastname,
    ]);

    return fullname || "Non renseigné";
}

/**
 * Formats the birth date and birth place of a contact.
 */
function formatBirthInformation(birthDate, birthPlace) {
    const formattedBirthDate = birthDate
        ? formatDate(birthDate)
        : null;

    const birthInformation = joinContactValues(
        [
            formattedBirthDate,
            birthPlace,
        ],
        " à "
    );

    return birthInformation || "Non renseigné";
}

/**
 * Formats the complete address of a contact.
 */
function formatContactAddress(address, postalCode, city) {
    const location = joinContactValues([
        postalCode,
        city,
    ]);

    const completeAddress = joinContactValues(
        [
            address,
            location,
        ],
        ", "
    );

    return completeAddress || "Non renseigné";
}

/**
 * Returns the formatted value of a contact field.
 */
function formatContactFieldValue(field, contact) {
    const fieldName = field.name;

    if (!Array.isArray(fieldName)) {
        if (fieldName === "phone") {
            return formatPhoneNumber(contact.phone);
        }

        return contact[fieldName] ?? "Non renseigné";
    }

    const isFullnameField = fieldName.includes("firstname")
        && fieldName.includes("lastname");

    if (isFullnameField) {
        return formatFullName(
            contact.firstname,
            contact.lastname
        );
    }

    const isBirthField = fieldName.includes("birth_date")
        && fieldName.includes("birth_place");

    if (isBirthField) {
        return formatBirthInformation(
            contact.birth_date,
            contact.birth_place
        );
    }

    const isAddressField = fieldName.includes("address")
        && fieldName.includes("postal_code")
        && fieldName.includes("city");

    if (isAddressField) {
        return formatContactAddress(
            contact.address,
            contact.postal_code,
            contact.city
        );
    }

    return "Non renseigné";
}

/**
 * Prepares contact cards from API data and display configuration.
 */
function formatContactCards(contacts, cardTypes) {
    const cards = contacts.map((contact) => {
        const card = cardTypes[contact.contact_type];

        if (!card) {
            return null;
        }

        const fields = card.fields.map((field) => ({
            ...field,
            value: formatContactFieldValue(field, contact),
        }));

        return {
            id: contact.id,
            title: card.title,
            fields,
            contact,
        };
    });

    const availableCards = cards.filter((card) => card !== null);

    return availableCards;
}

/**
 * Prepares contact table rows for a specific contact type.
 */
function formatContactTableRows(contacts, contactType) {
    const selectedContacts = contacts.filter((contact) => (
        contact.contact_type === contactType
    ));

    const contactRows = selectedContacts.map((contact) => ({
        id: contact.id,
        fullname: formatFullName(
            contact.firstname,
            contact.lastname
        ),
        relation: contact.relation_type ?? "Non renseigné",
        birth: formatBirthInformation(
            contact.birth_date,
            contact.birth_place
        ),
        address: formatContactAddress(
            contact.address,
            contact.postal_code,
            contact.city
        ),
        phone: formatPhoneNumber(contact.phone),
        email: contact.email ?? "Non renseigné",
        profession: contact.profession ?? "Non renseigné",
    }));

    return contactRows;
}

function formatCivility(civility) {
    const civilityLabels = {
        madam: "Madame",
        sir: "Monsieur",
    };

    return civilityLabels[civility] ?? "Non renseigné";
}

export {
    formatBirthInformation,
    formatContactAddress,
    formatContactCards,
    formatContactFieldValue,
    formatContactTableRows,
    formatFullName,
    formatCivility,
};