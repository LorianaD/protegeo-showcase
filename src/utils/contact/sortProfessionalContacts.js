const professionalContactTypeOrder = [
    "doctor",
    "social_worker",
    "professional_guardian",
    "lawyer",
    "notary",
];

/**
 * Sorts professional contacts according to their business category.
 */
function sortProfessionalContacts(contacts) {
    return [...contacts].sort((firstContact, secondContact) => {
        const firstPosition = professionalContactTypeOrder.indexOf(
            firstContact.contact_type
        );

        const secondPosition = professionalContactTypeOrder.indexOf(
            secondContact.contact_type
        );

        const defaultPosition = professionalContactTypeOrder.length;

        const firstOrder = firstPosition === -1
            ? defaultPosition
            : firstPosition;

        const secondOrder = secondPosition === -1
            ? defaultPosition
            : secondPosition;

        return firstOrder - secondOrder;
    });
}

export {
    sortProfessionalContacts,
};